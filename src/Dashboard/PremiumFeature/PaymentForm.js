import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import cardLogo from "../../assets/paymentCard/cartLogo.jpeg"
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

function PaymentForm() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { price } = useParams();
    const [processingButton, setProcessingButton] = useState(false);
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();


    const url = `${process.env.REACT_APP_URL}/create-payment-intent`


    useEffect(() => {
        axios.post(url, { price, })
            .then(data => setClientSecret(data.data.clientSecret))
            .catch(err => console.log(err))
    }, [price, url])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessingButton(true);
        if (!stripe && !stripe) {
            setProcessingButton(false);
            return;
        };

        const card = elements.getElement(CardElement);
        if (card === null) {
            setProcessingButton(false);
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            console.log(error);
            setProcessingButton(false);
            setCardError(error?.message);
            return;
        } else {
            setCardError("");
        }

        const { paymentIntent, error: confirmPaymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );
        if (confirmPaymentError) {
            setProcessingButton(false);
            setCardError(confirmPaymentError?.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            toast.success(`Dear ${user?.displayName} your $${price} payment is success. Transaction Id is ${paymentIntent?.id} Thank you.`)
            console.log("paymentIntentpaymentIntent", paymentIntent);

            const url2 = `${process.env.REACT_APP_URL}/premiumuser`;
            const payConfirmUserDb = {
                name: user?.displayName,
                email: user?.email,
                premiumUser: true,
                price,
                userPremiumDuration: "1 year",
                paymentDate: new Date(),
            };
            // console.log(payConfirmUserDb)

            axios.post(url2, payConfirmUserDb)
                .then(res => {
                    setProcessingButton(false);
                    if (res.data?.success) {
                        navigate("/dashboard/premiumfeature")
                    }
                }).catch(e => {
                    setProcessingButton(false);
                    console.log(error)
                    toast.error("Something wrong to user information on mongoDb.")
                })
        }

    };


    return (
        <div
            className='container rounded-2xl mx-auto py-14 mt-8 md:p-20 flex-col flex justify-center items-center border bg-slate-100'
        >
            <img className='w-[350px] rounded-md' src={cardLogo} alt="" />
            <p className='text-black py-5'>Your net Payable amount is <span className='font-bold'>$ {price}.00</span></p>
            <form
                className='text-black border px-1 pt-6 rounded-lg min-w-[300px] max-w-[450px] w-full mx-auto'
                onSubmit={handleSubmit}>
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
                <div>
                    <p className={`mt-2 text-red-700 none ${cardError ? "" : "invisible"}`}>
                        {cardError ? cardError : "error hidden"}
                    </p>
                </div>
                <button
                    className='border-none btn btn-md px-8 my-2 bg-[#58b149] hover:bg-[#66C555] rounded-lg text-white'
                    type="submit" disabled={!stripe || !clientSecret || !user}>
                    {processingButton ? "processing..." : "Pay"}
                </button>
            </form>
        </div>
    )
}

export default PaymentForm