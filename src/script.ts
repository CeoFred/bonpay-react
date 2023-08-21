import { useEffect, useState } from 'react'

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

const id = 'bonPayScript'

export default function useScript(): boolean[] {
  const src = 'https://bonpay-js.onrender.com/v1.index.bundle.js'

  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const scriptTag = document.getElementById(id)
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    if (scriptSrc)
      return setState({
        loaded: true,
        error: false
      })

    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      script.remove()
      setState({
        loaded: true,
        error: true
      })
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [])

  return [state.loaded, state.error]
}
