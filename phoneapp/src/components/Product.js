import { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import {Button} from './Button';
export default class Product extends Component {

    render() {
        let {id, img, inCart} = this.props.product; // from parent
        return <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <ProductConsumer>
                        {
                            value => {
                                return ( 
                                    <>
                                        <Link to={`/details/${id}`}>
                                        <img src={img} onClick={() => value.handleDetail(id)}/>
                                        </Link>
                                        <Button className="cart-btn fa fa-cart-plus" onClick={() => value.addToCart(id)}/>
                                    </>
                                )
                            }
                        }
                    </ProductConsumer>
                    
                </div>
            </div>
        </div>
    }
}