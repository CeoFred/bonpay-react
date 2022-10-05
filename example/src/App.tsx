import React from 'react'

import { useBonPay } from 'bonpay-react'


const App = () => {

  const bondPay = useBonPay({ value: '0.006', recepient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254', chainId: 97 });
   
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
    bondPay().setup(onSuccess, onError, onClose);
    bondPay().open();
  }

  return <button onClick={handlePayment
  }>Pay Now</button>
}

export default App