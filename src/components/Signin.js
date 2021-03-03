import React from 'react';
import {firebase} from '../firebase'
import { auth } from '../firebase'

const Signin = () =>
{
    const signInWithGoogle = () =>
    {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
    }


    return (
        <div>
            <button onClick={signInWithGoogle} >Sign In</button>
        </div>
    )
}

export default Signin;