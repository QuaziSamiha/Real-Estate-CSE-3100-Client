import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const SignIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState({
        isSignedIn: false,
        userName: '',
        userEmail: '',
        userPhotoUrl: ''
    });

    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    userName: displayName,
                    userEmail: email,
                    userPhotoUrl: photoURL
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                // console.log(signedInUser);
                navigate(location.state.from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    // console.log(loggedInUser.userEmail);

    const handleSignOut = () => {
        // console.log('handled sign out');
        const auth = getAuth();
        signOut(auth)
            .then((success) => {
                const signedOutUser = {
                    isSignedIn: false,
                    userName: '',
                    userEmail: '',
                    userPhotoUrl: ''
                };
                setUser(signedOutUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar />
            this is sign in
            <div className='pt-24 md:pt-44 w-11/12 flex justify-center'>
                <div className='bg-teal-100 px-8'>
                    <div>
                        {
                            user.isSignedIn ?
                                <button className='bg-teal-700 text-white text-xl font-bold px-24 py-6 mx-24 mt-16 mb-12' onClick={handleSignOut}>sign out</button>
                                :
                                <button className='bg-teal-700 text-white text-xl font-bold px-24 py-6 mx-24 mt-16 mb-12' onClick={handleSignIn} >sign in with google</button>
                        }
                    </div>
                    <div>
                        {
                            user.isSignedIn ?
                                <div>
                                    <h2 className='text-center font-bold mt-4 mb-8 text-lg text-teal-700'>Welcome {user.userName}</h2>
                                </div>
                                :
                                <span></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;