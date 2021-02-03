'use strict';

const padString = string => {
	const padLength = string.length % 4;
	return `${string}${'='.repeat(padLength)}`;
};

module.exports = class Base64 {

	/**
	 * Transform a string from utf8 to base64-encode
	 *
	 * @param {string} string A utf-8 encoded string
	 * @returns {string}
	 */
	static encode(string) {
		return Buffer.from(string, 'utf-8')
			.toString('base64');
	}

	/**
	 * Transform a string from base64-encode to utf8
	 *
	 * @param {string} string A base64 encoded string
	 * @returns {string}
	 */
	static decode(base64string) {
		return Buffer.from(base64string, 'base64')
			.toString('utf-8');
	}

	/**
	 * Transform a string from utf8 to base64-url-encode
	 *
	 * @param {string} string A utf-8 encoded string
	 * @returns {string}
	 */
	static urlEncode(string) {
		return this.encode(string)
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	}

	/**
	 * Transform a string from base64-url-encode to utf8
	 *
	 * @param {string} string A base64-url encoded string
	 * @returns {string}
	 */
	static urlDecode(base64string) {
		return this.decode(
			padString(base64string)
				.replace(/-/g, '+')
				.replace(/_/g, '/')
		);
	}
};
