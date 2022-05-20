import React, { Component } from 'react';
// import { storeProducts } from '../data';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        user :"banu@gmail.com",
        products: [],
        detailProduct: {},
        cart: []
    }
    // life cycle method for API calls
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let prds = [];
        // storeProducts.forEach(p => {
        //     prds.push({ ...p });
        // });
        // this.setState({
        //     products: prds
        // });
        axios.get("http://localhost:1234/products")
            .then(response => {
                prds = response.data;
                this.setState({
                    products: prds
                })
            })
    }

    checkout = () => {
        var total = 0.0;
        this.state.cart.forEach(p => {
            total += p.total;
        });
        //this.state.cart.map(p => p.total).reduce((p1,p2) => p1+p2)
        var order = {
            id: uuidv4(),
            user: this.state.user,
            orderDate : new Date(),
            total: total,
            items: this.state.cart
        }

        axios.post("http://localhost:1234/orders", order).then((data) => {
            console.log("Order placed!! " , data);
        })
    }

    getProduct = (id) => {
        let prd = this.state.products.filter(p => p.id === id)[0];
        return prd;
    }

    handleDetail = (id) => {
        this.setState({
            detailProduct: this.getProduct(id)
        })
    }

    addToCart(id) {
        let prd = this.getProduct(id);
        prd.inCart = true;
        prd.count = 1;
        prd.total = prd.price;
        let cpy = this.state.cart;
        cpy.push(prd);

        this.setState({
            cart: cpy
        })
    }
    render() {
        return <ProductContext.Provider value={{
            ...this.state,
            addToCart: this.addToCart.bind(this),
            handleDetail: this.handleDetail,
            checkout:this.checkout
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };