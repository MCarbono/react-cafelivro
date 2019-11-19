import React, {Fragment} from 'react';
import './Acessorio.css';

export default props =>
    <Fragment>
        <div class="text-center">
            <figure>
                <img src={props.imagem} />
                <figcaption>{props.nome}</figcaption> 
            </figure>

            <p>{props.preco}</p>
        </div>
    </Fragment>
