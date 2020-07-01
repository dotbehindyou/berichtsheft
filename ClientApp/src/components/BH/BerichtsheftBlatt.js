import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Head } from './Head';
import { Body } from './Body';
import { Zusatz } from './Zusatz';
import { Footer } from './Footer';
import moment from 'moment';

export class BerichtsheftBlatt extends Component {
    state = {
        begin: moment().format('YYYY-MM-DD'),
        end: moment().format('YYYY-MM-DD'),
        year: 1,
        section: ''
    }

    constructor(props) {
        super(props);

        console.log(this.state);
    }

    render() {
        let kweek = moment(this.state.begin).week();
        return (
            <div>
                <Row>
                    <Col style={{ textAlign: 'center' }}><h1>Ausbildungsnachweis</h1></Col>
                </Row>
                <br />
                <Head begin={this.state.begin}
                    end={this.state.end}
                    year={this.state.year}
                    section={this.state.section} />
                <br />
                <Body kweek={kweek}/>
                <br />
                <Zusatz />
                <br />
                <Footer />
            </div>
        );
    }
}
