<script>
    import { starknet } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/starknet.svelte';
    import { execute, makeCallParams } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/utils/utils';
  
  
    const get_balance = async () => {
      const data = starknet.contract.get_balance()
      return data;
    }
  
    const handleButtonClick = async () => {
      try {
        const transaction = await get_balance();
        console.log('Transaction successful:', transaction);
      } catch (error) {
        console.error('Transaction failed:', error);
      }
    }
  </script>
  
  <button on:click={handleButtonClick}>Get balance</button>
  