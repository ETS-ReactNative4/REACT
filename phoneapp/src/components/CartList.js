import {Button} from './Button';
export default function CartList({product}) {
    let {id, title, img, price, total, count} = product;
    return <div className="row">
        <div className="col-md-2">
            <img src = {img} width="50px"/>
        </div>
        <div className="col-md-2">
           {title}
        </div>
        <div className="col-md-2">
           Price: {price}
        </div>
        <div className="col-md-2">
           <Button>+</Button>
           <Button>-</Button>
        </div>
        <div className="col-md-2">
            Quantity : {count}
        </div>
        <div className="col-md-2">
            Total: {total}
        </div>
    </div>
}