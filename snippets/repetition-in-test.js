import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomerForm } from './customer-form';

describe('<CustomerForm />', () => {
  it('allows customer to capture all data', () => {
    // mock fetch
    fetch.mockResponse(() => Promise.resolve({}));

    const { getByLabelText, getByText } = render(<CustomerForm />);
    fireEvent.change(getByLabelText('Name'), {
      target: { value: 'Malcolm Kee' }
    });
    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'malcolm@malcolmkee.com' }
    });
    fireEvent.click(getByText('Submit'));
    expect(fetch).toHaveBeenCallTimes(1);
  });

  it('allows customer to capture all data', () => {
    // mock fetch
    fetch.mockResponse(() => Promise.resolve({}));

    const { getByLabelText, getByText } = render(<CustomerForm />);
    fireEvent.change(getByLabelText('Name'), {
      target: { value: 'Malcolm Kee' }
    });
    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'malcolm' }
    });
    fireEvent.click(getByText('Submit'));
    expect(getByText('Email is invalid')).isNotNull();
    expect(fetch).toHaveBeenCallTimes(0);
  });
});
