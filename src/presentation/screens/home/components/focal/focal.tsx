import './focal.scss'
import catImg from '../../../../../assets/images/cat-photo.jpg'
import Card from '../card/card'


const Focal = () => {

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
          image={catImg}
          imageClassName={"w-full h-312px"}
          badgeText="NEW"
          lead="Lead."
          title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
          titleClassName='font-s-32 lh-40'
          author="Author / Marquee"
          subhead="Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."

        />
      </div>
       {/* Aquí agregamos el divisor */}
       <div className="divider"></div>
      <Card
        variants="1"
        image={catImg}
        imageClassName={"w-full h-156px"}
        badgeText="NEW"
        lead="Lead."
        title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
        titleFont='sueca-medium'
        titleClassName='font-s-18 lh-26'
        author="Author / Marquee"

      />
      <Card
        variants="1"
        image={catImg}
        imageClassName={"w-full h-156px"}

        badgeText="NEW"
        lead="Lead."
        title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
        titleFont='sueca-medium'
        titleClassName='font-s-18 lh-26'
        author="Author / Marquee"

      />
      </div>
    </div>
  )
}

export default Focal


//      <h3 className='focal-left-article  bg-color-red'>Focal izquierdo</h3>
