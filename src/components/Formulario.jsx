import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {
  
  const { setAlerta, busquedaLetra } = useLetras()

  const [ busqueda, setBusqueda ] = useState({
    artista: '',
    cancion: ''
  })

  const handleChangeBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(busqueda).includes('')) {
      setAlerta('Coloca nombre de artísta o canción')

      setTimeout(() => {
        setAlerta('')
      }, 3000);
      return
    }

    busquedaLetra(busqueda)
  }
  
  return (
    <form
      onSubmit={handleSubmit}
    >
      <legend>Busca por Artistas y Canción</legend>

      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input 
            id="artista"
            type="text" 
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={ e => handleChangeBusqueda(e) }
          />
        </div>

        <div>
          <label htmlFor="cancion">Canción</label>
          <input 
            id="cancion"
            type="text" 
            name="cancion"
            placeholder="Nombre Canción"
            value={busqueda.cancion}
            onChange={ e => handleChangeBusqueda(e) }
          />
        </div>

        <input type="submit" value="Buscar" />
      </div>
    </form>
  )
}

export default Formulario