import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase.init';
import useFirebase from '../hooks/useFirebase';
import logo from '../img/39216d73519bca962bd4a01f3e8f4a4b.png'


const auth =getAuth(app)
const Register = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const{signInWithGoogle}=useFirebase();
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassChange=(e)=>{
        setPass(e.target.value);
    }
    const handleSubmit=event=>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result=>{
            const user=result.user;
            setEmail('');
            setPass('')
            console.log(user)
        })
        event.preventDefault();
    }
    return (
        <div>
            <h1 className='text-green-400 text-2xl mt-5'>Create </h1>
            <h1 className='text-green-400 mb-5 text-2xl'>New Account</h1>
            <form onSubmit={handleSubmit}>
            <input onBlur={handleEmailChange} className='w-96 border border-zinc-200 rounded-lg p-3 mb-5' type="email" name="email "required placeholder='Enter your email'  /><br />
            <input onBlur={handlePassChange} className='w-96 border border-zinc-200 rounded-lg p-3 mb-5' type="password" name="" placeholder='Enter your Password'  required/><br />
            <input className='w-96 border border-zinc-200 rounded-lg p-3 mb-5' type="password" name="" placeholder='Re-enter your Password' required /><br />
            <input type="submit" value='Register' className='btn bg-gradient-to-br from-blue-400 to-emerald-400 px-12 py-2 rounded cursor-pointer text-white' />
            </form>
           
            <div class="relative py-4">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-b border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="bg-white px-4 text-sm text-gray-500">OR</span>
  </div>
</div>
        <div className='mt-5 mb-10'>
                <button  onClick={signInWithGoogle} className='btn bg-white border border-zinc-200 px-3 rounded shadow-lg flex mx-auto items-center'> <img src={logo} className='w-10 h-10 mr-10' alt="" />Continue with Google</button>
            </div>
            <p>Already registred? <Link to="/login" className='text-green-400'>Login now!</Link></p>
        </div>
    );
};

export default Register;