import React, { Component } from 'react';
import { storeProducts } from '../data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
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
        storeProducts.forEach(p => {
            prds.push({ ...p });
        });
        this.setState({
            products: prds
        });
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
            handleDetail: this.handleDetail
        }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };