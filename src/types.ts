export interface EventResponse {
  type: string
  data: undefined | Object
}
type PaymentSource = 'paylink' | 'direct';
type NetworkId = 'MAINNET' | 'DEVNET';
type Blockchain = 'solana' | 'ethereum';

export interface Config {
  onSuccess?: callback
  onError?: callback
  onClose?: callback
  amount: string
  recipient: string
  paymentSource: PaymentSource
  network: NetworkId
  blockchain: Blockchain
  paymentMethods: {
    solanaPay?: boolean
    browserWallet?: boolean
    swapToPay?: boolean
  }
  apiKey?: string
  currency: string
  paylinkId?: string
  text?: string
}


export interface NestedFuncs {
  setup: (onSuccess: any, onError: any, onClose: any) => void
  open: () => void
}

export type callback = (response?: any) => void
