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
  setup: (onSuccess: (data: any) => void, onError: (data: any) => void, onClose: (data: any) => void) => void
  open: () => void
}


export type SendProps = {

}