import React from 'react';
import BerichtsheftBlatt from './BH/BerichtsheftBlatt';
import { Row, Col } from 'reactstrap';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col style={{ textAlign: 'center' }}><h1>Ausbildungsnachweis</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col md="6">
                        <BerichtsheftBlatt />
                    </Col>
                    <Col md="6">
                        <BerichtsheftBlatt />
                    </Col>
                </Row>
            </div>
    );
  }
}

export default Home;