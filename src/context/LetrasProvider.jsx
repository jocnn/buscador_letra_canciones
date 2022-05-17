import { createContext, useState } from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

  const [ alerta, setAlerta ] = useState('')
  const [ letra, setLetra ] = useState('')

  const busquedaLetra = async busqueda => {
    
    try {
      const { artista, cancion } = busqueda
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const { data } = await axios(url)
      console.log(data.lyrics)
      
      setLetra(data.lyrics)
      
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <LetrasContext.Provider 
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra
      }}
    >
      {children}
    </LetrasContext.Provider>
  )
}

export {
  LetrasProvider
}

export default LetrasContext