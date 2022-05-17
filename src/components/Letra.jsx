import useLetras from "../hooks/useLetras"

const Letra = () => {
  
  const { letra } = useLetras()
  
  console.info(letra)
  
  return (
    <div className="letra">
      {letra}
    </div>
  )
}

export default Letra