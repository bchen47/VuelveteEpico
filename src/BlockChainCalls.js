import { ethers } from 'ethers';
import { createInstance } from './eth/forwarder';
import { signMetaTxRequest } from './signer';

/*async function sendTx(contract, name,imgUrl) {
  console.log(`Sending register tx to set name=${name}`);
  return contract.add_product(name,imgUrl);
}*/

async function sendMetaTx(contract, provider, signer, name,imgUrl) {
  console.log(`Sending register meta-tx to set name=${name}`);
  const url = process.env.REACT_APP_WEBHOOK_URL;
  if (!url) throw new Error(`Missing relayer url`);

  const forwarder = createInstance(provider);
  const from = await signer.getAddress();
  const data = contract.interface.encodeFunctionData('add_product', [name,imgUrl]);
  const to = contract.address;

  const request = await signMetaTxRequest(signer.provider, forwarder, { to, from, data });

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  });
}

async function sendMetaTxVote(contract, provider, signer, idProduct) {
  console.log(`Sending register meta-tx to set name=${idProduct}`);
  const url = process.env.REACT_APP_WEBHOOK_URL;
  if (!url) throw new Error(`Missing relayer url`);
  
  const forwarder = createInstance(provider);
  const from = await signer.getAddress();
  const data = contract.interface.encodeFunctionData('add_vote', [idProduct]);
  const to = contract.address;

  const request = await signMetaTxRequest(signer.provider, forwarder, { to, from, data });

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  });
}
export async function registerProduct(contract, provider, name,imgUrl) {
  if (!name) throw new Error(`Name cannot be empty`);
  if (!window.ethereum) throw new Error(`User wallet not found`);

  await window.ethereum.enable();
  const userProvider = new ethers.providers.Web3Provider(window.ethereum);
  const userNetwork = await userProvider.getNetwork();
  if (userNetwork.chainId !== 97) throw new Error(`Please switch to BinanceTest for signing`);
  const signer = userProvider.getSigner();
  //const from = await signer.getAddress();
  //const balance = await provider.getBalance(from);
  //const canSendTx = balance.gt(1e15);
  //if (!canSendTx) return sendTx(contract.connect(signer), name,imgUrl);
  //else
   return sendMetaTx(contract, provider, signer, name,imgUrl);
}

export async function vote(contract, provider,idProduct) {

  if (!idProduct) throw new Error(`Name cannot be empty`);
  if (!window.ethereum) throw new Error(`User wallet not found`);

  await window.ethereum.enable();
  const userProvider = new ethers.providers.Web3Provider(window.ethereum);
  const userNetwork = await userProvider.getNetwork();
  if (userNetwork.chainId !== 97) throw new Error(`Please switch to BinanceTest for signing`);
  const signer = userProvider.getSigner();
  //const from = await signer.getAddress();
  //const balance = await provider.getBalance(from);
  //const canSendTx = balance.gt(1e15);
  //if (!canSendTx) return sendTx(contract.connect(signer), name,imgUrl);
  //else
   return sendMetaTxVote(contract, provider, signer, idProduct);
}