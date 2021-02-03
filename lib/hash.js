'use strict';

const crypto = require('crypto');

/**
 * @module Hash
 * @description Handles different string hashing mechanisms
 */
module.exports = class Hash {

	/**
	 * Get the MD5 of a string
	 *
	 * @param {string} string The string
	 * @returns {string} The MD5 of the string
	 */
	static md5(string) {
		return crypto
			.createHash('md5')
			.update(string)
			.digest('hex');
	}

	/**
	 * Get the SHA 256 hash of a string
	 *
	 * @param {string} string The string
	 * @returns {string} The MD5 of the string
	 */
	static sha256(string, digest = 'hex') {
		return crypto
			.createHash('sha256')
			.update(string)
			.digest(digest);
	}
};
