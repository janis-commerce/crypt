'use strict';

const assert = require('assert');
const sinon = require('sinon');

const crypto = require('crypto');

const { Random } = require('../lib');

describe('Random', () => {

	describe('hexString()', () => {

		it('Should resolve a string of 16 characters by default', async () => {

			const string = await Random.hexString();

			assert.strictEqual(typeof string, 'string');
			assert.strictEqual(string.length, 16);
		});

		it('Should resolve a different string each time it is called', async () => {

			const string1 = await Random.hexString();
			const string2 = await Random.hexString();

			assert.notStrictEqual(string1, string2);
		});

		it('Should resolve a custom length string if `length` param is passed', async () => {

			const string = await Random.hexString(20);

			assert.strictEqual(typeof string, 'string');
			assert.strictEqual(string.length, 20);
		});

		it('Should reject if an invalid length is passed or if crypto module throws an error', async () => {
			assert.rejects(Random.hexString('not a number'));
		});

		it('Should reject if an invalid length is passed or if crypto module throws an error', async () => {

			const fakeError = new Error('Internal crypto error');

			sinon.stub(crypto, 'randomBytes')
				.yields(fakeError);

			assert.rejects(Random.hexString('not a number'), fakeError);

			sinon.restore();
		});

	});

});
