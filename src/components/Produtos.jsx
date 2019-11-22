import React,{Component, Fragment} from 'react';
import './Produtos.css';
import Produto from './Produto';

export default class Produtos extends Component {
    render(){
        return(
            <Fragment>
                <h1 className="text-center mt-5 mb-5">Produtos da Cafeteria</h1> {/*Melhorar titulo depos.*/ }

                <div className="d-flex justify-content-center mb-3">
                    <Produto imagem="https://static1.conquistesuavida.com.br/ingredients/3/54/52/03/@/24702--ingredient_detail_ingredient-2.png" 
                        teste={["Café coado", "Café coado c/ leite", "Expresso", "Expresso c/ leite", "Descafeinado"]}
                        titulo="Cafés" />

                    <Produto imagem="https://www.delonghi.com/Global/recipes/Coffee/cappuccino.png"
                        teste={["Cappuccino Tradicional", "Cappuccino c/ avelã", "Cappuccino c/ nutella", "Cappuccino c/ canela"]} 
                        titulo="Cappuccino" />
                </div>

                <div className="d-flex justify-content-center mb-3">
                    <Produto imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhtCO8QhaTCUphNxsNCsJx68tRP_JTKwP-rpP9Jwciws0UWQfe"
                        teste={["Suco de Frutas naturais","Suco de frutas c/ leite", "Detox"]} titulo="Sucos" />

                    <Produto imagem="http://www.estacaodocrepe.com.br/site/images/site/crepe007.png"
                        teste={["Café gelado c/ Café", "Café gelado tropical", "Irish Coffee"]} titulo="Cafés gelados" />    
                </div>

                <div className="d-flex justify-content-center">
                    <Produto imagem="https://www.delikata.com.br/wp-content/uploads/2013/05/coxinha.png"
                        teste={["Pão de queijo", "Eshihas", "Empadas", "Coxinha", "Pão de batata"]} titulo="Salgados" />

                    <Produto imagem="https://www.subway.com/ns/images/menu/BRA/POR/Site_234x140_550x440_Atum_sub15cm.jpg"
                        teste={["Atum", "Frango", "Peito de peru"]} titulo="Sanduíches naturais" />    
                </div>

            </Fragment>
            
        );
    }
}