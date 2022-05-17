import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"

import Alerta from "./Alerta"
import Letra from "./Letra"

const AppLetras = () => {

  const { alerta, letra } = useLetras()

  return (
    <div>
      <header>Búsqueda de letras de canciones</header>

      <Formulario />

      <main>
        {
          alerta ? 
            <Alerta>{alerta}</Alerta> : 
            letra ? 
              <Letra /> : 
              <p className="text-center">Busca letras de tus artistas favoritos</p>
        }
      </main>

    </div>
  )
}

export default AppLetras