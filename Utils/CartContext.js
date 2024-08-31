import { createContext } from "react";

const CartContext = createContext({
    listItem: [],
});

export default CartContext;