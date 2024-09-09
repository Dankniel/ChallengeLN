import { useEffect, useState } from "react"

const HomeViewModel = () => {

  const [volantaText, setVolantaText] = useState<string>('')

  useEffect(() => {
    setVolantaText('Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar')
  }, [])
  


  return ({volantaText})
}

export default HomeViewModel