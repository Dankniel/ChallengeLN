import Divider from "../../components/divider/divider"
import NavHeader from "./components/nav_header/nav_header"
import StickyBanner from "./components/sticky_banner/sticky_banner"
import Subheader from "./components/subheader/subheader"
import './home.scss'

const HomeScreen = () => {

  return (
    <div>
      <StickyBanner />
      <NavHeader />
      <div className="diviver-container">
        <Divider />
      </div>
      <Subheader />
      <div>
        Body
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div>
        Footer
      </div>
      <div style={{ backgroundColor: 'red', height: '800px' }}>
        Footer
      </div>
    </div>
  )
}

export default HomeScreen