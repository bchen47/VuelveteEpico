// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/metatx/MinimalForwarder.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyContract is ERC2771Context {
    struct Product {
        string name;
        uint256 vote_count;
        uint256 id;
        string imgUrl;
    }

    uint256 public products_count;
    constructor(MinimalForwarder forwarder) // Initialize trusted forwarder
        ERC2771Context(address(forwarder)) {
    }
    /*
    function initialize(MinimalForwarder forwarder) public {
        __ERC2771Context_init(address(forwarder));
    }
*/
    event Voted(uint256 id);
    event AddProduct(uint256 product_id, string name, uint256 total_vote);

    mapping(uint256 => Product) public Products;
    mapping(address => bool) public voters;

    modifier already_voted() {
        require(
            voters[msg.sender] == false,
            "The vote has already been casted"
        );
        _;
    }

    // FUNCTION TO vote
    function add_vote(uint256 _id) public already_voted {
        require(_id >= 0 && _id < products_count, "Invalid option");
        voters[msg.sender] = true;
        Products[_id].vote_count++;
        emit Voted(_id);
        // ,Candidates[_id].vote_count
    }

    function add_product(string memory _name, string memory _imgUrl) public {
        Products[products_count] = Product(_name, 0, products_count, _imgUrl);
        products_count++;
        emit AddProduct(
            products_count,
            _name,
            Products[products_count - 1].vote_count
        );
    }

    function getProducts() public view returns (Product[] memory) {
        Product[] memory ret = new Product[](products_count);
        for (uint256 i = 0; i < products_count; i++) {
            ret[i] = Products[i];
        }
        return ret;
    }

    function getProductsCount() public view returns (uint256) {
        return products_count;
    }
}
