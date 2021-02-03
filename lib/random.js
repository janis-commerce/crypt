'use strict';

const crypto = require('crypto');

/**
 * @module Random
 * @description Handles random data generation
 */
module.exports = class Random {

	/**
	 * Return a variable length random hexa string
	 *
	 * @param {number} [length=16] The string length
	 * @returns {Promise<string>} An hexa string of {length} characters
	 */
	static async hexString(length = 16) {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(Math.ceil(length / 2), (err, buf) => {
				if(err)
					return reject(err);

				resolve(buf.toString('hex').substr(0, length));
			});
		});
	}
};
