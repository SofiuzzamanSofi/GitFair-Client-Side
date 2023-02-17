import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

function PremiumFeature() {

    const { user, premiumUser } = useContext(AuthContext)
    // const url2 = `${process.env.REACT_APP_URL}/premiumuserfromdb`;
    // const [premiumState, setPremiumState] = useState(false);

    // useEffect(() => {
    //     if (user?.email) {
    //         axios.post(url2, { email: user?.email })
    //             .then(res => {
    //                 if (res.data.success) {
    //                     setPremiumState(true);
    //                 }
    //             }).catch(e => {
    //                 console.log(e)
    //             })

    //         // fetch(url2, {
    //         //     method: "GET",
    //         //     headers: { "Content-Type": "application/json" },
    //         //     body: JSON.stringify(user?.email)
    //         // })
    //         //     .then(res => res.json())
    //         //     .then(data => console.log(data))
    //     }
    // }, [user, url2]);


    if (premiumUser) {
        return (
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className='text-4xl'>You are a premium user.</h1>
                <p className='font-bold'>Your dashboard is updated soon.</p>
            </div>
        )
    }


    return (
        <div>
            <section className="py-5">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="text-4xl font-bold tracking-wider uppercase text-black">Pricing</span>
                        <h2 className="text-2xl lg:text-2xl text-black">Choose your plan to get best services</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        {/* Card 1 */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded-2xl shadow sm:p-8 bg-gray-900  hover:bg-[#66C555]  hover:text-white">
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-semibold">3 Months</h4>
                                    <span className="text-xl font-semibold">$10</span>
                                </div>
                                <p className="mt-3 text-3xl font-semibold leading-relaxed ">Platinum Subscription</p>
                                <hr />
                                <ul className="flex-1 mb-6 ">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Value your time with our services</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Ad free platform</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Top 3 features in one place</span>
                                    </li>
                                </ul>
                                <Link
                                    to="paymentForm/10"
                                    className="border-black border hover:border-none block bg-[#66C555] hover:bg-white hover:text-black text-white w-full px-5 py-3 text-lg font-bold tracking-wider text-center rounded-lg"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded-2xl shadow sm:p-8 bg-gray-900  hover:bg-[#66C555]  hover:text-white">
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-semibold">1 Year</h4>
                                    <span className="text-2xl font-semibold">$30</span>
                                </div>
                                <p className="mt-3 text-3xl font-semibold leading-relaxed un ">Diamond Subscription</p>
                                <hr />
                                <ul className="flex-1 mb-6 ">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Value your time with our services</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Ad free platform</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Top 3 features in one place</span>
                                    </li>
                                </ul>
                                <Link
                                    to="paymentForm/30"
                                    className="border-black border hover:border-none block bg-[#66C555] hover:bg-white hover:text-black text-white w-full px-5 py-3 text-lg font-bold tracking-wider text-center rounded-lg"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded-2xl shadow sm:p-8 bg-gray-900  hover:bg-[#66C555]  hover:text-white">
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-semibold">Lifetime</h4>
                                    <span className="text-2xl font-semibold">$99</span>
                                </div>
                                <p className="mt-3 text-3xl font-semibold leading-relaxed ">Titanium Subscription</p>
                                <hr />
                                <ul className="flex-1 mb-6 ">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Value your time with our services</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Ad free platform</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Best plan to save money</span>
                                    </li>
                                </ul>
                                <Link
                                    to="paymentForm/99"
                                    className="border-black border hover:border-none block bg-[#66C555] hover:bg-white hover:text-black text-white w-full px-5 py-3 text-lg font-bold tracking-wider text-center rounded-lg"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PremiumFeature


