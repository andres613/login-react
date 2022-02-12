import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import Cookies from 'universal-cookie';

import { get } from '../../utils/httpClient.js';
import loginImg from "./images/login-img.jpg";
import facebookImg from './images/facebook.png';
import googleImg from './images/google.png';
import './Login.css';

const cookies = new Cookies();

export const Login = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const startSession = await get(email, md5(password));
        if(startSession) {
            cookies.set('id', startSession.id, { path: "/", sameSite: "lax" }); //accesible desde todos lados
            cookies.set('name', startSession.name, { path: "/", sameSite: "lax" });
            cookies.set('username', startSession.username, { path: "/", sameSite: "lax" });
            cookies.set('email', startSession.email, { path: "/", sameSite: "lax" });
            window.location.href="./main"; //dado que main y / estan al mismo nivel, entonces solo se agrega un punto
        } else {
            alert("Email o password incorrecto!!")
        }
    }

    useEffect(() => {
        if(cookies.get('username')) {
            window.location.href='./main';
        }
    })

    return (
        <div className="login">
            <div className="blur">
                <img
                    className="avatar-img"
                    src={loginImg}
                    alt="Login icon"
                />
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit} >
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                    <input
                        type="submit"
                        value="Login"
                    />
                    <div className="remember">
                        <div className="or-option">OR</div>
                        <div className="links">
                            <div className="social-network">
                                <Link to="/other">
                                    <img
                                        src={facebookImg}
                                        alt="Facebook Icon"
                                    />
                                </Link>
                            </div>
                            <div className="social-network">
                                <Link to="/other">
                                    <img
                                        src={googleImg}
                                        alt="Facebook Icon"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="signup">
                            Don't have account?
                            <Link className='signup-now' to="/other">
                                Signup Now
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
