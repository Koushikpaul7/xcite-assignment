import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import logo from '../img/39216d73519bca962bd4a01f3e8f4a4b.png'
const Login = () => {
    const{signInWithGoogle,user,setUser}=useFirebase();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [user2, setUser2]=useState({})
    const auth = getAuth();

    const handleSubmit=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
  .then((result) => {
    const user2 = result.user;
    setUser2(user2);
    
  })
}
const logout=()=>
signOut(auth)
.then(() => {
   setUser({});
   setUser2({});
  })
  .catch((error) => {
  
  });


  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
}
const handlePassChange=(e)=>{
    setPass(e.target.value);
}
    return (
        <div>
            <div>
            <h1 className='text-green-400 text-2xl my-5'>Login </h1>
            <div>
            {user2?.email ||user?.email }
            </div>
            {
                user?.email || user2.email ?<button className='btn bg-slate-500 p-2 rounded my-5' onClick={logout}>logout</button>
              : <p>Please Sign In</p>
              }
            
           <form onSubmit={handleSubmit}>
           <input onBlur={handleEmailChange} className='w-96 border border-zinc-200 rounded-lg p-3 mb-3' type="email" name="email "required placeholder='Enter your email'  /><br />
            <input onBlur={handlePassChange} className='w-96 border border-zinc-200 rounded-lg p-3 mb-10' type="password" name="" placeholder='Enter your Password'  required/><br />
            <input type="submit" value='Login' className='btn bg-gradient-to-br from-blue-400 to-emerald-400 px-12 py-2 rounded cursor-pointer text-white' />
           
           </form>
        </div>

        <div class="relative py-4">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-b border-gray-300"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="bg-white px-4 text-sm text-gray-500">OR</span>
  </div>
</div>
        <div className='mt-5 mb-10'>
                <button  onClick={signInWithGoogle} className='btn bg-white border border-zinc-200 px-3 rounded shadow-lg flex mx-auto items-center'> <img src={logo} className='w-10 h-10 mr-10' alt="" /> Continue with Google</button>
            </div>
            <p>New here? <Link to='/'><span className='text-green-400'>Please register</span></Link></p>
        </div>
    );
};

export default Login;