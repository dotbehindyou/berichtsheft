import React, { Component } from 'react';
import { BerichtsheftBlatt } from './BH/BerichtsheftBlatt';

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <div>
                <BerichtsheftBlatt />
            </div>
    );
  }
}

/*
 
          <div>
              <Row>
                  <Col style={{ textAlign: 'center' }}><h1>Ausbildungsnachweis</h1></Col>
              </Row>
              <br/>
<div style={{ border: 'solid 1px', padding: '5px' }}>
    <Row>
        <Col>
            <Row>
                <Col md="12">Für die Zeit</Col>
            </Row>
            <Row>
                <Col md="1">vom:</Col>
                <Col md="5"><input /></Col>
                <Col md="1">bis:</Col>
                <Col md="5"><input /></Col>
            </Row>
        </Col>
        <Col md="2" style={{ borderRight: 'solid 1px' }}>
            <Row>
                <Col md="12">Ausbildungsjahr</Col>
            </Row>
            <Row>
                <Col md="12"><input /></Col>
            </Row>
        </Col>
        <Col md="4">
            <Row>
                <Col md="12">Betriebsabteilung, Arbeitsbereich:</Col>
            </Row>
            <Row>
                <Col md="12"><input /></Col>
            </Row>
        </Col>
    </Row>
</div>
    <br />
<div className="bh-body">
    <Row>
        <Col>Betriebliche Tätigkeiten, arbeitsplatzbezogene Unterweisungen</Col>
        <Col md="4" style={{ textAlign: 'right' }}>Kalenderwoche</Col>
    </Row>
    <div style={{ border: 'solid 1px' }}>
        <Row>
            <Col><textarea /></Col>
            <Col md="1" style={{ border: '' }}><input type="number" value={kwoche} onChange={({ target: { value } }) => this.setState({ kwoche: value })} /></Col>
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
    <br />
<div>
    <div style={{ border: 'solid 1px' }}>
        <Row>
            <Col>Themn der Lehrgespräche, Schulungen etc.</Col>
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
    <br />
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
    <br />
          </div >
 */