import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Contato from '../components/Contato';
export default props => 
    <Switch>
        <Route path="/contato" component={Contato} />
    </Switch>