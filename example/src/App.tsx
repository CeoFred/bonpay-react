import React from 'react'

import { BonpayButton, BonpayButtonProps } from 'bonpay-react'

const App = () => {
  function onSuccess(data: any) {
    console.log(data)
  }

  function onError(error: any) {
    console.log(error)
  }

  function onClose(data: any) {
    console.log(data)
  }

  const config: BonpayButtonProps = {
    amount: '0.0001',
    recipient: '9rXsixbNgveNs6aUmzoQmiG3qsmhaTfra1Y3NarjCrxh',
    paymentSource: 'direct',
    network: 'MAINNET',
    blockchain: 'solana',
    paymentMethods: {
      solanaPay: true,
      browserWallet: true,
      swapToPay: true,
    },
    apiKey: 'bp_3d3d29876cvx82987eded3ewc2d2s2ed3d3d34',
    currency: 'USDC',
    paylinkId:'3e3',
    onSuccess,
    onError,
    onClose,
    text:'Pay Some Cash Now',
    isProduction: true,
  }
  return <BonpayButton {...config} />
}

export default App