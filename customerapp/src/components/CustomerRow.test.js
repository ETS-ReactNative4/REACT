import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';
//<CustomerRow 
// key={c.id} 
// customer={c} 
// delEvent={(id) => this.deleteCustomer(id)}/>
describe("testing customer row", () => {
    let callback = jest.fn(); // mock callback function
    let c = {
        id:45,
        "firstName" : "Lady",
        "lastName" : "Bird"
    };

    it("test render customer row", () => {
        render(<CustomerRow 
                 customer={c} 
                 delEvent={(id) => callback(id)}/>);
                 screen.debug();
        let elem = screen.getByText(/Lady/i);
        expect(elem).toBeInTheDocument();

        let btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(45);
    });
})