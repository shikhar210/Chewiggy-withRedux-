import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Redux/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store=>store.cart.items);
    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item, index)=>{
                    return (
                        <li key={index}>{item} <button onClick={()=>{dispatch(removeItem())}}>Remove Item</button></li>
                    )
                })}
            </ul>
            <button onClick={()=> {dispatch(clearCart())}}>Clear Cart</button>
        </div>
    );
}

export default Cart;