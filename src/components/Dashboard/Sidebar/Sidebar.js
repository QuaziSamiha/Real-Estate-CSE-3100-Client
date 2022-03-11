import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faDeleteLeft, faShower, faSpellCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    // console.log(loggedInUser.userEmail);
    useEffect(() => {
        fetch('http://localhost:3144/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.userEmail })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsAdmin(data);
            })
    }, [])

    return (
        <div className='pt-16'>
            {
                isAdmin === false ?
                    <div className=''>
                        <Link to='/'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faShower} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    All Properties
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faSpellCheck} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    My Selections
                                </li>
                            </div>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link to='/addAdmin'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faAdd} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    Add Admin
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faShower} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    All Properties
                                </li>
                            </div>
                        </Link>
                        <Link to='/addProperty'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faAdd} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    Add Property
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faDeleteLeft} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    Delete Property
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faEdit} />
                                <li className='list-none hover:bg-teal-100 hover:text-teal-700'>
                                    Edit Property
                                </li>
                            </div>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Sidebar;