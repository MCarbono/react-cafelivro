import React from 'react';
import './Nav.css';

import {Link} from 'react-router-dom';

export default props => 
    <nav className="nav d-flex justify-content-around align-items-center mb-3">

        <a href="#">
            
        </a>

        <Link to="/home">
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
           
        <a href="#">
            Livros
        </a>

        <Link to="/contato">
            Contato
        </Link>
    </nav>
   

