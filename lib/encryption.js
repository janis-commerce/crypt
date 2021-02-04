'use strict';

const crypto = require('crypto');
const { promisify } = require('util');

const { algorithms, getAlgorithmAttributes } = require('./encryption-algorithms');

const scryptAsync = promisify(crypto.scrypt);

const unsafeSalt = Buffer.alloc(16, 0);
const initVector = Buffer.alloc(16, 0);

/**
 * @module Encryption
 * @description Handles string encryption and decription
 */
module.exports = class Encryption {

	/**
	 * A key-value of the available algorithms: `AES128`, `AES192` and `AES256`.
	 *
	 * @readonly
	 * @example doSomething(Encryption.algorithms.AES128);
	 */
	static get algorithms() {
		return algorithms;
	}

	/**
	 * Encrypts a string using an encryption algorithm and returns it in hex string format.
	 *
	 * **IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector.
	 *
	 * @param {string} plainTextString String to encrypt
	 * @param {algorithms} [algorithm=this.algorithms.AES128] Algorithm to use for encrypt the string
	 * @returns {Promise<string>} Encrypted string in hex format
	 */
	static async unsafeEncrypt(plainTextString, algorithm = this.algorithms.AES128) {

		const algorithmAttributes = getAlgorithmAttributes(algorithm);

		const key = await scryptAsync('my-password', unsafeSalt, algorithmAttributes.bytes);
		const cipher = crypto.createCipheriv(algorithmAttributes.key, key, initVector);

		const encrypted = cipher.update(plainTextString);
		const encryptedBuffer = Buffer.concat([encrypted, cipher.final()]);

		return encryptedBuffer.toString('hex');
	}

	/**
	 * Decrypts a previously encrypted string with the specified algorithm
	 *
	 * **IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector
	 *
	 * @param {string} encryptedString Hex encrypted string
	 * @param {algorithms} [algorithm=this.algorithms.AES128] Algorithm used for encrypt the hex string
	 * @returns {Promise<string>} Decrypted hex string
	 */
	static async unsafeDecrypt(encryptedString, algorithm = this.algorithms.AES128) {

		const algorithmAttributes = getAlgorithmAttributes(algorithm);

		const key = await scryptAsync('my-password', unsafeSalt, algorithmAttributes.bytes);
		const decipher = crypto.createDecipheriv(algorithmAttributes.key, key, initVector);

		const encryptedText = Buffer.from(encryptedString, 'hex');
		const decrypted = decipher.update(encryptedText);
		const decryptedBuffer = Buffer.concat([decrypted, decipher.final()]);

		return decryptedBuffer.toString();
	}

};
