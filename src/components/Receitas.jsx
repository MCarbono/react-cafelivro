import React from 'react';
import Receita from './Receita';

export default props =>
    <div>
        <Receita title="Irish Coffee" ingredientes={["4 xícaras de café, forte e quente","Açúcar a gosto","1 1/2 xícara de uísque","4 colheres (sopa) de creme de leite fresco batido ou em lata"]}
            preparo={["Misture o café com o açúcar","Mexa para dissolvê-lo","Junte o uísque","Mexa novamente", "Coloque em copos", "Acrescente uma colher (sopa) de creme de leite"]}
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgmQ-Mgks-Al4Xyo3wfRGWiDJ0I77K0AyD8fBtjR_31Xojosp6" />

        <Receita title="Frapê de Café" imagem="http://blog.clubecafe.net.br/wp-content/uploads/2014/10/frape_de_cafe.jpg" 
            ingredientes={["1 lata de leite condensado", "2 colheres (sopa) de café-solúvel", "1 forma de gelo", "4 bolas de sorvete de creme", "1/2 xícara de água", "chantilly e café-solúvel para decorar"]}   
            preparo={["Bata no liquidificador o leite condensado com o café-solúvel, o gelo e 1/2 xícara de água","Coloque as bolas de sorvete em copos altos","Cubra-as com a mistura batida e decore decore com o chantilly e o café-solúvel reservado"]}/>

        <Receita title="Pavê de chocolate com café especial" imagem="https://www.checucino.it/wp-content/uploads/2016/05/-81A6A238EF44A3256D56DFA1880239E4349131284BCF360392-pimgpsh_fullsize_distr.jpg" 
            ingredientes={["1 tablete de 200 g de chocolate tipo cobertura picado", "3 colheres de água", "2 colheres das de chá de café solúvel", "4 colheres de sopa de manteiga ou margarina", "1 xícara de açúcar", "1 gema", "1 lata de creme de leite",
            "400 g de biscoito maisena", "1 cálice de conhaque", "½ xícara de água", "1 xícara de ameixas pretas sem caroço picadas"]} 
            preparo={["Misture o chocolate picado a água e o café", "Leve ao fogo brando, mexendo até o chocolate derreter e engrossar", "Bata a manteiga, a gema e o açúcar até ficar esbranquiçado", "Misture com o chocolate", 
            "Sem deixar de bater, acrescente o creme de leite aos poucos", "Misture o conhaque e a água e umedeça os biscoitos pouco a pouco", "Coloque num refratário uma camada de biscoitos, alternando com o creme e as ameixas picadas, sendo a última de biscoito", 
            "Reserve um pouco do creme", "Gele por 24 horas", "Desenforme, cubra com o restante do creme"]}/>
    </div>