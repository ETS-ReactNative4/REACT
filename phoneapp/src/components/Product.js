import { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";

export default class Product extends Component {

    render() {
        let {id, img} = this.props.product; // from parent
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