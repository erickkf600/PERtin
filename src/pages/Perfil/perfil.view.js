import React from 'react'
import paw_ribbon from './../../assets/images/paw-ribbon.svg'
import mulher2 from './../../assets/images/mulher2.svg'
import gears from './../../assets/images/gears.svg'
import cao from './../../assets/images/cao.svg'
import { NavLink } from 'react-router-dom'
const PerfilView = () => {
    return (
        <section className="profile-content">
            <div className="image-radio container">
                <div className="image-radio__ellipse image-radio__donator-ellipse">
                    <img src={paw_ribbon} className="image-radio__ellipse-ribbon" alt=""/>
                    <img src={mulher2} className="image-radio__ellipse-image"  alt="" />
                </div>

                <div className="profile-content__body">
                <span className="profile-content__header">
                    <h2 className="content__donator-name">Nome</h2>
                    <NavLink to="/perfil/editar" className="profile-content__header-button">
                        Editar Perfil
                        <img src={gears} alt=""></img>
                    </NavLink>
                </span>
                    <p className="profile-content__body-bio">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                </div>
            </div>
            <section className="divider">
                <div className="container width">
                    <p className="divider-afiliados">Apadrinhados</p>
                    </div>
            </section>

            <section className="profile-content__afiliados-width container">
                <section className="content-profile__animal-description">
                {[1,2,3].map((item, i) => (
                    <NavLink to="#" key={i}>
                        <div className="content-profile__animal-description-card">
                            <span className="content-profile__animal-description-card-body">
                                <div className="content-profile__ellipse">
                                    <img src={cao} className="content-profile__ellipse-image" alt=""/>
                                </div>
                                <span>
                                    <h2 className="content-profile__animal-description-card-title">Nome da ONG</h2>
                                    <p className="content-profile__animal-description-card-subtitle">Localização</p>
                                    <p className="content-profile__animal-description-card-text">
                                    Descrição da ong. exemplo: A Arca Brasil foi criada há 25 anos e tem como objetivo proteger e zelar pelo bem-estar animal. Sua sede está localizada em São Paulo, mas atua em todo território brasileiro.
                                    </p>
                                </span>
                            </span>

                        </div>
                    </NavLink>
                ))}
                </section>
            </section>
        </section>
    )
}

export default PerfilView