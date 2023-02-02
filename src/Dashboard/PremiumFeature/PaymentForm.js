import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'

function PaymentForm() {

    const stripe = useStripe();
    const elemnts = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe && !stripe) {
            return;
        }
    };



    return (
        <div
            className=''
        >
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <div>htifs isf sfdiv</div>
        </div>
    )
}

export default PaymentForm