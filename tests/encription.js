'use strict';

const assert = require('assert');

const { Encription } = require('../lib');

describe('Encription', () => {

	const plainTextString = 'Hi there, I am a test';
	const encodedStringWithAES128 = '26ffc79ef45a8d6ff461cf3fa6ff8b67b7545347d3b5d18d904a2c85d4ec08f5';
	const encodedStringWithAES192 = '983eb608bc57ecadd02bf2374d29396d34e02425d8a20e2c114555e16020743f';
	const encodedStringWithAES256 = '9ccd79bd28c6040fa0de03ae8797109d054396ad1e904462075a3efa0e197098';

	describe('algorithms getter', () => {

		it('Should return an object with the encription algorithms enum', () => {
			assert(Encription.algorithms);
			assert.strictEqual(typeof Encription.algorithms, 'object');
			assert.strictEqual(Encription.algorithms.AES128, 'AES128');
			assert.strictEqual(Encription.algorithms.AES192, 'AES192');
			assert.strictEqual(Encription.algorithms.AES256, 'AES256');
		});

	});

	describe('unsafeEncrypt()', () => {

		it('Should resolve the encripted string using AES128 by default', async () => {
			const encriptedString = await Encription.unsafeEncrypt(plainTextString);
			assert.strictEqual(encriptedString, encodedStringWithAES128);
		});

		it('Should resolve the encripted string using a AES192 algorithm if passed as param', async () => {
			const encriptedString = await Encription.unsafeEncrypt(plainTextString, Encription.algorithms.AES192);
			assert.strictEqual(encriptedString, encodedStringWithAES192);
		});

		it('Should resolve the encripted string using a AES256 algorithm if passed as param', async () => {
			const encriptedString = await Encription.unsafeEncrypt(plainTextString, Encription.algorithms.AES256);
			assert.strictEqual(encriptedString, encodedStringWithAES256);
		});

	});

	describe('unsafeDecrypt()', () => {

		it('Should resolve the plain text string using AES128 by default', async () => {
			const decriptedString = await Encription.unsafeDecrypt(encodedStringWithAES128);
			assert.strictEqual(decriptedString, plainTextString);
		});

		it('Should resolve the plain text string using a AES192 algorithm if passed as param', async () => {
			const decriptedString = await Encription.unsafeDecrypt(encodedStringWithAES192, Encription.algorithms.AES192);
			assert.strictEqual(decriptedString, plainTextString);
		});

		it('Should resolve the plain text string using a AES256 algorithm if passed as param', async () => {
			const decriptedString = await Encription.unsafeDecrypt(encodedStringWithAES256, Encription.algorithms.AES256);
			assert.strictEqual(decriptedString, plainTextString);
		});

	});

});
