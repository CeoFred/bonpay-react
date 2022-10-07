# bonpay-react

> Web3 Payments made easy

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
    value: '0.006',
    recepient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254',
    chainId: 97,
    onSuccess,
    onError,
    onClose
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
Emit config data and prepare  UI disalog for transactions.
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

  // `recepient` is an address to deposit ether value
  recepient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254', // no-default, required, string

  // `chainId` is a network Id. 
  chainId: 1, // no-default, required, integer

  // `onSuccess` callBack function on transaction successfull
  onSuccess: function(transactionData){}, // no-default, optional, function

   // `onClose` callBack function on modal close
  onClose: function(closeEvent){}, // no-default, optional, function

   // `onError` callBack function on transaction successfull
  onError: function(error){}, // no-default, optional, function

  // `nft` Accept NFT as an alternative form of payment specifying
  // the collection contract address. A collection field is required 
  // when specifying an nft option
   nft: { 
        collection: ["0xE3ffC7A3Eb0Df96CBc08fC95cdDF776B22124A97"]
    } // optional

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
| Kovan Testnet | 42 |  ✅ |

## License

MIT © [CeoFred](https://github.com/CeoFred)
