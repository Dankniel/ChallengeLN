import logo from '../../../../../assets/images/logo_ln.svg'
import fbIcon from '../../../../../assets/icons/fb_icon.svg'
import igIcon from '../../../../../assets/icons/ig_icon.svg'
import rssIcon from '../../../../../assets/icons/rss_icon.svg'
import twitterIcon from '../../../../../assets/icons/twitter_icon.svg'

import androidStore from '../../../../../assets/images/android_store.svg'
import iosStore from '../../../../../assets/images/ios_store.svg'



import Divider from '../../../../components/divider/divider'

const Footer = () => {
  return (
    <div className="mt-24 pt-24 pb-24 d-flex justify-space-between fd-column align-items-center gap-50">
       <img src={logo} alt={'ln_logo'} className={"nav-logo h-24px"} />
       <Divider />
       <div className='footer-social-container d-flex w-fit-content justify-space-around gap-50'>
        <img src={fbIcon} alt={'fb_icon'} className={"nav-logo h-24px w-24px"} />
        <img src={twitterIcon} alt={'twitter_icon'} className={"nav-logo h-24px w-24px"} />
        <img src={igIcon} alt={'instagram_icon'} className={"nav-logo h-24px w-24px"} />
        <img src={rssIcon} alt={'rss_icon'} className={"nav-logo h-24px w-24px"} />
        
       </div>

       <div className='footer-stores-container d-flex w-fit-content justify-space-around gap-50'>
        <img src={androidStore} alt={'android_store'} className={"nav-logo h-35px w-120px"} />
        <img src={iosStore} alt={'ios_store'} className={"nav-logo h-35px w-120px"} />
        
        
       </div>
    </div>
  )
}

export default Footer