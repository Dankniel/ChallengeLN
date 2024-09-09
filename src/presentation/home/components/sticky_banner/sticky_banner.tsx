import './sticky_banner.scss'

const StickyBanner = () => {

  return (
    <div className='sticky-banner-container justify-center pos-sticky bg-color-white pos-type-top '>
      <div className="sticky-banner w-320px h-50px d-flex bg-color-red-light align-items-center border-white">
        <p className="sticky-banner-title text-color-red font-s-12 font-w-700 ml-8 lh-24">  Sticky_mob | 320x50</p>
      </div>
    </div>
  )
}

export default StickyBanner