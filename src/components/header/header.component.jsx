import React from 'react';
//import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; //This is a higher order components that allows us to have access to things related to redux
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

//import './header.styles.scss';

//NOTE: This page uses the styled components - see the related styles jsx file to see set up - Need to add npm styled-components to use

const Header = (
  { currentUser, hidden } //The 'currentUser' is coming from our reducer via { connect }
) => (
  <HeaderContainer>
    <LogoContainer className="logo-container" to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP
      </OptionLink>
      <OptionLink  to="/shop">
        CONTACT
      </OptionLink>
      {
        //Here we are checking if the user is signed in - if there is an object associated with the 'currentUser' then the expression will be true and we will go to the div - If false we go to the Link - This is a dynamic way to change the sign in / sign out tab on the header
        currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </OptionDiv>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : 
      <CartDropdown />
    }
   
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({ //The 'state' being passed here is the top level rootReducer
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);