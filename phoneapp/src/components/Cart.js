import React  from "react";
import { ProductContext } from "./Context";
import CartList from "./CartList";

export default function Cart() {
   const {cart, checkout} = React.useContext(ProductContext);
    return <div className="container">
            {
                cart.map(p => <CartList key ={p.id} product={p}/>)
            }
            <button className="btn btn-primary" 
                onClick={() => checkout()}>Place Order</button>
    </div>
}