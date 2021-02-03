<a name="module_Encription"></a>

## Encription
Handles string encription and decription


* [Encription](#module_Encription)
    * [.algorithms](#module_Encription.algorithms)
    * [.unsafeEncrypt(plainTextString, [algorithm])](#module_Encription.unsafeEncrypt) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.unsafeDecrypt(encryptedString, [algorithm])](#module_Encription.unsafeDecrypt) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="module_Encription.algorithms"></a>

### Encription.algorithms
A key-value of the available algorithms: `AES128`, `AES192` and `AES256`.

**Kind**: static property of [<code>Encription</code>](#module_Encription)  
**Read only**: true  
**Example**  
```js
doSomething(Encription.algorithms.AES128);
```
<a name="module_Encription.unsafeEncrypt"></a>

### Encription.unsafeEncrypt(plainTextString, [algorithm]) ⇒ <code>Promise.&lt;string&gt;</code>
Encrypts a string using an encription algorithm and returns it in hex string format.

**IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector.

**Kind**: static method of [<code>Encription</code>](#module_Encription)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Encrypted string in hex format  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| plainTextString | <code>string</code> |  | String to encrypt |
| [algorithm] | <code>algorithms</code> | <code>this.algorithms.AES128</code> | Algorithm to use for encrypt the string |

<a name="module_Encription.unsafeDecrypt"></a>

### Encription.unsafeDecrypt(encryptedString, [algorithm]) ⇒ <code>Promise.&lt;string&gt;</code>
Decrypts a previously encrypted string with the specified algorithm

**IMPORTANT**: This method is not cryptographically secure. It uses a fixed non-random salt and initialization vector

**Kind**: static method of [<code>Encription</code>](#module_Encription)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Decrypted hex string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| encryptedString | <code>string</code> |  | Hex encrypted string |
| [algorithm] | <code>algorithms</code> | <code>this.algorithms.AES128</code> | Algorithm used for encrypt the hex string |
