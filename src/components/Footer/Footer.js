import React from 'react';
import { FaGoogle, FaGithub, FaPhone, FaMailBulk, FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='text-center py-5 mt-5'>
            <hr className='p-3' />
            <div>
                <h4 className='text-center mt-6'>Stay tuned</h4>
                <p>contact us: </p>
                <span><FaPhone></FaPhone></span><span className='ms-2'><FaMailBulk></FaMailBulk></span><span className='ms-2'><FaFacebook></FaFacebook></span>
            </div>
        </div>
    );
};

export default Footer;