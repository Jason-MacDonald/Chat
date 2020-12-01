import React from 'react';
import { auth } from './firebase';
import SignIn from './SignIn';

import SignOut from './SignOut';

const Menu = () => {
    return (
        <div className="ui big icon menu">
            <a className="item">
                <i className="big gamepad icon"></i>
            </a>
            <a className="item">
                <i className="big video camera icon"></i>
            </a>
            <a className="item">
                <i className="big video play icon"></i>
            </a>
            <div className="right menu">
                <a className="item">
                    { auth && auth.currentUser ? <SignOut /> : <SignIn /> }
                </a>
            </div>
        </div>
    );
};

export default Menu;