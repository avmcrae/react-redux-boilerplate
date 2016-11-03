import React from 'react';
import Nav from '../nav/nav';

class Page extends React.Component {

  render() {
    const {body} = this.props;
    return (
      <div className="row">
        <Nav />
        {body}
      </div>
    );
  }
}

export default Page;