import React from 'react';
//import './homepage.styles.scss';
import {HomePageContainer} from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  //Homepage is the only component that gets access to the history prop because that is what we used but we don't want to use prop tunneling which is passing the history prop through all the children to get to the component that needs access to it
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;