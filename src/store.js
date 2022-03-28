import { writable } from 'svelte/store';

export const router = writable([
	{
		path: '/',
		name: 'Home',
		icon: 'mdi-home'
	},
	{
		path: '/about',
		name: 'About',
		icon: 'mdi-information'
	},
	{
		path: '/contact',
		name: 'Contact',
		icon: 'mdi-email'
	},
	{
		path: '/store',
		name: 'Store',
		icon: 'mdi-store'
	},
	{
		path: '/account',
		name: 'Account',
		icon: 'mdi-account'
	}
]);

export const user = writable(null);

// auth with firebase

import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword
} from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCwVutWC9hvVqWX4OYRmlUNkmh25RxqDh4',
	authDomain: 'hummingbird-342703.firebaseapp.com',
	projectId: 'hummingbird-342703',
	storageBucket: 'hummingbird-342703.appspot.com',
	messagingSenderId: '582717715413',
	appId: '1:582717715413:web:69d28aaba8b5334a6c435c',
	measurementId: 'G-XJGFVTESR6'
};

const app = initializeApp(config);
const auth = getAuth(app);

export const userIn = async (email, password) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
export const userOut = async () => {
	return await signOut(auth);
};
export const googleIn = async () => {
	return await signInWithPopup(auth, new GoogleAuthProvider());
};
export const userCreate = async (email, password) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const online = writable('offline');
