import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';


import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="shop-page  ">
    {collections.map(({ id, title, routeName, items }) => (
      <CollectionPreview
        key={id}
        title={title}
        routeName={routeName}
        items={items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  
  export default connect(mapStateToProps)(CollectionsOverview);