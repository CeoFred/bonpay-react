export interface EventResponse {
  type: string
  data: undefined | Object
}

export interface Config {
  recepient: string
  value: string
  chainId: number
  onSuccess?: (response: EventResponse) => void
  onError?: (response: EventResponse) => void
  onClose?: (response: EventResponse) => void
}

export interface NestedFuncs {
  setup: (onSuccess: any, onError: any, onClose: any) => void
  open: () => void
}