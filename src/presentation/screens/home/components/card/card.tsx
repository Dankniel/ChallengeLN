import Badge from '../../../../components/badge/badge'
import './card.scss'

interface CardProps {
  variants: string,
  lead?: string,
  title?: string,
  badgeText?: string,
  badgeClassName?: string,
  author?: string,
  image?: string,
  avatar?: string
}

const Card = ({ 
    variants = 'default',
    lead,
    title,
    badgeText,
    author,
    image,
    avatar,
  }: CardProps) => {

  return (
    <div className={"card-variant-" + variants}>


      <div className='card-title-section d-flex pos-absolute fd-column h-450px justify-flex-end pt-64 pr-16 pb-8 pl-16 gap-8'>
        <Badge text={badgeText || ''} />
        <p className='card-title text-color-white font-s-24 lh-32 font-w-400 sueca-bold'>{title}</p>
        <p className='text-color-white font-s-14 lh-16 font-w-700'>{author}</p>
      </div>
      <img src={image} alt={'alt_img'} className={"card-image"} />
    </div>
  )
}

export default Card