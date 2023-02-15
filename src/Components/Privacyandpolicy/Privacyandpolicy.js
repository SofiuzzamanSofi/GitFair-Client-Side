import React from 'react';
import { Link } from 'react-router-dom';

const Privacyandpolicy = () => {
    return (
        <div className='lg:w-[1240px] m-auto p-5'>
            <h2 className='text-4xl font-bold text-slate-100 mb-10 mt-4'>Privacy Policy</h2>
            <p>
                At GitFair, we take the privacy and security of our users very seriously. We have developed a comprehensive privacy policy that explains how we collect, use, and protect your personal data when you use our code saving and sharing platform.
                <br />
                <br />
                - Information We Collect:<br />
                When you sign up for an account with GitFair, we collect basic information such as your name and email address. Additionally, when you upload or share code, we may collect information about the type of code you are sharing, the date and time of the upload, and any comments you provide about the code.
                <br />
                <br />
                - How We Use Your Information:<br />
                We use the information we collect from you to provide you with a better experience on our platform. This includes customizing your user experience, providing customer support, and communicating with you about our platform.
                <br />
                <br />
                - Sharing Your Information:<br />
                We do not sell or rent your personal data to third parties. However, we may share your information with our trusted service providers who help us provide and improve our platform. We may also disclose your information to comply with legal requirements or to protect our rights and the rights of our users.
                <br />
                <br />
                - Data Security:<br />
                We take measures to protect your personal data from unauthorized access, alteration, or destruction. We use industry-standard security protocols and procedures to safeguard your information, including encryption and firewalls.
                <br />
                <br />
                - Cookies:<br />
                We use cookies to enhance your user experience on our platform. Cookies are small text files that are stored on your device and allow us to remember your preferences and activity on our platform.
                <br />
                <br />
                - Children's Privacy:<br />
                Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
                <br />
                <br />
                - Changes to our Privacy Policy:<br />
                We may update our privacy policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our platform.
                <br />
                <br />
                By using GitFair, you agree to the terms of our privacy policy. If you have any questions or concerns about our privacy policy, please <Link to="/contact" className='text-slate-200 hover:text-green-500 font-bold underline'>Contact Us.</Link>
            </p>
        </div>
    );
};

export default Privacyandpolicy;