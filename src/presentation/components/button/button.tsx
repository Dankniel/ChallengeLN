import { ButtonProps } from "./types"
import './button.scss'


const Button = ({
  text,
  onClick,
  containerClassName,
  textClassName,
  disabled,
  icon
}: ButtonProps) => {

  return (
    <button
      className={containerClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {icon &&
        <div>
          <img src={icon} alt={text} className={"button-icon"} />
        </div>
      }
      <span className={textClassName}>{text}</span>
    </button>
  )
}

export default Button