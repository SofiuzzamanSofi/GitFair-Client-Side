import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { GoVerified } from 'react-icons/go';

function PayBillVoucher() {

    const { user, premiumUser } = useContext(AuthContext)
    console.log(premiumUser);
    if (user?.email !== premiumUser?.email) {
        return <div>Something went wrong</div>
    } else {
        return (
            <div
                className='text-white'>
                <div
                    className='text-black'
                >

                    <p className='text-xl font-bold'>Your order summery:</p>
                </div>
                <div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name Email & Phone</th>
                                <th>Price</th>
                                <th>Payment Date & Time</th>
                                {/* <th>Address</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>
                                    <div className=" space-x-3">
                                        <div>
                                            <div className="font-bold">{premiumUser?.name}</div>
                                            <div className="font-bold">{premiumUser?.email}</div>
                                            <div className="text-sm opacity-50">{premiumUser?.phone ? premiumUser?.phone : "---"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td >
                                    ${premiumUser?.price}
                                </td>
                                <td>
                                    <div className=" space-x-3">
                                        <div>
                                            <div className="font-bold">{premiumUser?.paymentDate}</div>
                                            <div className="font-bold flex justify-start items-center">Status:  <GoVerified className='text-blue-700 bg-white rounded-lg mx-2' />  Paid</div>
                                            <div className="font-bold ">Address: {premiumUser?.address ? premiumUser?.address : "Issue in Online"}</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button
                        onClick={() => window.print()}
                        className="btn bg-[#66C555] uppercase text-sm] text-white rounded-lg my-10 print:hidden"
                    >
                        Print payment voucher
                    </button>
                </div>
            </div>
        )
    }
}

export default PayBillVoucher