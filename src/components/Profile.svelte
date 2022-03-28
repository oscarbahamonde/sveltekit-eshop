<script>
	import { user } from '../store';
	import { userOut } from '../store';
	async function LogOut() {
		await userOut();
		$user = null;
		return $user;
	}
	let checked = false;
</script>

<div class={checked ? 'bg-success flex' : '100 bg-base-300 flex'}>
	<div
		class="flex flex-col items-center my-8 bg-info w-1/3 rounded-2xl m-auto py-12 text-black font-bold shadow-2xl"
	>
		<div class={checked ? 'avatar online ' : 'avatar offline'}>
			<div
				class={checked
					? 'w-24 rounded-full border-2 border-success bg-success'
					: 'w-24 rounded-full border-2 border-base-300 bg-base-300'}
			>
				<a href={$user.user.photoURL}><img src={$user.user.photoURL} alt="avatar" /></a>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<h1 class="text-2xl font-sans my-4">{$user.user.displayName}</h1>
			<h2 class="text-lg font-serif my-4">{$user.user.email}</h2>
			<h3>
				<input
					type="checkbox"
					id="checkbox"
					class="checkbox checkbox-success  bg-base-300 border-2  border-black  mx-4"
					bind:checked
				/><label for="checkbox" class="text-lg align-top font-sans"
					>{checked ? 'Online' : 'Offline '}</label
				>
			</h3>
			<button class="btn btn-error my-4 rounded-xl" on:click={LogOut}>Logout</button>
		</div>
	</div>
</div>
