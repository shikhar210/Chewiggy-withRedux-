import { useContext } from "react";
import CartContext from "../Utils/CartContext";

const Cart = () => {
    const { listItem } = useContext(CartContext);
    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {listItem.map((item, index)=>{
                    return(
                        <li key={index}>{ item }</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;