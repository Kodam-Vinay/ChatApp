import './index.css'

const Button = props => {
  const {buttonText, disabled, type} = props
  return (
    <button type={type} className="get-started-button" disabled={disabled}>{buttonText}</button>
  )
}


export default Button