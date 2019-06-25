import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomerForm } from './customer-form';

function setupCustomerForm() {
  // mock ajax calls
  fetch.mockResponse(() => Promise.resolve({}));
  const { getByLabelText, getByText } = render(<CustomerForm />);

  const inputName = name =>
    fireEvent.change(getByLabelText('Name'), {
      target: { value: name }
    });

  const inputEmail = email =>
    fireEvent.change(getByLabelText('Email'), {
      target: { value: email }
    });

  const getInvalidEmailError = () => getByText('Email is invalid');

  const submit = () => fireEvent.click(getByText('Submit'));

  return {
    inputName,
    inputEmail,
    getInvalidEmailError,
    submit
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

  it('validate email format when submit', () => {
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
