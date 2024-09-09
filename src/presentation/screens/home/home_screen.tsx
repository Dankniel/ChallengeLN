import Divider from "../../components/divider/divider"
import Anticipo from "./components/anticipo/anticipo"
import NavHeader from "./components/nav_header/nav_header"
import StickyBanner from "./components/sticky_banner/sticky_banner"
import Subheader from "./components/subheader/subheader"
import './home.scss'
import HomeViewModel from "./home_view_model"

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

      <div style={{ backgroundColor: 'red', height: '500px' }}>
        Footer
      </div>
    </div>
  )
}

export default HomeScreen