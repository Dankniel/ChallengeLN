import Card from '../card/card'
import './card_group.scss'
import { CardGroupProps } from './types'



const CardGroup = ({articles}: CardGroupProps) => {
  return (
    <div className="card-group-x3--container">
      <div className="focal-title-section d-flex fd-column gap-8 mb-20 mt-50">
        <p className='sueca-bold font-s-24 lh-32 font-w-400'>Card Group x3</p>
        <div className='w-full bg-color-gray-primary h-1px'></div>
      </div>

      <div className='card-group-grid-container'>
        {articles.map((article, index) => (
          <Card
            key={index}
            variants={(index + 1 ).toString()}
            imageClassName={"w-full"}
            image={article?.imageSrc || null}
            lead={article.lead || ''}
            title={article.title}
            titleFont='sueca-bold'
            titleClassName='font-s-18 lh-26'
            author={article.author}
            avatar={article.authorImg || null}
            url={article.url}
          />
        ))}

      </div>
    </div>
  )
}

export default CardGroup

/**
 *         <Card
          variants="3"
          imageClassName={"w-full h-156px"}
          title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
          titleFont='sueca-bold'
          titleClassName='font-s-18 lh-26'
          author="Author / Marquee"
          avatar={catImg}

        />
        <Card
          variants="1"
          image={catImg}
          imageClassName={"w-full h-156px"}
          badgeText="NEW"
          title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
          titleFont='sueca-medium'
          titleClassName='font-s-18 lh-26'
          author="Author / Marquee"

        />
        <Card
          variants="2"
          lead="Lead."
          title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
          titleFont='sueca-medium'
          titleClassName='font-s-18 lh-26'
          author="Author / Marquee"
          avatar={catImg}

        />
 * 
 * 
 */