import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'



const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/* Below the filter and the map functions are nested as to dispaly only 4 of the items using this index and data from the data file.*/}
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
           item={item}
          />
        ))}
      
    </div>
  </div>
);

export default CollectionPreview;