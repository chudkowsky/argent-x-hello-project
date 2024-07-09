import { starknet } from "/home/mateuszpc/dev/argent-x-hello-project/src/common/starknet.svelte";
import { wallet } from "/home/mateuszpc/dev/argent-x-hello-project/src/common/wallet.svelte";
import type { AllowArray, Call, Invocation } from "starknet";

export const execute = async (calls: AllowArray<Call>) => {
  if (!wallet.account) return;

  const res = await wallet.account.execute(calls, { maxFee: 1000000 });
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
