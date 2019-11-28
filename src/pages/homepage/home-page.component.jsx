import React from 'react';
import Directory from '../../components/directory/directory.component';
import './home-page.scss';

/*
* In this component we could have receved the history props from the
* Parent component and pass it along the components until the one whpo
* needs it but this is called "Prop Tunneling"
*  Homepage = (props) --> <Directory history={this.props.history} />
*/
const Homepage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default Homepage;
