import React,{Component, Fragment} from 'react';
import Acessorio from './Acessorio';
import './Acessorios.css';

export default class Acessorios extends Component {
    render(){
        return(
            <div className="teste">
                <h1 className="text-center mt-5 mb-5">Cafeteiras</h1>

                <div className="d-flex flex-row justify-content-around">
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0RtQOrNDO86BQZrdiRKC4maoeubQtpe5ElldHP0ZZuycgQ-pA" nome="Cafeteira Francesa" preco="R$ 180,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-pbSloW5WZdENRtAMgETTdL-qDcKPknE4NNDJD7q-0ffqyJb8" nome="Cafeteira Italiana" preco="R$ 150,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRswyjN3OmaNWO6oFzKbtX1bkommpVirUqqNvHUrSXgnjtNA_V-" nome="Cafeteira Turca" preco="R$ 80,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa7LOj3kL4Sg1kjMvYFWCXKcgKaec74TLBCEOQ2_wwEZGeO5U_" nome="Cafeteira Elétrica" preco="R$ 200,00" />
                </div>

                <h1 className="text-center mt-5 mb-5">Coadores</h1>

                <div className="d-flex flex-row justify-content-around">
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV4ieDsYoeGEx_4lNjtt-s9fncVbaT2l191bUoEN8VQh5jZV2w" nome="Coador de plástico" preco="R$ 10,00"/>
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1wG39LeUEMDnaPgsmeCcZEVFbRJNNySXLmQWFxKvZ56UteGqv" nome="Coador de pano" preco="R$ 90,00" />
                    <Acessorio imagem="https://cdn.awsli.com.br/1000x1000/19/19830/produto/41224744/21cd695891.jpg" nome="Coador de aço" preco="R$ 100,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs5HQUP-U76CrdkFvi3cHCKPxNUrAcrFU5mjlC85MZvmSjmb1b" nome="Coador Clever" preco="R$ 150,00" />
                </div>

                <h1 className="text-center mt-5 mb-5">Utensílios</h1>

                <div className="d-flex flex-row justify-content-around">
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThDdF1jAeSaCpEjNg3TWDIGRo62hgxGdIk0BwreXm5d9O6egKr" nome="Espumador de leite" preco="R$ 70,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSwJjQflb4i9bRoUbAHmj2E5XB3e5Gw7fxNzFR-g0djLENTG2v" nome="Moedor de café manual" preco="R$ 200,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO3SauCsNg5jbzdq2kGGgTdT9ZyCmQx3DuGaKDirGt-Tpv7KeD" nome="Caneca preta" preco="R$ 18,00" />
                    <Acessorio imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZK0vv_hyQ2KJ2iMMAihvqGdI_wa4t-Wi3daxR2vUPXQFZY9xi" nome="Chaleira de aço" preco="R$ 59,90" />
                </div>
            </div>
            
        );
    }
}