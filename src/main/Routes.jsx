import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Contato from '../components/Contato';
import Receita from '../components/Receita';

export default props => 
    <Switch>
        <Route path="/contato" component={Contato} />
        <Route path="/receita" component={Receita} />
    </Switch>