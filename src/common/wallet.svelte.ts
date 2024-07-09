import { AccountInterface, ProviderInterface } from "starknet";
import { connect as connectStarknet, disconnect as disconnectStarknet } from "starknetkit";

function createWallet() {
  let account: AccountInterface | null = $state(null);
  let icon: string | null = $state(null);
  let provider: ProviderInterface | null = $state(null);

  async function connect() {
    try {
      const { wallet } = await connectStarknet();

      if (wallet) {
        account = wallet.account as AccountInterface;
        provider = wallet.provider;
        icon = wallet.icon;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function disconnect() {
    try {
      await disconnectStarknet({
        clearLastWallet: true
      });

      account = null;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    get account() {
      return account;
    },
    get icon() {
      return icon;
    },
    get provider() {
      return provider;
    },
    connect,
    disconnect
  };
}

export const wallet = createWallet();
