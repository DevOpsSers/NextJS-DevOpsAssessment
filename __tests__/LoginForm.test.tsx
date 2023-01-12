import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
    test('should render the form correctly', () => {
        const { getByLabelText } = render(<LoginForm />);

        expect(getByLabelText('Email:')).toBeInTheDocument();
        expect(getByLabelText('Password:')).toBeInTheDocument();
        expect(getByLabelText('I accept Terms & Conditions')).toBeInTheDocument();
    });

    test('should update the email input when typing', () => {
        const { getByLabelText } = render(<LoginForm />);
        const emailInput = getByLabelText('Email:');

        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });

        expect(emailInput.value).toBe('test@email.com');
    });

    test('should update the password input when typing', () => {
        const { getByLabelText } = render(<LoginForm />);
        const passwordInput = getByLabelText('Password:');

        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(passwordInput.value).toBe('password123');
    });

    
});
