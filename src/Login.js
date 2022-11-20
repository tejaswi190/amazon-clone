import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
           .signInWithEmailAndPassword(email,password)
           .then((auth) => {
                navigate('/');

          })
          .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => {
            // console.log(auth);
            if(auth){
                navigate('/');
            }

          })
          .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to="/">
        <img  className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'> 
        </img></Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange = {e => setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type='password' value={password} onChange = {e => setPassword(e.target.value)}></input>
                <button className='login_signinButton' type='submit' onClick={signIn}>Sign in</button>
            </form>
            <p>
                By sign-in you agree to the amazon fake clone coditions of use&sale.please see our privacy notice.
            </p>

            <button className='login_register_button' onClick={register}>Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login