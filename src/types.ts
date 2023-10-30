export interface EventResponse {
  type: string
  data: undefined | Object
}
// type PaymentSource = 'paylink' | 'direct';
// type NetworkId = 'MAINNET' | 'DEVNET';
// type Blockchain = 'solana' | 'ethereum';

export interface Config {
  amount: string
  recipient: string
  paymentSource: 'paylink' | 'direct'
  network: 'MAINNET' | 'DEVNET'
  blockchain: 'solana' | 'ethereum'
  paymentMethods: {
    solanaPay?: boolean
    browserWallet?: boolean
    swapToPay?: boolean
  }
  apiKey?: string
  currency: string
  paylinkId?: string
  text?: string
  customer?: {
    email?: string
    full_name?: string
    twitter?: string
    discord_id?: string
    phone_number?: string
    full_address?: string
  }
  isProduction?: boolean
}


export interface NestedFuncs {
  setup: (onSuccess: any, onError: any, onClose: any) => void
  open: () => void
}

export type callback = (response?: any) => void
