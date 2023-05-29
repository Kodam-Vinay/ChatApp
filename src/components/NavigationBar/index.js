import ChatMessageSvg from '../svgs/NavBarImages/ChatMessageSvg'
import './index.css'

const NavigationBar = () => (
    <nav className="navigation-bar-container">
        <ul className='navigation-link-button-container'>
            <li className='each-navigation-button'></li>
            <li className='each-navigation-button'></li>
            <li><ChatMessageSvg/></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
)
export default NavigationBar