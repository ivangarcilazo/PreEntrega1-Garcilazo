import './NavBar.css'
import NavSearchContainer from './NavLinks&Search/NavLinkSearchContainer'
import CartGreetingsContainer from './CartGreetingsContainer/Cart&Greetins'
import IconLogo from './Icon/Icon'

const navBar=()=>{
    return(
        <header className="containerHeader">
            <IconLogo></IconLogo>
            <NavSearchContainer></NavSearchContainer>
            <CartGreetingsContainer></CartGreetingsContainer>
        </header>
    )
}
export default navBar