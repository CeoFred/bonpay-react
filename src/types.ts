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

export type NestedFuncs = {
  setup: () => void
  open: () => void
}


export type SendProps = {

}