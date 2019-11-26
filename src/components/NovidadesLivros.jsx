import React from 'react';
import './NovidadesLivros.css';

export default props => 
    <figure className="figureNovidades">
        <img src={props.imagem} className="livros" />
        <figcaption className="text-center">{props.nome}</figcaption>
    </figure>