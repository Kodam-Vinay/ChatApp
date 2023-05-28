import './index.css'

const Button = props => {
  const {buttonText} = props
  return (
    <button type="button" className="get-started-button">{buttonText}</button>
  )
}

export default Button