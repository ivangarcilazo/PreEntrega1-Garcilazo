import './NavBar.css'
import NavSearchContainer from './NavLinks&Search/NavLinkSearchContainer'
import IconLogo from './Icon/Icon'
import CartWidget from './CartWidget/CartWidget'

const navBar=()=>{
    return(
        <header className="containerHeader">
            <IconLogo></IconLogo>
            <NavSearchContainer></NavSearchContainer>
            <CartWidget></CartWidget>
        </header>
    )
}
export default navBar