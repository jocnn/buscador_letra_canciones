import { createContext, useState } from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

  const [ alerta, setAlerta ] = useState('')
  const [ letra, setLetra ] = useState('')
  const [ cargando, setCargando ] = useState(false)

  const busquedaLetra = async busqueda => {
    
    setCargando(true)

    try {
      const { artista, cancion } = busqueda
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const { data } = await axios(url)
      //console.info(data.status)
      
      setLetra(data.lyrics)
      setAlerta('')
    } catch (error) {
      setAlerta('Letra no encontrada')

      setTimeout(() => {
        setAlerta('')
      }, 3000);
      //console.error(error)
    }

    setCargando(false)
  }

  return (
    <LetrasContext.Provider 
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando
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