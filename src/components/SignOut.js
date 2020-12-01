import React from 'react';

import { auth } from './firebase';

const SignOut = () => {
    return auth.currentUser && (
        <button className="ui button primary" onClick={ () => auth.signOut() }>Sign Out</button>
    );
};

export default SignOut;