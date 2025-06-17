import { writable } from 'svelte/store';

const initialResults = {}

export const stats = writable(initialResults)
