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
        {/* Spreding the rest of the properties in the data since they macth
            the values of the props  */}
        {/* <MenuItem key={id} title={title} url={url} /> */}
        {sections.map(({ id, ...otherPropsFromData }) => (
          <MenuItem key={id} {...otherPropsFromData} />
        ))}
      </div>
    );
  }
}

export default Directory;
