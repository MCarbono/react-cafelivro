import React from 'react';
import './Newsletter.css';

export default props =>
    <div className="newsletter">
        <p className="ml-3"> Cadastre e receba nossas novidades</p>

        <div class="d-flex flex-row col-md-6 mb-3">
            <input type="email" placeholder="Digite o seu email" class="form-control mr-5" />
            <button type="submit" class="btn btn-outline-secondary">Cadastrar</button>
        </div>
    </div>