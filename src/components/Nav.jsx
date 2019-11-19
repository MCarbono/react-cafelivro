import React from 'react';
import './Nav.css';

import {Link} from 'react-router-dom';

export default props => 
    <nav className="nav d-flex justify-content-around align-items-center">

        <a href="#">
            
        </a>

        <a href="#">
             Início
        </a>

        

        <Link to="/produtos">
            Produtos
        </Link>    

        <Link to="/acessorios">
            Acessórios
        </Link>
            
        <Link to="/receita">
            Receitas
        </Link>
           
        <a href="#">
            Livros
        </a>

        <Link to="/contato">
            Contato
        </Link>
    </nav>
   

