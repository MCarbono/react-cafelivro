import React,{Component,Fragment} from 'react';
import './Produto.css';

export default class Produto extends Component {
   
    render(){
        return(
            <Fragment>
                <div className="produto borda">
                    <img src={this.props.imagem} />
                </div>

                <div className="descricaoProduto borda">
                    <h3 className="text-center">{this.props.titulo}</h3>
                    <hr/>
                    <ul>
                    {this.props.teste.map((teste) => (
                        <li>
                        <strong>{teste}</strong>
                        </li>
                        ))}
                    </ul>
                </div>        
            </Fragment>

        );
    }
}

