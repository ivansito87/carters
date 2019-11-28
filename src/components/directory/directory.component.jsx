import React from 'react';
import * as dataArray from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: dataArray.default,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} size={size} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
