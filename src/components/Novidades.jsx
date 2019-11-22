import React, {Fragment} from 'react';
import './Novidades.css';

import NovidadesProduto from './NovidadesProduto';
export default props => 
    <Fragment>
        <div className="novidades">
            <h1 className="mb-5 text-center">Novidades</h1>

            <div className="conteudo d-flex  justify-content-around">
                <NovidadesProduto imagem="http://i0.statig.com.br/bancodeimagens/99/hn/12/99hn129u2jnss8vy3pyjjko5g.jpg" nome="Açaí na tigela" />
                <NovidadesProduto imagem="http://www.mulhernareal.com.br/materias/capa/caftitulo.jpg" nome="Sorvete de café" />
                <NovidadesProduto imagem="https://abrilmdemulher.files.wordpress.com/2016/09/cafe_gealdo.jpg?quality=90&strip=info&w=654&h=436&crop=1" nome="Café gelado c/ sorvete"/>
                <NovidadesProduto imagem="https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3367-d01af8c93e118ca144e5483d254c930f.jpg" nome="Frapê de café" />
            </div>
        </div>
    </Fragment>