import React,{Component} from 'react';
import './Receita.css';

export default class Receita extends Component {
    render(){
        return(
            <div className="container d-flex align-items-center flex-column mt-5" >
               <h1 className="mt-5">Receitas com café</h1>

               <div class="irish mt-5">
                   <h2 className="text-center mb-3">Irish Coffee</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgmQ-Mgks-Al4Xyo3wfRGWiDJ0I77K0AyD8fBtjR_31Xojosp6" />

                    <h4 className="mt-3">Ingredientes</h4>
                    <ul className="ml-0">
                        <li>4 xícaras de café, forte e quente</li>
                        <li>Açúcar a gosto</li>
                        <li>1 1/2 xícara de uísque</li>
                        <li>4 colheres (sopa) de creme de leite fresco batido ou em lata</li>
                    </ul>
                   
                    <h4 className="mt-4">Modo de preparo</h4>
                    <ol>
                        <li>Misture o café com o açúcar.</li>
                        <li>Mexa para dissolvê-lo.</li>
                        <li>Junte o uísque.</li>
                        <li>Mexa novamente.</li>
                        <li>Coloque em copos.</li>
                        <li>Acrescente uma colher (sopa) de creme de leite.</li>
                    </ol>

                    <h2 className="text-center mt-5 mb-3">Frapê de Café</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWzkwmiodxzYs7DLVeBrB9jWVM1RZ96cgK2RwZJjAJRFIK9OjR" />

                    <h4 className="mt-3">Ingredientes</h4>
                    <ul>
                        <li>1 lata de leite condensado</li>
                        <li>2 colheres (sopa) de café-solúvel</li>
                        <li>1 forma de gelo</li>
                        <li>4 bolas de sorvete de creme</li>
                        <li>1/2 xícara de água</li>
                        <li>chantilly e café-solúvel para decorar</li>
                    </ul>

                    <h4 className="mt-4">Modo de preparo</h4>
                    <ol>
                        <li>Bata no liquidificador o leite condensado com o café-solúvel, o gelo e 1/2 xícara de água.</li>
                        <li>Coloque as bolas de sorvete em copos altos.</li>
                        <li>Cubra-as com a mistura batida e decore decore com o chantilly e o café-solúvel reservado.</li>
                    </ol>

                    <h2 className="text-center mb-3">Bolo de café e chocolate</h2>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS57-Dxe9kya5nmoELZbUDsvDjIG9FDxBw6ftu07njixtd6RtgM" />

                    <h4 className="mt-3">Ingredientes</h4>
                    <ul>
                        <li>3 ovos</li>
                        <li>9 colheres de farinha de trigo</li>
                        <li>7 colheres de açúcar</li>
                        <li>3 colheres de achocolatado em pó</li>
                        <li>2 colheres bem cheias de margarina (pode ser com sal)</li>
                        <li>1 xícara de chá de café bem forte e doce</li>
                        <li>1 colher bem cheia de fermento em pó</li>
                    </ul>
                    
                    <h4 className="mt-3">Cobertura</h4>
                    <ul>
                        <li>1 ovo</li>
                        <li>4 colheres de achocolatado em pó</li>
                        <li>3 colheres de margarina</li>
                        <li>7 colheres de açúcar</li>
                    </ul>

                    <h4 className="mt-4">Modo de preparo</h4>
                    <ol>
                        <li>Unte uma forma de pudim com bastante manteiga e farinha.</li>
                        <li>Junte todos os ingredientes numa tigela, menos o fermento.</li>
                        <li>Misture bem, depois acrescente o fermento.</li>
                        <li>Leve para assar por aproximadamente 25 minutos.</li>
                        <li>Retire do forno e desenforme ainda quente.</li>
                        <li>Junte os ingredientes da cobertura e misture-os.</li>
                        <li>Depois, derrame sobre o bolo ainda quente.</li>
                    </ol>

                    <h2 className="text-center mt-5 mb-3">Pavê de chocolate com café especial</h2>

                    <img src="https://img.itdg.com.br/tdg/images/recipes/000/115/373/62878/62878_original.jpg?mode=crop&width=710&height=400" />

                    <h4 className="mt-3">Ingredientes</h4>

                    <ul>
                        <li>1 tablete de 200 g de chocolate tipo cobertura picado</li>
                        <li>3 colheres de água</li>
                        <li>2 colheres das de chá de café solúvel</li>
                        <li>4 colheres de sopa de manteiga ou margarina</li>
                        <li>1 xícara de açúcar</li>
                        <li>1 gema</li>
                        <li>1 lata de creme de leite</li>
                        <li>400 g de biscoito maisena</li>
                        <li>1 cálice de conhaque</li>
                        <li>½ xícara de água</li>
                        <li>1 xícara de ameixas pretas sem caroço picadas</li>
                    </ul>

                    <h4 className="mt-4">Modo de preparo</h4>
                    <ol>
                        <li>Misture o chocolate picado a água e o café.</li>
                        <li>Leve ao fogo brando, mexendo até o chocolate derreter e engrossar.</li>
                        <li>Bata a manteiga, a gema e o açúcar até ficar esbranquiçado.</li>
                        <li>Misture com o chocolate.</li>
                        <li>Sem deixar de bater, acrescente o creme de leite aos poucos.</li>
                        <li>Misture o conhaque e a água e umedeça os biscoitos pouco a pouco.</li>
                        <li>Coloque num refratário uma camada de biscoitos, alternando com o creme e as ameixas picadas, sendo a última de biscoito.</li>
                        <li>Reserve um pouco do creme.</li>
                        <li>Gele por 24 horas.</li>
                        <li>Desenforme, cubra com o restante do creme.</li>
                    </ol>
               </div>

               

            </div>
        );
    }
}

    