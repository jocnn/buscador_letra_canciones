import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"

import Alerta from "./Alerta"

const AppLetras = () => {

  const { alerta } = useLetras()

  return (
    <div>
      <header>Búsqueda de letras de canciones</header>

      <Formulario />

      <main>
        {
          alerta && <Alerta>{alerta}</Alerta>
        }
      </main>

    </div>
  )
}

export default AppLetras