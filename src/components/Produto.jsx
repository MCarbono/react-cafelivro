import React,{Component,Fragment} from 'react';
import './Produto.css';

export default class Produto extends Component {
   
    render(){
        return(
            <Fragment>
                <div className="produto">
                    <img src={this.props.imagem} />
                </div>

                <div className="descricaoProduto">
                    <h3 className="text-center">{this.props.titulo}</h3>
                    <ul>
                    {this.props.teste.map((teste) => (
                        <li>
                            {teste}
                        </li>
                        ))}
                    </ul>
                </div>        
            </Fragment>

        );
    }
}

