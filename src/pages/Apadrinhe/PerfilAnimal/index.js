import React from 'react'
import PerfilAnimalView from './perfil-animal.view'
import { useHistory } from "react-router-dom";
import './perfil-animal.scss'
const PerfilAnimal = () => {
    const history = useHistory();
    const changeTab = async (index) =>{
        document.addEventListener('click', ({ target: { dataset: { id = '' }}}) => {
            if (id.length > 0) {
                //STAR
                let activeTab = `#star${index}`;
                let star = document.querySelector(activeTab);
                document.querySelectorAll('.star').forEach(t => {t.classList.add('inactive')});
                star.classList.remove('inactive');
                //CONTENT    
                document.querySelectorAll('.tab').forEach(t => {t.classList.add('inactive')});
                document.querySelector(`#${id}`).classList.remove('inactive');
          }
        });
    }
    return <PerfilAnimalView changeTab={changeTab} history={history}/>
}

export default PerfilAnimal
