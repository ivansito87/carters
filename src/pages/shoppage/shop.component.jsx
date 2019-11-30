import React, { Component } from 'react';
import * as SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colections: SHOP_DATA['default'],
    };
  }
  render() {
    const { colections } = this.state;
    console.log(colections);
    return (
      <div>
        {this.state.colections.map(({ id, ...restOFKeysProps }) => (
          <PreviewCollection key={id} {...restOFKeysProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
