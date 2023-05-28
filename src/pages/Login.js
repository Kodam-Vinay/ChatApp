import BackgroundChatImage from "../components/svgs/BackgroundChatImage"
import CountryCodeImage from "../components/svgs/CountryCodeImage"
import Button from '../components/Button'
import '../css/Login.css'

const Login = () => {
    return(
        <div className="bg-container">
            <h1 className="heading"> BEEP</h1>
            <BackgroundChatImage className="background-chat-image" />
            <div className="login-container">
                <div className="country-code-container">
                    <CountryCodeImage className="india-flag"/>
                </div>
                <input/>
            </div>
            <div className='checkbox-container'>
                <input type="checkbox" className="checkbox-element"/>
            <p>Accept Terms & Conditions</p>
            </div>
            <Button buttonText={'Login'}/>
        </div>
    )
}
export default Login