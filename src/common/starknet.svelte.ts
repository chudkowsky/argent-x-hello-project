import { Contract, RpcProvider, type TypedContractV2 as StarknetTypedContract } from "starknet";
import { ABI } from "./types/hello_contract";
export type TypedContract = StarknetTypedContract<typeof ABI>;

export const createStarknet = async () => {
  const provider = new RpcProvider({
    nodeUrl: "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/H3BmmFuOaYNEtpwkiuGsFMj-7wl3bTJq"
  });

  const contractAddress = "0x52e3a5dad294fc5ad66f18d131967118d3e4030536ab2b941d71a5bb3cca6ed";

  const { abi: testAbi } = await provider.getClassAt(contractAddress);

  if (testAbi === undefined) {
    throw new Error("no abi.");
  }

  const contract = new Contract(testAbi, contractAddress, provider).typedv2(ABI);
  return {
    provider,
    contract,
  };
};
export const starknet = await createStarknet();
