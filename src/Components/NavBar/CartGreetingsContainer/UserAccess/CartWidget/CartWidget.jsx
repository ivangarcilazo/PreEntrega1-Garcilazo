import './CartWidget.css'
import Cart from './CartIcon/CartIcon.png'


const CartWidget=()=>{
    return(
        <div className="containerCart">
            <img src={Cart} alt="" />

        </div>
    )
}

export default CartWidget