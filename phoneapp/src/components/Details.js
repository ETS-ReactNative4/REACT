import React  from "react";
import { ProductContext } from "./Context";



export default function Details() {
    let {detailProduct} = React.useContext(ProductContext); // React 16.8+
    let image = "../" + detailProduct.img;
     return <>
            <h1>Details!!!</h1>
            <h2>Company: {detailProduct.company}</h2>
            <h2>Price: {detailProduct.price}</h2>
            <h2>title: {detailProduct.title}</h2>
            <img src ={image} />
        </>
    
}