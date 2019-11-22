import React,{Component, Fragment} from 'react';
import './Produtos.css';
import Produto from './Produto';

export default class Produtos extends Component {
    render(){
        return(
            <Fragment>
                <h1 className="text-center mt-5 mb-5">Produtos da Cafeteria</h1> {/*Melhorar titulo depos.*/ }

                <div className="d-flex justify-content-center">
                    <Produto imagem="https://static1.conquistesuavida.com.br/ingredients/3/54/52/03/@/24702--ingredient_detail_ingredient-2.png" 
                        teste={["Café coado", "Café coado c/ leite", "Expresso", "Expresso c/ leite", "Descafeinado"]}
                        titulo="Cafés" />

                    <Produto imagem="https://www.delonghi.com/Global/recipes/Coffee/cappuccino.png"
                        teste={["Cappuccino Tradicional", "Cappuccino c/ avelã", "Cappuccino c/ nutella", "Cappuccino c/ canela"]} 
                        titulo="Cappuccino" />
                </div>

                <div className="d-flex justify-content-center">
                    <Produto imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhtCO8QhaTCUphNxsNCsJx68tRP_JTKwP-rpP9Jwciws0UWQfe"
                        teste={["Suco de Frutas naturais", "Detox"]} titulo="Sucos" />
                </div>
            </Fragment>
            
        );
    }
}