import useLetras from "../hooks/useLetras"

const Letra = () => {
  
  const { letra, cargando } = useLetras()
  
  //console.info(letra)
  
  return (
    cargando ? 'Cargando...' : 
      <div className="letra">
        {letra}
      </div>
  )
}

export default Letra