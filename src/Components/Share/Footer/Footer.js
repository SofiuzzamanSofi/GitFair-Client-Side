import React from 'react';
import { Link } from 'react-router-dom';
import { SlSocialYoutube, SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <footer className="footer p-10  text-base-content container mx-auto">
                    <div>
                        <h1>GitFair</h1>
                        <p>Objectively syndicate multifunctional potentialities for open-source<br /> solutions. Uniquely harness distinctive growth<br /> strategies after extensible testing procedures. Uniquely <br />formulate reliable quality vectors after revolutionary<br /> infomediaries. Rapidiously provide.</p>
                    </div>
                    <div>
                        <span className="footer-title">Our Pages</span>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Contact US</a>
                        <a className="link link-hover">Privacy And Policy</a>
                        <a className="link link-hover">Terms And condition</a>
                    </div>
                    <div>
                        <span className="footer-title">Our Services</span>
                        <a className="link link-hover">All Services</a>
                        <a className="link link-hover">Reach Us</a>
                        <div className='flex'>
                            <Link className='mr-3'><SlSocialYoutube /></Link>
                            <Link><SlSocialFacebook /></Link>
                        </div>
                    </div>
                </footer>
                <div className="footer p-10 bg-base-200 text-base-content footer-center mt-2">
                    <p>@CopyRight All Right Reserved & Designed by StadyDevs</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;