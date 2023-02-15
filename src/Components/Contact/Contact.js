import React from 'react';

const Contact = () => {
    return (
        <div className='lg:w-[1240px] m-auto p-5'>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:gap-6">
                    <div className="w-[1000px] mx-auto p-10 md:col-span-2 md:mt-0 m-auto">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"/>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                            <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-sm font-medium text-black">Country</label>
                                            <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                                <option>Bangladesh</option>
                                                <option>India</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label for="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                            <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                                            <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-[#66C555] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;