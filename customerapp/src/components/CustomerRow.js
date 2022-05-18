import { Component } from "react";

export default class CustomerRow extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div>
            {firstName} {lastName}
            <button type="button" onClick={() => this.deleteRow(id)}>&times;</button>
        </div>
    }

    deleteRow(id) {
        console.log("Customr Row", id);
        this.props.delEvent(id);
    }
}