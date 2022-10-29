import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user,setUser]=useState({});
    useEffect(()=>{

    },[]);
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            console.log(user);
        })
    }
    return {user,setUser,signInWithGoogle};
};

export default useFirebase;