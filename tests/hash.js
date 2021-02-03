'use strict';

const assert = require('assert');

const { Hash } = require('../lib');

describe('Hash', () => {

	describe('md5()', () => {

		it('Should return the MD5 sum of a string', async () => {

			const expectedMD5 = '7a23f3ab9b30a8a66ee6e0fbcb58f412';
			const actualMD5 = Hash.md5('Hi there, I am a test');

			assert.strictEqual(actualMD5, expectedMD5);
		});

	});

	describe('sha256()', () => {

		it('Should return the SHA256 sum of a string', async () => {

			const expectedSHA256 = '51acbea5815d026a3bee789207200842d98d6cd074aa47f5b112efc5f40e1106';
			const actualSHA256 = Hash.sha256('Hi there, I am a test');

			assert.strictEqual(actualSHA256, expectedSHA256);
		});

	});

});
