import { useState } from "react"

const Formulario = () => {
  
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
  
  return (
    <form>
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