import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
//import {selectCollectionsForPreview} from './redux/shop/shop.selector';




class App extends React.Component {
  unsubscribeFromAuth = null;

  //Below is how we get the authentication to work using our firebase.auth() that we exported in the utils - this way we don't have to remount our entire app
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({ title, items})));
      }

      // this.setState({ currentUser: user});
      // console.log(user);
    });
  }



  //This is how we close the subscription but I still don't understand what is happening here
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* The currentUser prop will let the header know if the user is signed in or not */}
        <Header />
        {/*With Header placed here - It will show up on all pages below - we want the header to pull the current state of the user off of our reducer - not from above*/}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
 // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
