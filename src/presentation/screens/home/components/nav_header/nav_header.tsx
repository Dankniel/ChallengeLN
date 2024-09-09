import logo from '../../../../../assets/images/logo-ln.svg'
import searchIcon from '../../../../../assets/icons/search_icon.svg'
import listIcon from '../../../../../assets/icons/list_icon.svg'

import './nav_header.scss'
import Button from '../../../../components/button/button'

const NavHeader = () => {

  return (
    <div className='nav-header-container d-flex justify-space-between align-items-center'>
     <div className="nav-header-left-section justify-flex-start w-420px gap-24">
        <Button
          text={'SECCIONES'}
          icon={listIcon}
          containerClassName='px-16 py-12 justify-center border-width-0 border-radius-4 w-auto bg-color-gray-secondary d-flex gap-8'
          textClassName='font-w-700 font-s-12 lh-16 '
        />
        <Button
          text={'BUSCAR'}
          icon={searchIcon}
          containerClassName='px-16 py-12 justify-center border-width-0 border-radius-4 w-auto bg-color-gray-secondary border-color-blue d-flex gap-8'
          textClassName='font-w-700 font-s-12 lh-16 '
        />
      </div>

      <div>
        <img src={logo} alt={'alt_img'} className={"nav-logo"} />
      </div>
      <div className="nav-header-sm-search-container align-items-center w-120px justify-space-between">
        <p className="font-w-700 font-s-12 lh-16 "> SUSCRIBITE </p>
        <img src={searchIcon} alt={'alt_img'} className={"search-icon"} />
      </div>

      <div className="nav-header-right-section justify-flex-end w-420px gap-24">
        <Button
          text={'SUSCRIBITE'}
          containerClassName='px-16 py-12 justify-center border-width-1 border-radius-4 w-auto bg-color-yellow border-color-gray-primary'
          textClassName='font-w-700 font-s-12 lh-16 '
        />
        <Button
          text={'INGRESAR'}
          containerClassName='px-16 py-12 justify-center border-width-1 border-radius-4 w-auto bg-color-white border-color-blue'
          textClassName='font-w-700 font-s-12 lh-16 text-color-blue'
        />
      </div>
    </div>
  )
}

export default NavHeader