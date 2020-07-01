import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Body extends Component {

    render() {
        let kwoche = isNaN(this.props.kweek) ? -4 : this.props.kweek;
        return (
            <div className="bh-body">
                <Row>
                    <Col>Betriebliche Tätigkeiten, arbeitsplatzbezogene Unterweisungen</Col>
                    <Col md="4" style={{ textAlign: 'right' }}>Kalenderwoche</Col>
                </Row>
                <div style={{ border: 'solid 1px' }}>
                    <Row>
                        <Col><textarea /></Col>
                        <Col md="1" style={{ border: '' }}><input disabled value={kwoche} /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><textarea /></Col>
                        <Col md="1" style={{ border: '' }}><input disabled value={(++kwoche)} /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><textarea /></Col>
                        <Col md="1" style={{ border: '' }}><input disabled value={(++kwoche)} /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><textarea /></Col>
                        <Col md="1" style={{ border: '' }}><input disabled value={(++kwoche)} /></Col>
                    </Row>
                </div>
            </div>
                  );
    }
}
