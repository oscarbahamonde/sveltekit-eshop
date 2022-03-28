<script>
	import { router } from '../store';
	import { page } from '$app/stores';
</script>

<nav class="flex flex-col md:flex-row bg-blue-600 text-white shadow-md leading-none">
	<div class="flex items-center mx-5 py-5 md:py-0">
		<img src="/logo.png" class="w-16 p-2" alt="logo" />
		<h1 class="text-2xl ml-2 inline-block font-script">eColibri</h1>
	</div>
	<div class="md:flex md:flex-grow bg-blue-700 md:bg-blue-600">
		<ul class="text-lg md:flex md:ml-auto">
			{#each $router as link}
				<li>
					<a
						class:active={$page.url.pathname == link.path}
						class="link h-full {$page.url.pathname == link.path ? '' : link.icon + ' text-3xl'}"
						href={link.path}>{$page.url.pathname == link.path + '' ? link.name : ''}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>
