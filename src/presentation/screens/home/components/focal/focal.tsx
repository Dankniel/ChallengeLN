import './focal.scss'
import catImg from '../../../../../assets/images/cat-photo.jpg'
import Card from '../card/card'
import { Article } from '../../home_view_model'


interface FocalProps {
  articles: Article[] | undefined
}

const Focal = ({articles}: FocalProps) => {

  return (
    <div className="focal-container" >
      <div className="focal-title-section d-flex fd-column gap-8 mb-20 mt-50">
        <p className='sueca-bold font-s-24 lh-32 font-w-400'>Focal izquierdo</p>
        <div className='w-full bg-color-gray-primary h-1px'></div>
      </div>
      <div className='focal-grid-container'>
      <div className="focal-left-article  d-flex">
        <Card
          variants="1"
          image={articles?.[0].imageSrc || catImg}
          imageClassName={"w-full h-312px"}
          lead={articles?.[0].lead || ''}
          title={articles?.[0].title || ''}
          titleClassName='font-s-32 lh-40'
          author={articles?.[0].author || ''}
          subhead={articles?.[0].subtitle || ''}

        />
      </div>
       {/* Aquí agregamos el divisor */}
       <div className="divider"></div>
       {articles?.slice(1, 3)?.map((article, index) => {
           return (
             <Card
               key={index}
               variants="1"
               image={article.imageSrc || catImg}
               imageClassName={"w-full h-156px"}
               lead={article.lead || ''}
               title={article.title || ''}
               titleClassName='font-s-18 lh-26'
               author={article.author || ''}
               subhead={article.subtitle || ''}
               url={article.url || ''}
             />
           )
       })}
      </div>
    </div>
  )
}

export default Focal


//      <h3 className='focal-left-article  bg-color-red'>Focal izquierdo</h3>
