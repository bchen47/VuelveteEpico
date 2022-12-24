import { ethers } from 'ethers';
import { MyContract as address } from '../deploy.json';

const abi = [
  "function getProductsCount() view returns (int256)",

  {"inputs":[{"internalType":"contract MinimalForwarder","name":"forwarder","type":"address"}],
  "stateMutability":"nonpayable","type":"constructor"},
    {"anonymous":false,
      "inputs":[
      {"indexed":true,"internalType":"address","name":"who","type":"address"},
      {"indexed":false,"internalType":"string","name":"name","type":"string"},
      {"indexed":false,"internalType":"string","name":"imgUrl","type":"string"}],
      "name":"AddProduct","type":"event"
    },
  {"inputs":[
    {"internalType":"address","name":"forwarder","type":"address"}
  ],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],
  "name":"names","outputs":[{"internalType":"string","name":"","type":"string"}]
  ,"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"owners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imgUrl","type":"string"}],"name":"add_product","outputs":[],"stateMutability":"nonpayable","type":"function"}
  
  ,
  {
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_id",
      "type": "uint256"
    }
  ],
  "name": "add_vote",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
  {
    "inputs": [],
    "name": "getProducts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "vote_count",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "imgUrl",
            "type": "string"
          }
        ],
        "internalType": "struct MyContract.Product[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },    
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "Voted",
    "type": "event"
  },
];

export function createInstance(provider) {
  return new ethers.Contract(address, abi, provider);
}
