<script>
	import { Account, CallData,ec} from 'starknet';
	import { wallet } from '../common/wallet.svelte';
    import { starknet } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/starknet.svelte';
    import { execute, makeCallParams } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/utils/utils';

    let amount = 5; // Default value

    const increaseBalance = async () => {
      const data = makeCallParams(starknet.contract.populate("increase_balance", [amount]));
      const tx = await execute([data]);
      //let tx = starknet.contract.__execute__([{to:"0x52e3a5dad294fc5ad66f18d131967118d3e4030536ab2b941d71a5bb3cca6ed", calldata: ["0x4"],selector: "increase_balance"}])
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
  
<input type="number" bind:value={amount} min="1"/>
<button on:click={handleButtonClick}>Increase Balance</button>
