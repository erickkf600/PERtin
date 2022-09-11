import React from 'react'
import { NavLink } from 'react-router-dom'
import avanco_rapido from './../../../assets/images/avanco-rapido.svg'
import cao from './../../../assets/images/cao.svg'
import star from './../../../assets/images/star.svg'
import apadrinhar from './../../../assets/images/apadrinhar.svg'
const PerfilAnimalView = (prop) => {
    return (
        <>
            <button onClick={() => prop.history.goBack()} className="back-button">
                <img src={avanco_rapido} alt="back" />
            </button>

            <section>
                <div>
                    <div className="image-radio container">
                        <div className="image-radio__ellipse image-radio__donator-ellipse">
                            <img src={cao} className="image-radio__ellipse-image" alt=""/>
                        </div>
                        <div className="profile-content__body">
                            <h2 className="content__animal-description-card-title">Nome do animal</h2>
                            <p className="content__animal-description-card-subtitle">Nome da ong que ele vive, cidade, estado</p>
                            <p className="content__animal-description-card-text">
                            O olavinho é um cachorro quieto porém nervoso. prefere brincar com papelão mas também gosta de
                            brinquedos vermelhos. gosta de petiscos de frango.
                            </p>
                        </div>
                    </div>

                    <section className="divider">
                        <div className="container width" id="tabs">
                            <button className="divider-afiliados" data-id="tab1" onClick={() => prop.changeTab(1)}>
                            Publicações <img src={star} id="star1" className="divider-star star" alt=""/>
                            </button>
                            <button className="divider-afiliados" data-id="tab2" onClick={() => prop.changeTab(2)}>
                            Cuidados <img src={star} id="star2" className="divider-star star inactive" alt=""/>
                            </button>
                            <button className="divider-afiliados" data-id="tab3" onClick={() => prop.changeTab(3)}>
                            Apadrinhar <img src={star} id="star3" className="divider-star star inactive" alt=""/>
                            </button>
                        </div>
                    </section>
                </div>

                <section className=" container tab" id="tab1">
                    <div className="animal-list">
                        <div className="animal-posts">
                            <div className="animal-posts__body"></div>
                            <p className="animal-posts__footer-text">29 de setembro de 2020 ás 01:31</p>
                        </div>
                        <div className="animal-posts">
                            <div className="animal-posts__body"></div>
                            <p className="animal-posts__footer-text">29 de setembro de 2020 ás 01:31</p>
                        </div>
                        <div className="animal-posts">
                            <div className="animal-posts__body"></div>
                            <p className="animal-posts__footer-text">29 de setembro de 2020 ás 01:31</p>
                        </div>
                    </div>
                </section>
                
                <section className="inactive tab" id="tab2">
                    <div className="animal-list care">
                        <div className="care__list">
                            <p className="care__list-title">Lista mensal</p>

                            <button className="care__list-button">3kg de ração</button>
                            <button className="care__list-button">250ml de shampoo</button>
                            <button className="care__list-button">250ml de shampoo</button>
                        </div>
                        <div className="care__buy-list">
                            <p className="care__list-title">Comprar lista</p>
                            <span className="care__buy-list-logos">
                                <img className="care__buy-list-logos-store" src="https://logodownload.org/wp-content/uploads/2019/10/americanas-logo.png" alt="" />
                            </span>
                        </div>
                    </div>

                </section>
            </section>

            <section className="container tab inactive" id="tab3">
            <div className="apadrinhar">
                <b className="apadrinhar__text">Digite sua senha para confirmar:</b>
                <input type="password" className="apadrinhar__input" placeholder="************" />   
                <button className="apadrinhar__button">Quero apadrinhar 
                    <img src={apadrinhar} alt="" />
                </button>
            </div>
        </section>
        </>
        
    )
}

export default PerfilAnimalView