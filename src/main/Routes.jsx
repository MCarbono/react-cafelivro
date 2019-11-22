import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Contato from '../components/Contato';
import Receita from '../components/Receita';
import Acessorios from '../components/Acessorios';
import Produtos from '../components/Produtos';
import Home from '../components/Home';

export default props => 
    <Switch>
        <Route path="/contato" component={Contato} />
        <Route path="/receita" component={Receita} />
        <Route path="/acessorios" component={Acessorios} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/home" component={Home} />
    </Switch>