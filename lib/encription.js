'use strict';

const crypto = require('crypto');
const { promisify } = require('util');

const { algorithms, getAlgorithmAttributes } = require('./encription-algorithms');

const scryptAsync = promisify(crypto.scrypt);

const unsafeSalt = Buffer.alloc(16, 0);
const initVector = Buffer.alloc(16, 0);

module.exports = class Encription {

	static get algorithms() {
		return algorithms;
	}

	/**
	 * Encrypts a string using an encription algorithm and returns it in hex string format.
	 * **IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector.
	 *
	 * @param {string} string String to encrypt
	 * @param {algorithms} [algorithm=this.algorithms.AES128] Algorithm to use for encrypt the string
	 * @returns {Promise<string>} Encrypted string in hex format
	 */
	static async unsafeEncrypt(string, algorithm = this.algorithms.AES128) {

		const algorithmAttributes = getAlgorithmAttributes(algorithm);

		const key = await scryptAsync('my-password', unsafeSalt, algorithmAttributes.bytes);
		const cipher = crypto.createCipheriv(algorithmAttributes.key, key, initVector);

		const encrypted = cipher.update(string);
		const encryptedBuffer = Buffer.concat([encrypted, cipher.final()]);

		return encryptedBuffer.toString('hex');
	}

	/**
	 * Decrypts a previously encrypted string with the specified algorithm
	 * **IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector
	 *
	 * @param {string} hexString Hex String from previusly encrypted string
	 * @param {algorithms} [algorithm=this.algorithms.AES128] Algorithm used for encrypt the hex string
	 * @returns {Promise<string>} Decrypted hex string
	 */
	static async unsafeDecrypt(hexString, algorithm = this.algorithms.AES128) {

		const algorithmAttributes = getAlgorithmAttributes(algorithm);

		const key = await scryptAsync('my-password', unsafeSalt, algorithmAttributes.bytes);
		const decipher = crypto.createDecipheriv(algorithmAttributes.key, key, initVector);

		const encryptedText = Buffer.from(hexString, 'hex');
		const decrypted = decipher.update(encryptedText);
		const decryptedBuffer = Buffer.concat([decrypted, decipher.final()]);

		return decryptedBuffer.toString();
	}

};
