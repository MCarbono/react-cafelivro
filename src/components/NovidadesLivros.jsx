import React from 'react';
import './NovidadesLivros.css';

import {Link} from 'react-router-dom';
export default props => 
    <figure className="figureNovidades">
        <img src={props.imagem} className="livros" />
        <figcaption className="text-center">{props.nome}</figcaption>
        <Link to="/livros">
            Livros
        </Link>
    </figure>