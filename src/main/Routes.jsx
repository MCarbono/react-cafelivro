import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Contato from '../components/Contato';
import Acessorios from '../components/Acessorios';
import Produtos from '../components/Produtos';
import Home from '../components/Home';
import Receitas from '../components/Receitas';
import Livros from '../components/Livros';

export default props => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/acessorios" component={Acessorios} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/receitas" component={Receitas} />
        <Route path="/livros" component={Livros} />
    </Switch>