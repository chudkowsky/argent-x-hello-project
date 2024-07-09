<script lang="ts">
	import { wallet } from '/home/mateuszpc/dev/argent-x-hello-project/src/common/wallet.svelte';

	function shortAddress(address: string) {
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}
</script>

<header class="wallet">
	<div>
		{#if wallet.account}
			<div class="account-address">
				<img src={wallet.icon} alt="Icon" class="argent-icon" />
				<div>{shortAddress(wallet.account.address)}</div>
			</div>

			<button class="disconnect-button" onclick={() => wallet.disconnect()}
				><div class="connect-desc">Disconnect</div>
			</button>
		{:else}
			<button class="connect-button" onclick={() => wallet.connect()}>
				<div class="connect-desc">Connect</div>
			</button>
		{/if}
	</div>
</header>

<style>
	.wallet {
		display: flex;
		color: #f3f4f6; /* text-neutral-100 */
	}

	.account-address {
		display: flex;
		align-items: center;
		margin-right: 0.75rem;
		background-color: #1f2937; /* bg-neutral-800 */
		padding: 0.625rem 1.25rem; /* py-2.5 px-5 */
		border-radius: 0.75rem; /* rounded-xl */
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
	}

	.argent-icon {
		margin-right: 1rem; /* mr-4 */
		display: inline-block;
		height: 1.25rem; /* h-5 */
		width: 1.25rem; /* w-5 */
		border-radius: 9999px; /* rounded-full */
	}

	.disconnect-button {
		background-color: #1f2937; /* bg-neutral-800 */
		padding: 0.625rem 2.5rem; /* py-2.5 px-10 */
		border-radius: 0.5rem; /* rounded-lg */
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
	}

	.connect-button {
		background-color: #1f2937; /* bg-neutral-800 */
		padding: 0.625rem 2.5rem; /* py-2.5 px-10 */
		border-radius: 0.5rem; /* rounded-lg */
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
	}
	.connect-desc {
		display: flex;
		align-items: center;
		color: #f3f4f6;
	}
</style>
