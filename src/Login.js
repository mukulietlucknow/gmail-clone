import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth,provider } from "./firebase";
import {login, logout} from './features/counter/userSlice';
import {useDispatch} from 'react-redux';



function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch(error => {
            return alert(error.message)
        })
    }    
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.stack.imgur.com/yLHkv.png" />
            </div>

            <Button onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
