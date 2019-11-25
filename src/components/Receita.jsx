import React from 'react';
import './Receita.css'
export default props =>
    <div>
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4 imagem-teste">
                    <img src={props.imagem} class="card-img" alt="" />
                </div>
                <div class="col-md-8 dados-receita">
                    <div class="card-body">
                        <h2 class="card-title text-center titulo-receita">{props.title}</h2>
                        <hr />
                        
                        <h4>Ingredientes</h4>
                        <ul>
                            {props.ingredientes.map((ingrediente) => (
                            <li className="lista-ingrediente">
                                <strong>{ingrediente}</strong>
                            </li>
                            ))}
                        </ul>

                        <h4>Modo de preparo</h4>

                        <ol>
                            {props.preparo.map((preparo) => (
                                <strong><li className="lista-preparo">
                                    {preparo}
                                </li></strong>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>