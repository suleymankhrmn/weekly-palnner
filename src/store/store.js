import { writable } from 'svelte/store';

export const enablePlay = writable(false);
export const intervalId = writable();
export const totalSeconds= writable(0);