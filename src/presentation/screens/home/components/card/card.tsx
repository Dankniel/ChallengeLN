import Badge from '../../../../components/badge/badge';
import './card.scss';

interface CardProps {
  variants?: string,
  lead?: string,
  title?: string,
  titleClassName?: string,
  subhead?: string,
  badgeText?: string,
  badgeClassName?: string,
  author?: string,
  image?: string | null,
  imageClassName?: string,
  avatar?: string | null,
  titleFont?: string,
  url?: string
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
  titleFont = 'sueca-bold',
  url
}: CardProps) => {
  // Si la prop URL está presente, envolvemos el contenido de la tarjeta en un <a>
  const Wrapper = url ? 'a' : 'div';
  return (
    <Wrapper href={url} className={`card-variant-${variants}`} target={url ? '_blank' : '_self'} rel="noopener noreferrer">
      {image && <img src={image} alt={title} className={`card-image ${imageClassName}`} />}
      <div className='card-title-section d-flex pos-absolute fd-column h-450px justify-flex-end'>
        {badgeText &&
          <div className='card-badge'>
            <Badge text={badgeText || ''} />
          </div>
        }
        <p className={`card-title text-color-white ${titleClassName} font-w-400 ${titleFont}`}> <span className='card-lead text-color-blue'>{lead}</span> {title}</p>
        {subhead && <p className='text-color-black-light font-s-16 lh-24 font-w-400'>{subhead}</p>}
        <div className="author-info d-flex align-items-center gap-8">
          {avatar && <img src={avatar} alt={author} className="author-image w-56px h-56px border-radius-50" />}
          <p className='card-author text-color-white font-s-14 lh-16 font-w-700'>{author}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Card