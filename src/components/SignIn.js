import React from 'react';
import firebase from 'firebase/app';

import { auth } from './firebase';

const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
  
    return (
      <button className="ui button primary" onClick={ signInWithGoogle }>Sign in with Google</button>
    );
  };

  export default SignIn;