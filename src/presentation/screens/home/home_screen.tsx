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
import Focal from "./components/focal/focal"
import CardGroup from "./components/card_group/card_group"
import Footer from "./components/footer/footer"

const HomeScreen = () => {
  const {volantaText, dummyArticles} = HomeViewModel();

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
      <Card 
        variants="default" 
        image={catImg} 
        imageClassName={"w-full h-240px"} 
        badgeText="NEW" 
        lead="Lead." 
        title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar" 
        author="Author / Marquee"  
      />
      <div className="home-body-container ml-15 mr-15">
        <Focal articles={dummyArticles.slice(0, 3)}/>
        <CardGroup articles={dummyArticles.slice(3)} />
      </div>
      
      <Footer />
    </div>
  )
}

export default HomeScreen