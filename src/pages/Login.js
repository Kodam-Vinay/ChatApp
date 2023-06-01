import { Component } from "react"
import BackgroundChatImage from "../components/svgs/BackgroundChatImage"
import CountryCodeImage from "../components/svgs/CountryCodeImage"
import Button from '../components/Button'
import '../css/Login.css'

class Login extends Component {

    state = {
        mobileNo: '',
        mobileNoLengthIs10: false,
        isButtonDisabled: true,
        isCheckBoxClicked: false
    }

    onEnterMobileNo = event => {
        const{isCheckBoxClicked} = this.state
        if(event.target.value.length === 10 && isCheckBoxClicked === true){
            this.setState({isButtonDisabled: false})
        }else{
            this.setState({isButtonDisabled: true})
        }
        this.setState({mobileNo: event.target.value})
    }

    onSubmitMobileNo = async event => {
        event.preventDefault()
        const {mobileNo} = this.state
        const url = 'https://chat-api.cyclic.app/api-docs/'
        const options = {
            method: "POST",
            body: JSON.stringify(mobileNo)
        }
        const response = await fetch(url, options)
        console.log(response)
    }

    onCheckCheckBox = event => {
        const {mobileNo} = this.state
        this.setState({isCheckBoxClicked: event.target.checked})
        if(mobileNo.length === 10 && event.target.checked === true){
            this.setState({isButtonDisabled: false})
        }else{
            this.setState({isButtonDisabled: true})
        }
    }

    render(){
        const {isButtonDisabled} = this.state
        return(
            <div className="login-bg-container">
                <h1 className="heading"> BEEP</h1>
                <BackgroundChatImage className="background-chat-image" />
                <form className="login-container" onSubmit={this.onSubmitMobileNo}>
                    <div className="number-input-coutry-container">
                        <div className="country-code-container">
                            <CountryCodeImage className="india-flag"/>
                        </div>
                        <input  className="mobile-no-input-element" type="text" onChange={this.onEnterMobileNo}/>
                    </div>
                    <div className='checkbox-container'>
                        <input type="checkbox" className="checkbox-element" onChange={this.onCheckCheckBox}/>
                        <p className="accept-terms-text">Accept Terms & Conditions</p>
                    </div>
                    <Button buttonText={'Login'} className="button-element" disabled={isButtonDisabled} type="submit"/>
                </form>
                
            </div>
        )
    }

}
export default Login