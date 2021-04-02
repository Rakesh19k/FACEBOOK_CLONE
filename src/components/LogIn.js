import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import "./CSS/LogIn.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function LogIn() {

    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
               dispatch({
                   type: actionTypes.SET_USER,
                   user: result.user,
               });

            }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />

                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                />
            </div>
            <Button type="submit" onClick={signIn} variant="contained" color="primary">Sign In</Button>
        </div>
    )
}

export default LogIn
