import { writable } from 'svelte/store';
import {Status} from "../utils/enums"

export const enablePlay = writable(false);
export const intervalId = writable();
export const totalSeconds = writable(0);
export const status = writable(Status.WORKING);
export const breakCount = writable(0);