import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faCheckSquare, faListUl, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
        <div className='h-96 text-teal-100 pt-16 sm:w-3/6 md:w-2/6 bg-teal-900 flex justify-center'>
            {
                isAdmin === false ?
                    <div>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faListUl} />
                                <li className='list-none'>
                                    All Properties
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faCheckSquare} />
                                <li className='list-none'>
                                    My Selections
                                </li>
                            </div>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link to='/addAdmin'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faAdd} />
                                <li className='list-none'>
                                    Add Admin
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faListUl} />
                                <li className='list-none'>
                                    All Properties
                                </li>
                            </div>
                        </Link>
                        <Link to='/addProperty'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faAdd} />
                                <li className='list-none'>
                                    Add Property
                                </li>
                            </div>
                        </Link>
                        <Link to='/deleteProperty'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faTrashCan} />
                                <li className='list-none'>
                                    Delete Property
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-teal-100 hover:text-teal-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faEdit} />
                                <li className='list-none'>
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