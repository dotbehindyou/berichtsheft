import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Zusatz extends Component {
    render() {
        return (
            <div>
                <div style={{ border: 'solid 1px' }}>
                    <Row>
                        <Col>Themen der Lehrgespräche, Schulungen etc.</Col>
                    </Row>
                    <Row>
                        <Col><textarea /></Col>
                    </Row>
                </div>
                <br />
                <div style={{ border: 'solid 1px' }}>
                    <Row>
                        <Col>Themen in der Berufsschule (soweit Gegenstand des Berufsbildes)</Col>
                    </Row>
                    <Row>
                        <Col><textarea /></Col>
                    </Row>
                </div>
            </div>
        );
    }
}
