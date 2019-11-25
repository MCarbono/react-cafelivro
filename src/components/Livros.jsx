import React,{Component, Fragment} from 'react';
import './Livros.css';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/livros';

const initialState = {
    livro: {nome: '', autor: '', paginas: '', editora: '', genero: '', formato: '', preco: '', url: ''},
    list: []
}

export default class Livros extends Component {

    state = {...initialState};

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    save(){
        const livro = this.state.livro;
        const method = livro.id ? 'put' : 'post';
        const url = livro.id ? `${baseUrl}/${livro.id}` : baseUrl;
        axios[method](url, livro)
        .then(resp => {
            const list = this.getUpdateList(resp.data);
            this.setState({livro: initialState.livro, list})
        })
    }

    getUpdateList(livro, add = true){
        const list = this.state.list.filter(u => u.id !== livro.id)
        if(add) list.unshift(livro);
        return list
    }

    updateField(event){
        const livro = {...this.state.livro};
        livro[event.target.name] = event.target.value
        this.setState({livro})
    }

    renderForm(){
        return(
            <form className="container formulario">

                <div className="form-row">
                    <div classname="col-md-4">
                        <div className="form-group">
                            <input type="text" placeholder="Nome do livro" class="form-control" name="nome" 
                            value={this.state.livro.nome} onChange={e => this.updateField(e)}/>
                        
                        </div>
                    </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" placeholder="Autor" class="form-control" name="autor" 
                                    value={this.state.livro.autor} onChange={e => this.updateField(e)}/>
                                </div>
                            </div>

                            
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" placeholder="Páginas" class="form-control" name="paginas" 
                                    value={this.state.livro.paginas} onChange={e => this.updateField(e)}/>
                                </div>
                            </div>    
                </div>

              
                <div className="row">
                    <div classname="col-md-4">
                        <div className="form-group">
                            <input type="text" placeholder="Editora" class="form-control" name="editora" 
                            value={this.state.livro.editora} onChange={e => this.updateField(e)}/>

                
                        </div>
                    </div>
                
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" placeholder="genero" class="form-control" name="genero" 
                            value={this.state.livro.genero} onChange={e => this.updateField(e)}/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" placeholder="Formato" class="form-control" name="formato" 
                            value={this.state.livro.formato} onChange={e => this.updateField(e)}/>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div classname="col-md-6">
                        <div className="form-group">
                            <input type="text" placeholder="Preço" class="form-control" name="preco" 
                            value={this.state.livro.preco} onChange={e => this.updateField(e)}/>
                         </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" placeholder="url da imagem" class="form-control" name="url" 
                            value={this.state.livro.url} onChange={e => this.updateField(e)}/>
                        </div>
                    </div>        
                </div>

                <button className="btn btn-primary mr-2" onClick={e => this.save(e)}>
                    Salvar
                </button>
            </form>

        );
    }

    load(livro){
        this.setState({livro})
    }

    renderCard(){
        
        return this.state.list.map(livro => {
           return(

                <div class="card-livro mb-3 mr-3">
                    <div class="row no-gutters">
                        <div class="col-md-4 imagem-livro">
                            <img src={livro.url} class="card-img" alt="" />
                        </div>
                        <div class="col-md-8 dados-receita">
                            <div class="card-body conteudo-livro">
                                <h2 class="card-title text-center">{livro.nome}</h2>
                                <hr />
                                
                                <ul class="lista">
                                    <li><strong>Autor: </strong>{livro.autor}</li>
                                    <li><strong>Páginas: </strong>{livro.paginas}</li>
                                    <li><strong>Editora: </strong>{livro.editora}</li>
                                    <li><strong>Gênero: </strong>{livro.genero}</li>
                                    <li><strong>Formato: </strong>{livro.formato}</li>
                                    <li><strong>Preço: </strong>R$ {livro.preco}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           );
       })
    }

    render(){
        return(
            <Fragment>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.renderCard()}
                </div>

                {this.renderForm()}
            </Fragment>
        );
    }
}
