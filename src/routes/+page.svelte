<script>
    import Wallet from "./Wallet.svelte";
    import IncreaseBalance from "./IncreaseBalance.svelte";
    import FetchBalance from "./FetchBalance.svelte";
	import Account from "./Account.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Argent X DAPP test" />
</svelte:head>

<section class="center-content">
    <h1>Welcome to the Argent X demo!</h1>
    <div class="welcome">
        <Wallet />
    </div>
    <div>
        <IncreaseBalance />
    </div>
    <div>
        <FetchBalance/>
    </div>
    <div>
        <Account/>
    </div>
	
</section>

<style>
    .center-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h1 {
        width: 100%;
        margin-bottom: 20px;
    }

    .welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
