import React,{Component} from 'react';
import './Contato.css';

export default class Contato extends Component {
    render(){
        return(
            <div className="d-flex flex-column align-items-center">
                <h1>Fale Conosco</h1> 
                <h4>Envie uma mensagem para nós</h4>
                
                <div className="input-group col-sm-4 mt-2">
                    <input type="text" name="nome" class="form-control" placeholder="Digite o nome" />
                </div>

                <div className="input-group col-sm-4 mt-4">
                    <input type="text" name="email" class="form-control" placeholder="Digite o email" />
                </div>
                
                <div className="input-group col-sm-4 mt-4">
                    <textarea rows="5" cols="33" class="form-control" placeholder="Digite a sua mensagem"></textarea>
                </div>

                <div className="mt-4">
                    <button class="btn btn-dark">Enviar</button>
                </div>
                
            </div>
        );
    }
}