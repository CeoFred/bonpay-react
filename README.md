# Bonpay react SDK

> Web3 Payment Framework

[![NPM](https://img.shields.io/npm/v/bonpay-react.svg)](https://www.npmjs.com/package/bonpay-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bonpay-react
```

## Usage Typescript

```tsx
import React from 'react'

import { useBonPay } from 'bonpay-react'

const App = () => {

  const bonPay = useBonPay({
    value: '0.0001',
    recipient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254',
    chainId: 5,
    onSuccess,
    onError,
    onClose,
    tokens: ['USDT','DAI','USDC']
  })

  function onSuccess(data: any) {
    console.log(data)
  }

  function onError(error: any) {
    console.log(error)
  }

  function onClose(data: any) {
    console.log(data)
  }

  function handlePayment() {
    const pay = bonPay()
    pay.setup()
    pay.open()
  }

  return <button onClick={handlePayment}>Pay Now</button>
}

export default App
```


##### Setup event handlers
Emit config data and prepare  UI dialog for transactions.
```js

  pay.setup();

```

##### Open Bondpay 
To open a bondpay dialog simple call the open method on the bonpay object:
```js
pay.open();
```
### Instance Configuration
BonPay is initialized with a configuration object which is required to setup and open up the bonpay dialog. See below for specifications on the configuration object.

```js
{
 // `value` is the amount to send in ether
  value: '1', // no-default, required, string

  // `recipient` is an address to deposit ether value
  recipient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254', // no-default, required, string

  // `chainId` is a network Id. 
  chainId: 1, // no-default, required, integer

  // `onSuccess` callBack function on transaction successful
  onSuccess: function(transactionData){}, // no-default, optional, function

   // `onClose` callBack function on modal close
  onClose: function(closeEvent){}, // no-default, optional, function

   // `onError` callBack function on transaction successful
  onError: function(error){}, // no-default, optional, function

  // `nft` Accept NFT as an alternative form of payment specifying
  // the collection contract address. A collection field is required 
  // when specifying an nft option
   nft: { 
        collection: ["0xE3ffC7A3Eb0Df96CBc08fC95cdDF776B22124A97"]
    } // optional
   // `tokens` Accept stable coins. supported coins include BUSD,USDC,USDT,DAI. 

  tokens: ['USDT'], // optional ,String[]

  // `transfer` Allow third party wallet transfers
  transfer: true, // default false, not required, boolean
}
```

### Supported Networks

| Network | ChainId |  |
| --- | --- | --- |
| Ethereum  | 1 |  ✅|
| Binance Smart Chain | 56 |  ✅  |
| Polygon Mainnet | 137 |  ✅  |
| Mumbai | 80001 |  ✅  |
| BSC Testnet | 97 |  ✅ |
| Goerli Testnet | 5 |  ✅  |

### Network Supported Stable Token

We currently limit the tokens to be used for certain network, below is a table of networks ans available stable tokens you can use for your application.

| Network             | ChainId | DAI | BUSD | USDT | USDC |
| ------------------- | ------- | --- | ---- | ---- | ---- |
| Ethereum            | 1       | ✅  | ✅   | ✅   | ✅   |
| Binance Smart Chain | 56      | ✅  | ✅   | ❌   | ✅   |
| Polygon Mainnet     | 137     | ✅  | ✅   | ✅   | ✅   |
| Mumbai              | 80001   | ❌  | ❌   | ❌   | ❌   |
| BSC Testnet         | 97      | ❌  | ❌   | ❌   | ❌   |
| Goerli Testnet      | 5       | ✅  | ❌   | ✅   | ✅   |

## License

MIT © [CeoFred](https://github.com/CeoFred)
