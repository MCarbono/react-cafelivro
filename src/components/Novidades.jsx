import React, {Fragment} from 'react';
import './Novidades.css';

import NovidadesProduto from './NovidadesProduto';

export default props => 
    <Fragment>
        <div className="novidades">
            <h1 className="mb-5 text-center">Novos Produtos</h1>

            <div className="d-flex  justify-content-around flex-wrap">
                <NovidadesProduto imagem="http://i0.statig.com.br/bancodeimagens/99/hn/12/99hn129u2jnss8vy3pyjjko5g.jpg" nome="Açaí na tigela" />
                <NovidadesProduto imagem="http://www.mulhernareal.com.br/materias/capa/caftitulo.jpg" nome="Sorvete de café" />
                <NovidadesProduto imagem="https://abrilmdemulher.files.wordpress.com/2016/09/cafe_gealdo.jpg?quality=90&strip=info&w=654&h=436&crop=1" nome="Café gelado c/ sorvete"/>
                <NovidadesProduto imagem="https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3367-d01af8c93e118ca144e5483d254c930f.jpg" nome="Frapê de café" />
            </div>
        </div>

        <div className="novidades mt-5">

            <h1 className="mb-5 text-center">Livros Novos</h1>

            <div className="d-flex justify-content-around flex-wrap">
                <NovidadesProduto imagem="https://images-na.ssl-images-amazon.com/images/I/614IVg6F1fL.jpg" nome="Nosferatu" />
                <NovidadesProduto imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREqVhLEyMtdaYMdMjIewsS3CI4h1eDk-7c5z-O6Wn5nT7d2w_p" nome="O Instituto" />
                <NovidadesProduto imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtyNFa6X2g53X_ta08XimsE4q0gcoHbR7rIaKP6I7iliZ98_Mw"
  nome="A Ilha do Dr. Moreau"/>
                <NovidadesProduto imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPhDcz5J0qaZjsZjr4AqRGfl8uih7ew2XFHvFs6U3c1wtDp5mv" nome="Hollywood" />
            </div>
        </div>
    </Fragment>