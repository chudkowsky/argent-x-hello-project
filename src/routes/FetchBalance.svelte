<script lang="ts">
  import { starknet } from '../common/starknet.svelte';
  import { execute, makeCallParams } from '../common/utils/utils';
  import { onMount } from 'svelte';

  let balance : string | number | bigint | null = 0; // Reactive variable to hold the balance

  const get_balance = async () => {
    const data = await starknet.contract.get_balance();
    return data;
  }

  const handleButtonClick = async () => {
    try {
      const data = await get_balance();
      balance = data; 
      console.log('Transaction successful:', data);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  }

  onMount(() => {
    handleButtonClick(); // Optionally fetch the balance on component mount
  });
</script>

<button on:click={handleButtonClick}>Get balance</button>

{#if balance !== null}
<div class="balance-window">
  <p>Balance: {balance}</p>
</div>
{/if}

<style>
.balance-window {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
