import React, { Component}  from 'react';
import {storeProducts} from '../data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: {}
    }    
    // life cycle method for API calls
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let prds = [];
        storeProducts.forEach(p => {
            prds.push({...p});
        });
        this.setState({
            products: prds
        });
    }

    getProduct = (id) => {
        let prd = this.state.products.filter(p => p.id === id) [0];
        return prd;
    }

    handleDetail = (id) => {
        this.setState({
            detailProduct: this.getProduct(id)
        })
    }

    render() {
        return <ProductContext.Provider value={{...this.state, 
            handleDetail: this.handleDetail}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};