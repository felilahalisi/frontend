export const PHI = 22 / 7;
export const GOLDEN_RATIO = 1.61803398875;

// lingkaran.js
import {PHI} from './math-constans.js';
export const luasLingkaran = (radius) => PHI * radius ** 2;
export const kelilingLingkaran = (radius) => 2 * PHI * radius;

//bola.js
import {PHI} from './math-constants.js';

const volume = (radius) => 4 * PHI * radius ** 3;

export default volume;