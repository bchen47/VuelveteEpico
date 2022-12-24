

module.exports = async function (deployer) {
  const { ethers } = require('hardhat')
  const { readFileSync} = require('fs');

  function getInstance(name) {
    const address = JSON.parse(readFileSync('./deploy.json'))[name];
    if (!address) throw new Error(`Contract ${name} not found in deploy.json`);
    return ethers.getContractFactory(name).then(f => f.attach(address));
  }
  const MyContract = await getInstance("MyContract");

  deployer.deploy(MyContract);
};
