import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ( {currentUser}) => (
    <div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='log' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {  //Here we are checking if the user is signed in - if there is an object associated with the 'currentUser' then the expression will be true and we will go to the div - If false we go to the Link - This is a dynamic way to change the sign in / sign out tab on the header
            currentUser ? (
            <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>)
            : (
            <Link className='option' to='/signin'> SIGN IN</Link>)
        }
    </div>

    </div>
);

export default Header;