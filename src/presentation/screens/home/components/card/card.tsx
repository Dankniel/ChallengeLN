import Badge from '../../../../components/badge/badge'
import './card.scss'

interface CardProps {
  variants: string,
  lead?: string,
  title?: string,
  titleClassName?: string,
  subhead?: string,
  badgeText?: string,
  badgeClassName?: string,
  author?: string,
  image?: string,
  imageClassName?: string,
  avatar?: string,
  titleFont?: string
}

const Card = ({ 
    variants = 'default',
    lead,
    title,
    titleClassName = 'font-s-24',
    subhead,
    badgeText,
    author,
    image,
    imageClassName,
    avatar,
    titleFont = 'sueca-bold'
  }: CardProps) => {

  return (
    <div className={`card-variant-${variants}`}>
      <img src={image} alt={'alt_img'} className={`card-image ${imageClassName}`} />
      <div className='card-title-section d-flex pos-absolute fd-column h-450px justify-flex-end'>
        <div className='card-badge'>
          <Badge text={badgeText || ''} />
        </div>
        <p className={`card-title text-color-white ${titleClassName} font-w-400 ${titleFont}`}> <span className='card-lead text-color-blue'>{lead}</span> {title}</p>
        {subhead && <p className='text-color-black-light font-s-16 lh-24 font-w-400'>{subhead}</p>}
        <p className='card-author text-color-white font-s-14 lh-16 font-w-700'>{author}</p>
      </div>
     
    </div>
  )
}

export default Card