import { useEffect, useState } from "react"
import dummyData from '../../../core/mock/mock_data.json'

export interface Article {
  imageSrc?: string | null
  lead?: string | null
  title: string
  subtitle?: string | null
  author: string
  authorImg?: string | null
  url: string
}

const HomeViewModel = () => {

  const [volantaText, setVolantaText] = useState<string>('')
  const dummyArticles: Article[] = dummyData

  useEffect(() => {
    // setDummyArticles(dummyData)
    setVolantaText('Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar')
  }, [])

  return ({volantaText, dummyArticles})
}

export default HomeViewModel