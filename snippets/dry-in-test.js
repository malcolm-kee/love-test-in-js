import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomerForm } from './customer-form';

function setupCustomerForm() {
  // mock fetch
  fetch.mockResponse(() => Promise.resolve({}));
  const { getByLabelText, getByText } = render(<CustomerForm />);

  return {
    inputName: name =>
      fireEvent.change(getByLabelText('Name'), {
        target: { value: name }
      }),
    inputEmail: email =>
      fireEvent.change(getByLabelText('Email'), {
        target: { value: email }
      }),
    getInvalidEmailError: () => getByText('Email is invalid'),
    submit: () => fireEvent.click(getByText('Submit'))
  };
}

describe('<CustomerForm />', () => {
  it('allows customer to capture all data', () => {
    const { inputName, inputEmail, submit } = setupCustomerForm();

    inputName('Malcolm Kee');
    inputEmail('malcolm@malcolmkee.com');
    submit();

    expect(fetch).toHaveBeenCallTimes(1);
  });

  it('allows customer to capture all data', () => {
    const {
      inputName,
      inputEmail,
      getInvalidEmailError,
      submit
    } = setupCustomerForm();

    inputName('Malcolm Kee');
    inputEmail('malcolm');
    submit();

    expect(getInvalidEmailError()).isNotNull();
    expect(fetch).toHaveBeenCallTimes(0);
  });
});
