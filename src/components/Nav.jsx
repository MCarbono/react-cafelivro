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

        <a href="#">
             Bebidas
        </a>

        <a href="#">
            Comidas  
        </a>

        <a href="#">
            Acessórios
        </a>

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
   

