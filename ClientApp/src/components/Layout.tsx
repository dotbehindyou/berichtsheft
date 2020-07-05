import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

class Layout extends React.Component<any, any> {

  render () {
    return (
      <div>
        <NavMenu />
        <Container fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;