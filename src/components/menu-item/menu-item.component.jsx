import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';


const MenuItem = (
  { title, imageUrl, size, history, linkUrl, match } //functional component
) => (
  //Below is a way to change the size of the component on the fly - remember to use the back tick for the syntax - this is a different way of using props
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
  
  

export default withRouter(MenuItem);
//Using the withRouter will give us access to the props of the router that we need access to i.e history. We want all menu items to be able to use the history prop so we can route to the associated page and this does it rather than tunnel routing down from homepage throught the children to here - Much better practice