import CartWidget from "./UserAccess/CartWidget/CartWidget"
import GreetingsContainer from "./UserAccess/Greetings/Greetings"
import './Cart&Greetins.css'

const CartGreetingsContainer=()=>{
    return(
        <div className="containerInformationUser">
            <GreetingsContainer></GreetingsContainer>
            <CartWidget></CartWidget>
        </div>
    )
}
export default CartGreetingsContainer