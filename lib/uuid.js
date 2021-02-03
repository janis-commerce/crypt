'use strict';

const { v4, validate } = require('uuid');

/**
 * @typedef {string} UUIDString
 */

module.exports = class UUID {

	/**
	 * @returns {UUIDString}
	 */
	static getUuid() {
		return v4();
	}

	/**
	 * Validate if a string is a valida UUID
	 *
	 * @param {string} uuid The UUID to validate
	 * @returns {boolean} True if is valid, false otherwise
	 */
	static validate(uuid) {
		return validate(uuid);
	}

};
