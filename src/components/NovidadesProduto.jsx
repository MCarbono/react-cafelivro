import React from 'react';
import './NovidadesProduto.css';

export default props => 
    <figure className="figureNovidades">
        <img src={props.imagem} className="figureNovidadesImagemProdutos livros" />
        <figcaption className="text-center">{props.nome}</figcaption>
    </figure>