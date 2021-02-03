'use strict';

/**
 * @typedef AlgorithmAttributes
 * @property {string} key
 * @property {number} bytes
 */

/**
 * @enum {AlgorithmAttributes}
 * @readonly
 */
const algorithmsAttributes = {
	AES128: { key: 'aes-128-cbc', bytes: 16 },
	AES192: { key: 'aes-192-cbc', bytes: 24 },
	AES256: { key: 'aes-256-cbc', bytes: 32 }
};

/**
 * @enum {string}
 * @readonly
 */
const algorithms = {
	AES128: 'AES128',
	AES192: 'AES192',
	AES256: 'AES256'
};

/**
 * @param {algorithms} algorithm The algorithm code. Options: AES128, AES192, AES256
 * @returns {AlgorithmAttributes}
 */
const getAlgorithmAttributes = algorithm => algorithmsAttributes[algorithm];

module.exports = {
	algorithms,
	getAlgorithmAttributes
};
