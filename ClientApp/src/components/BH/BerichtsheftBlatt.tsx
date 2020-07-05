import React from 'react';
import Head from './Head';
import Body from './Body';
import Zusatz from './Zusatz';
import Footer from './Footer';
import moment from 'moment';

class BerichtsheftBlatt extends React.Component<any, any> {
    state = {
        begin: moment().format('YYYY-MM-DD'),
        end: moment().format('YYYY-MM-DD'),
        year: 1,
        department: ''
    }

    constructor(props: any) {
        super(props);

        console.log(this.state);
    }

    render() {
        let kweek = moment(this.state.begin).week();
        return (
            <div>
                <Head begin={this.state.begin}
                    end={this.state.end}
                    year={this.state.year}
                    department={this.state.department} />
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

export default BerichtsheftBlatt;