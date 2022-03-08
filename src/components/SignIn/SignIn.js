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
                navigate(location.state.from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

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
            <div>
                {
                    user.isSignedIn ?
                        <button onClick={handleSignOut}>sign up</button>
                        :
                        <button onClick={handleSignIn} >sign in with google</button>
                }
                {
                    user.isSignedIn ?
                        <div>
                            <h2>Welcome {user.userName}</h2>
                        </div>
                        :
                        <p>Not Signed in</p>
                }
            </div>
        </div>
    );
};

export default SignIn;