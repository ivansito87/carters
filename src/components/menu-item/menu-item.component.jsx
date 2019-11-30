import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu-item.scss';

// In this case the match and history props are part of the props object and are
// passed ewith every prop any time we need to find this
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.path}${linkUrl}`);
    }}
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

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
