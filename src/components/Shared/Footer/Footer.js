import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='mt-48'>
            <div className='text-sm py-2 bg-teal-300 text-teal-900 font-semibold flex items-center justify-center'>
                <FontAwesomeIcon className='mr-2' icon={faCopyright}></FontAwesomeIcon>
                <h5 className=''>
                    Copyright {year}, All Rights Reserved BY SFR AGENCY
                </h5>
            </div>
        </footer>
    );
};

export default Footer;