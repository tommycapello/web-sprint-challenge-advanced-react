import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {

    render(<CheckoutForm/>);

    document.getElementsByTagName('h2').value = 'Checkout Form';

    screen.getByText(/Checkout Form/i);
    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument();
  });

test("form shows success message on submit with form details", () => {

    //render form
    render(<CheckoutForm/>,);

    // assign test data to variables
    const firstName = 'Tommy';
    const lastName = 'Capello';
    const address = '104 Benthill Ave';
    const city = 'New York';
    const state = 'New York';
    const zip = '10032';

    //type in data into forms
    const fnInput = screen.getByLabelText('First Name:');
    userEvent.type(fnInput, firstName);
    const lnInput = screen.getByLabelText('Last Name:');
    userEvent.type(lnInput, lastName);
    const addressInput = screen.getByLabelText('Address:');
    userEvent.type(addressInput, address);
    const cityInput = screen.getByLabelText('City:');
    userEvent.type(cityInput, city);
    const stateInput = screen.getByLabelText('State:');
    userEvent.type(stateInput, state);
    const zipInput = screen.getByLabelText('Zip:');
    userEvent.type(zipInput, zip);


    // select submit button and click for submission
    const buttonSubmit = document.getElementById('submit');
    expect(buttonSubmit).not.toBeDisabled();
    userEvent.click(buttonSubmit);

    // confirm the success message after submission
    const successMsg = screen.queryByTestId('successMessage');
    expect(successMsg).toBeInTheDocument();


});
