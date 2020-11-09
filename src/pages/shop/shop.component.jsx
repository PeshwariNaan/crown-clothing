import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selector';


const ShopPage = ({collections}) => (        
      <div className="shop-page">
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
  collections: selectCollections
});


export default connect(mapStateToProps)(ShopPage);