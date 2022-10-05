import { useEffect } from 'react'
import useScript from './script'
import { Config, NestedFuncs } from './types'

declare const window: Window &
  typeof globalThis & {
    BonPay: (config: Config) => NestedFuncs
  }

const useBonPay = (props: Config) => {

  const [loaded, error] = useScript()

  useEffect(() => {
    if (error) throw new Error('Unable to load useBonPay modal')
  }, [error])

  function returnPayment(){
    if (error) throw new Error('Unable to load useBonPay modal')
    let pay
    if (loaded) {
      pay = window.BonPay && new (window.BonPay as any)(props)
      return pay;
    }
    return pay;
  }
  
  return returnPayment
}

export default useBonPay
