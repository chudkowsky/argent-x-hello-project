<script>
	import { Account, CallData } from 'starknet';
	import { wallet } from '../common/wallet.svelte';
    import { starknet } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/starknet.svelte';
    import { execute, makeCallParams } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/utils/utils';
    let amount = 5;
  
    const increaseBalance = async () => {
      const data = makeCallParams(starknet.contract.populate("increase_balance", [amount]));
      const tx = await execute([data]);
      return tx;
    }
  
    const handleButtonClick = async () => {
      try {
        const transaction = await increaseBalance();
        console.log('Transaction successful:', transaction);
      } catch (error) {
        console.error('Transaction failed:', error);
      }
    }
  </script>
  
  <button on:click={handleButtonClick}>Increase Balance</button>
  