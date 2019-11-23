import React from 'react';
import './Footer.css';

export default props => 
    <footer className="footer d-flex flex-row justify-content-between align-items-center mt-5">

        <div className="ml-5">
            <h5>Localização</h5>
            <p>Av Indaiá, 00, Indaiá, SP, 000000-000</p>
            <p>(00)3265-4569</p>
            <p>carboncoffee@contato.com.br</p>
        </div>
        
        <h5 className="">IFSP@2019</h5>

        <div className="mr-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Hq-bnGVESlv6xZRqqjmK0DarHxSNmIzlLXqdmHYxgF8_CbbW&s" />
            <img src="https://pbs.twimg.com/profile_images/1126625068564402176/VV114FWs_400x400.png" />
            <img src="https://www.maistecnologia.com/wp-content/uploads/2014/04/twitter.png" />
        </div>

    </footer>