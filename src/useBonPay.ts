import { useEffect } from 'react'
import useScript from './script'
import { Config, NestedFuncs, callback } from './types'

declare const window: Window &
  typeof globalThis & {
    BonPay: (config: Config) => NestedFuncs
  }

const useBonPay = (props: Config) => {
  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error('Unable to load bonpay inline script')
  }, [error])

  function returnPayment(
    onSuccess: callback,
    onError: callback,
    onClose: callback
  ) {
    if (error) throw new Error('Unable to load inline script')
    let pay: NestedFuncs
    if (loaded) {
      pay = window.BonPay && new (window.BonPay as any)(props)
      pay.setup(onSuccess, onError, onClose)
      pay.open()
      
    }
  }

  return returnPayment
}

export default useBonPay
