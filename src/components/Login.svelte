<script>
	import { user, userIn, userCreate, googleIn } from '../store';
	import axios from 'axios';
	let hasAccount = false;
	let userInput = {
		email: '',
		password: ''
	};
	async function handleSubmit(e) {
		e.preventDefault();
		if (hasAccount) {
			$user = await userIn(userInput.email, userInput.password);
		} else {
			$user = await userCreate(userInput.email, userInput.password).then(async () => {
				const res = await axios.post('/api/users', {
					email: userInput.email
				});
				return res.data;
			});
		}
	}

	async function handleGoogle(e) {
		e.preventDefault();
		$user = await googleIn();
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="email"
						class="input input-bordered"
						id="email"
						bind:value={userInput.email}
					/>
				</div>
				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="password"
						class="input input-bordered"
						id="password"
						bind:value={userInput.password}
					/>
					{#if hasAccount}
						<span
							class="hover:text-primary hover:underline cursor-pointer"
							on:click={() => {
								hasAccount = !hasAccount;
							}}>Don't have an account?</span
						>
					{:else}
						<span
							class="hover:text-primary hover:underline cursor-pointer"
							on:click={() => {
								hasAccount = !hasAccount;
							}}>Already have an account?</span
						>
					{/if}
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" class:btn-success={hasAccount} on:click={handleSubmit}
						>{hasAccount ? 'Sign In' : 'Sign Up'}</button
					>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" on:click={handleGoogle}
						><i class="mdi-google mx-4" />Sign In with Google</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
