import { call } from 'abi-wan-kanabi';
import { Account, constants, ec, json, stark, RpcProvider, hash, CallData } from 'starknet';
import Wallet from '../routes/Wallet.svelte';
import { wallet } from './wallet.svelte';
import { makeCallParams } from './utils/utils';
import { starknet } from './starknet.svelte';

export const deploy_account = async () => {
const provider = new RpcProvider({
    nodeUrl: "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/H3BmmFuOaYNEtpwkiuGsFMj-7wl3bTJq"
  });
const privateKey = "0x00c288cd281e076508cae18280a63efe4a51fa49e6e1941bbd075ac7574ee804";
const starkKeyPub = ec.starkCurve.getStarkKey(privateKey);
const clashHash = "0x5f1d696987d433cffb98f7c90c739368aa17419daa00e3d88bc1157d0902aae";
const calculatedAddress = hash.calculateContractAddressFromHash(starkKeyPub, clashHash,["0x0","0x5dfe72b432bd8aa88c992165aadf7ff2622004e56d3fdadb715d651d5790c23", "0x1"],"0x02a9D6D1E3BE6bfA61DaB29BAEB0DF9cF0efe61c47293617c2DD00f5B4a9F4Cd");
console.log(calculatedAddress);
const account = new Account(provider,calculatedAddress, starkKeyPub);
let {contract_address,transaction_hash} = await wallet.account!.deployAccount({classHash:clashHash,constructorCalldata:["0x0","0x5dfe72b432bd8aa88c992165aadf7ff2622004e56d3fdadb715d651d5790c23", "0x1"]},)

const calls = makeCallParams(starknet.contract.populate("increase_balance", [5]));
if (!account) return;
  const res = await account.execute(calls);
  const tx = await starknet.provider.waitForTransaction(res.transaction_hash);
  return tx;
}