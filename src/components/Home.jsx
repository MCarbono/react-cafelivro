import React, {Component, Fragment} from 'react';
import './Home.css';

import Novidades from './Novidades';
import Historia from './Historia';
import Newsletter from './Newsletter';

export default class Home extends Component {
    render(){
        return(
            <Fragment>
                <Novidades />
                <Historia />
                <Newsletter />
            </Fragment>
        );
    }
}