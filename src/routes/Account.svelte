<script lang="ts">
    import { deploy_account } from '../common/account.svelte';
    
    function handleDeployAccount() {
        console.log(deploy_account());
    }
    </script>
    
    <button on:click={handleDeployAccount}>Deploy Account</button>
    