import React from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="3">
                        <Row>
                            <Col><input /></Col>
                        </Row>
                        <Row>
                            <Col>Auszubildende(r)</Col>
                        </Row>
                    </Col>
                    <Col md="1">
                        gesehen:
                      </Col>
                    <Col md="4">
                        <Row>
                            <Col><input /></Col>
                        </Row>
                        <Row>
                            <Col>Ausbilder(in)</Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <Col><input /></Col>
                        </Row>
                        <Row>
                            <Col>gesetzliche(r) Vertreter(in)</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;