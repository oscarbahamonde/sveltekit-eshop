<script>
	import { user } from '../store';
	import Login from '../components/Login.svelte';
	import Profile from '../components/Profile.svelte';
</script>

{#if $user}
	<Profile />
{:else}
	<Login />
{/if}
