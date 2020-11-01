import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //This is how we assigned the shop data to the state function and named it collections.
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
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
  }
}

export default ShopPage;