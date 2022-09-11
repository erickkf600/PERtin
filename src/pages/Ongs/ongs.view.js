import React from 'react'
import { NavLink } from 'react-router-dom'
import house from './../../assets/images/house.svg'
import paw_ribbon from './../../assets/images/paw-ribbon.svg'
import mulher2 from './../../assets/images/mulher2.svg'
const OngsView = () => {
    return (
        <section className="container">
            <h1 className="page-title">ONGs</h1>
            <div className="content">
                <section className="content__animal-description">
                {[1,2,3].map((item, i) => (
                    <NavLink to="#" key={i}>
                        <div className="content__animal-description-card">
                            <span className="content__animal-description-card-body">
                                <div className="content__ellipse">
                                    <img src={house} className="content__ellipse-image" />
                                </div>
                                <span>
                                    <h2 className="content__animal-description-card-title">Nome da ONG</h2>
                                    <p className="content__animal-description-card-subtitle">Localização</p>
                                    <p className="content__animal-description-card-text">
                                    Descrição da ong. exemplo: A Arca Brasil foi criada há 25 anos e tem como objetivo proteger e zelar pelo bem-estar animal. Sua sede está localizada em São Paulo, mas atua em todo território brasileiro.
                                    </p>
                                </span>
                            </span>

                        </div>
                    </NavLink>
                ))}
                </section>
            </div>
        </section>
    )
}

export default OngsView