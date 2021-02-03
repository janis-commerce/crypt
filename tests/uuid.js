'use strict';

const assert = require('assert');

const { validate, version } = require('uuid');

const { UUID } = require('../lib');

describe('UUID', () => {

	describe('getUuid()', () => {

		it('Should return a valid UUID v4 as a string', () => {

			const uuid = UUID.getUuid();

			assert.strictEqual(typeof uuid, 'string');
			assert(validate(uuid));
			assert.strictEqual(version(uuid), 4);
		});

		it('Should return a new UUID each type it is called', () => {

			const uuid1 = UUID.getUuid();
			const uuid2 = UUID.getUuid();

			assert.notStrictEqual(uuid1, uuid2);
		});

	});

	describe('validate()', () => {

		it('Should return true for a valid UUID', () => {
			const uuid = '8387396b-f71d-4355-a900-845980061d3d';
			assert(UUID.validate(uuid));
		});

		it('Should return false for an invalid UUID', () => {
			const uuid = '8387396b-f71d-4355-a900-000000000000';
			assert(UUID.validate(uuid));
		});

	});

});
