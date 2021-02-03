'use strict';

const assert = require('assert');

const { Base64 } = require('../lib');

describe('Base64', () => {

	const utf8String = 's*a/asd sldas a4sad 4as4as6 4as6 54{}>???<<<><.+a';
	const base64String = 'cyphL2FzZCBzbGRhcyBhNHNhZCA0YXM0YXM2IDRhczYgNTR7fT4/Pz88PDw+PC4rYQ==';
	const base64UrlString = 'cyphL2FzZCBzbGRhcyBhNHNhZCA0YXM0YXM2IDRhczYgNTR7fT4_Pz88PDw-PC4rYQ';

	describe('encode()', () => {

		it('Should return the base64 encoding of a utf8 string', async () => {
			const encodedString = Base64.encode(utf8String);
			assert.strictEqual(encodedString, base64String);
		});

	});

	describe('decode()', () => {

		it('Should return the utf8 of a base64 string', async () => {
			const decodedString = Base64.decode(base64String);
			assert.strictEqual(decodedString, utf8String);
		});

	});

	describe('urlEncode()', () => {

		it('Should return the base64 url encoding of a utf8 string', async () => {
			const encodedString = Base64.urlEncode(utf8String);
			assert.strictEqual(encodedString, base64UrlString);
		});

	});

	describe('urlDecode()', () => {

		it('Should return the utf8 encoding of a base64url string', async () => {
			const decodedString = Base64.urlDecode(base64UrlString);
			assert.strictEqual(decodedString, utf8String);
		});

	});

});
