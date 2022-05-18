import { Component } from "react";
import Filter from "./Filter";
import CustomerRow from "./CustomerRow";

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ],
    };
   
    constructor(props){
        super(props);
        this.state.complete = this.state.customers;
    }
    //behaviour
    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // this.state.customers = custs;
        // don't do ==> this.state.customers = custs;
        //async update of state
        this.setState({
            customers: custs
        });
    }
    
    filterCustomers(txt) {
        let custs = this.state.complete
            .filter(c => c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0);
            this.setState({
                customers: custs
            });
    }
    render() {
        return <div>
            <Filter filterEvent={this.filterCustomers.bind(this)}/>
            {
                this.state.customers.map( c => <CustomerRow 
                    key={c.id} 
                    customer={c} 
                    delEvent={(id) => this.deleteCustomer(id)}/>)
            }
        </div>
    }
}