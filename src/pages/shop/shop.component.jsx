import React from 'react';
import { Route } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (        // Remember that we get three objects passed when we use  the ROUTE - 1: match 2:Component  3: History  This is because we are using the Route in app.js - it enables us ot use this  
      <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview} /> 

       <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
      </div>     
);

export default ShopPage;