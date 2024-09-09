import './subheader.scss';
import clubLogo from '../../../../../assets/images/club_logo.svg';
import weatherIcon from '../../../../../assets/icons/weather_icon.svg';

const Subheader = () => {

  return (
    <div className="subheader-container bg-color-yellow h-40px align-items-center px-16 py-4">
      <div className="subheader-dolar-container d-flex gap-16">
        <div className='subheader-dolar-title'>
          <p className='font-w-700 font-s-14 lh-16 text-color-blue'>Dólar:</p>
        </div>
        <div >
          <p>BNA: <b>$00,00 / 00,00</b></p>
        </div>
        <div>
          <p>Blue: <b>$00,00 / 00,00</b></p>
        </div>
      </div>




      <div className='subheader-weather-container gap-8 align-items-center d-none'>
        <img src={weatherIcon} alt={'La Nacion Logo'} className={"w-24px h-24px"} />
        <p className='font-w-700 font-s-14 lh-16 text-color-black '>00.0°</p>
        <p className='font-w-400 font-s-14 lh-16 text-color-black '>Capital Federal</p>
      </div>


      <div className="subheader-newsletters-container d-none">
        <div>
          <p className='font-w-400 font-s-14 lh-16 text-color-blue '>Recibí Newsletters</p>
        </div>
      </div>

      <div className="subheader-benefits-container d-flex gap-16 align-items-center ">
        <div >
          <div>
            <img src={clubLogo} alt={'La Nacion Logo'} className={"w-24px h-24px"} />
          </div>
        </div>
        <div>
          <p className='font-w-400 font-s-14 lh-16 text-color-blue '>Descubrí tus beneficios</p>
        </div>
      </div>
    </div>
  )
}

export default Subheader