import React from 'react';
import './Nav.css';

import {Link} from 'react-router-dom';

export default props => 
    <nav className="nav d-flex justify-content-around align-items-center mb-3">

        <Link to="/">
            Home
        </Link>
        
        <Link to="/produtos">
            Produtos
        </Link>    

        <Link to="/acessorios">
            Acessórios
        </Link>
            
        <Link to="/receitas">
            Receitas
        </Link>
           
        <Link to="/livros">
            Livros
        </Link>

        <Link to="/contato">
            Contato
        </Link>
    </nav>
   

