import Divider from "../../components/divider/divider"
import Anticipo from "./components/anticipo/anticipo"
import Card from "./components/card/card"
import NavHeader from "./components/nav_header/nav_header"
import Placeholder from "./components/placeholder/placeholder"
import StickyBanner from "./components/sticky_banner/sticky_banner"
import Subheader from "./components/subheader/subheader"
import './home.scss'
import HomeViewModel from "./home_view_model"

import catImg from '../../../assets/images/cat-photo.jpg'
import Publicidad from "../../components/publicidad/publicidad"

const HomeScreen = () => {
  const {volantaText} = HomeViewModel();

  return (
    <div>
      <StickyBanner />
      <NavHeader />
      <div className="diviver-container">
        <Divider />
      </div>
      <Subheader />
      <Anticipo text={volantaText} />
      <Placeholder />
      <Publicidad />
      <Card variants="default" image={catImg} badgeText="NEW" title="Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar" author="Author / Marquee"  />
      <div style={{ backgroundColor: 'red', height: '500px' }}>
        Footer
      </div>
    </div>
  )
}

export default HomeScreen