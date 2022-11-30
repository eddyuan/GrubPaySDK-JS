# Grubpay.js ES Module

Use [Grubpay.js](https://develop.grubpay.io/guide) as an ES module.

**Note**: To be
PCI compliant,
you must load Grubpay.js directly from `https://api.grubpay.io/v4/grubpay.js`. You cannot
include it in a bundle or host it yourself. This package wraps the global
`Grubpay` function provided by the Grubpay.js script as an ES module.

[![npm version](https://img.shields.io/npm/v/@grubpay/grubpay-js.svg?style=flat-square)](https://www.npmjs.com/package/@grubpay/grubpay-js)

## Installation

Use `npm` to install the Grubpay.js module:

```sh
npm install @grubpay/grubpay-js
```

or

```sh
yarn add @grubpay/grubpay-js
```

## Usage

### `loadGrubpay`

This function returns a `Promise` that resolves with a newly created `Grubpay`
instance once `Grubpay.js` has loaded. It takes the same parameters passed when
directly
[initializing a `Grubpay` instance](https://develop.grubpay.io/guide/self_hosted_integration.html#integration-guide). If
necessary, it will load Grubpay.js for you by inserting the Grubpay.js script tag.
If you call `loadGrubpay` in a server environment it will resolve to `null`.

```js
import { loadGrubpay } from '@grubpay/grubpay-js';

const options = {
  // Only available in pay mode
  // Default is true, when showing, customer can decide if he/she wants
  // to save the card, and if decided to save, card's token will be returned
  // to the merchant upon submitPayment()
  showSaveCardCheckBox: false,
  defaultCheckBoxValue: false, // This option is only available in pay mode
  checkboxToggleStyle: true, // true, false Checkbox or Switch/Toggle style?
  // these are all the appearance options
  // For simple usage, you can just specify a theme and colorPrimary
  appearance: {
    theme: 'default', // 'default','simple','minimal'
    dense: false, // true, false
    dark: false, // true, false
    variables: {
      colorPrimary: 'rgb(43, 196, 107)',
    },
  },
};

const grubpayElement = await loadGrubpay('yourSecureId', options);
```

### Mount in html

```js
// Mount grubpay form on html container with querySelector eg: #grubpay-container
let mounted = await grubpayElement.mount('#grubpay-container');
```

### Submit payment when user clicked your submit button

```js
// Mount grubpay form on html container with querySelector eg: #grubpay-container
// If [forceSaveCard] is set to true, the card will be save regardless of user's choice on the checkbox
let res = await grubpayElement.submitPayment({ forceSaveCard: false });
if (res.success) {
  // Do success logic
} else {
  // Do fail or pending logic accordingly. Refer to [https://develop.grubpay.io] for detail
}
```

For more information on how to use Grubpay.js, please refer to the
[Grubpay.js API guide](https://develop.grubpay.io/guide).

## TypeScript support

This package includes TypeScript declarations for Grubpay.js. We support projects
using TypeScript versions >= 3.1.

The type declarations in
`@grubpay/grubpay-js` for these objects in will always track the
latest version of the Grubpay API. If you would like to use these types but are using an older version of the Grubpay
API, we recommend updating to the latest version, or ignoring and overriding the type definitions as necessary.

Note that we may release new versions of `@grubpay/grubpay-js` with small but backwards-incompatible fixes to the type
declarations. These changes will not affect Grubpay.js itself.

## Make Grubpay.js is available everywhere

By default, this module will insert a `<script>` tag that loads Grubpay.js from
`https://api.grubpay.io`. If your want to let the script load before import the module, you can also add :

```html
<!-- Somewhere in your site's <head> -->
<script src="https://api.grubpay.io/v4/grubpay.js"></script>
```

## Grubpay.js Documentation

[Grubpay.js Docs](https://develop.grubpay.io/guide/)
