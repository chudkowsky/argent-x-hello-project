import { starknet } from "/home/mateuszpc/dev/argent-x-hello-project/src/common/starknet.svelte";
import { wallet } from "/home/mateuszpc/dev/argent-x-hello-project/src/common/wallet.svelte";
import { Account, type AllowArray, type Call, type Invocation } from "starknet";

export const execute = async (calls: AllowArray<Call>) => {
  if (!wallet.account) return;
  wallet.account.address = "0x77bd7816d78e24b8bab653bc3a45777ce773931493de998be4ff178e324f9a3"
  let account = new Account(starknet.provider, "0x77bd7816d78e24b8bab653bc3a45777ce773931493de998be4ff178e324f9a3", wallet.account.signer);
  const res = await account.execute(calls);
  const tx = await starknet.provider.waitForTransaction(res.transaction_hash);
  return tx;
};

export const makeCallParams = (data: Invocation): Call => {
  return {
    contractAddress: data.contractAddress,
    calldata: data.calldata,
    entrypoint: data.entrypoint as string
  };
};

export const toHex = (value: bigint | string) => "0x" + value.toString(16);
