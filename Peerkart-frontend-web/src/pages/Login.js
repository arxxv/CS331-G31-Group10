import React, { useState, useContext } from "react";
import Loginbackground from "../images/logincover.svg";
import { useDispatch } from 'react-redux';
import Loginfooter from "../images/loginfooter.svg";
import "../css/Login.css";
import {Link, useNavigate} from 'react-router-dom';
import axiosInstance from '../utils/axios';
import { saveUserData } from '../redux/actions/authActions';

export default function Login() {
	const navigate=useNavigate();
	const dispatch=useDispatch();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const loginHandler=async(e)=>{
		e.preventDefault();
		axiosInstance
      .post('/auth/login', {
        email,
        password,
      })
      .then(res => {
        saveUserData(dispatch, res.data);
		navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
	}
	return (
		<div className='login-main'>
			<div className='login-container'>
				<div className='login-left'>
					<div className='login-wrapper'>
						<div className='login-header'>
							<span> Sign In</span>
						</div>
						<div className='login-subtext'>
							<span>Enter your email and password to sign in</span>
						</div>
						<form className='login-form'>
							<label>Email</label>
							<input
								type='text'
								className='input-field'
								name='username'
								placeholder='Email'
								value={email}
								onChange={(text)=>{setEmail(text.target.value)}}
							/>
							<label>Password</label>
							<input
								type='password'
								className='input-field'
								name='password'
								placeholder='Password'
								value={password}
								onChange={(text)=>{setPassword(text.target.value)}}
							/>
							<button type='submit' className='login-button' onClick={loginHandler}>
								SIGN IN
							</button>
						</form>
						<div className='login-gotosignup'>
							<span>
								Don't have an account?
								<span className='bluetext'>
									<Link className='redirect-links' to='/register'>
										Sign up
									</Link>
								</span>{" "}
							</span>
						</div>
					</div>
				</div>
				<div className='login-right'>
					<img src={Loginbackground} className='login-back' alt='login-bb' />
				</div>
			</div>
			<div className='login-footer'>
				<img
					src={Loginfooter}
					alt='login-footer'
					className='login-footer-img'
				/>
			</div>
		</div>
	);
}

