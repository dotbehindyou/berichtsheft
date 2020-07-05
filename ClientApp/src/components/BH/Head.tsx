import React from 'react';
import { Row, Col } from 'reactstrap';

type HeadProp = {
    begin: string,
    end: string,
    year: number,
    department: string
};

class Head extends React.Component<HeadProp, any> {
    render() {
        return (
            <div style={{ border: 'solid 1px', padding: '5px' }}>
                    <Row>
                        <Col>
                            <Row>
                                <Col md="12">Für die Zeit</Col>
                            </Row>
                            <Row>
                                <Col md="1">vom:</Col>
                                <Col md="5"><input type="date" defaultValue={this.props.begin}/></Col>
                                <Col md="1">bis:</Col>
                                <Col md="5"><input type="date" defaultValue={this.props.end} /></Col>
                            </Row>
                        </Col>
                        <Col md="2" style={{ borderRight: 'solid 1px' }}>
                            <Row>
                                <Col md="12"><p>Ausbildungsjahr</p></Col>
                            </Row>
                            <Row>
                                <Col md="12"><input /></Col>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row>
                                <Col md="12"><p>Betriebsabteilung, Arbeitsbereich:</p></Col>
                            </Row>
                            <Row>
                                <Col md="12"><input /></Col>
                            </Row>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default Head;