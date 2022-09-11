import React from 'react'
import { NavLink } from 'react-router-dom'
import cao from './../../assets/images/cao.svg'
const ApadrinheView = () => {
    return (
        <section className="container">
            <h1 className="page-title">Apadrinhados</h1>
            <div className="content">
                <section className="content__animal-description">
                {[1,2,3].map((item, i) => (
                    <NavLink to="/apadrinhe/perfil" key={i}>
                        <div className="content__animal-description-card">
                            <span className="content__animal-description-card-body">
                                <div className="content__ellipse">
                                    <img src={cao} className="content__ellipse-image" alt=""/>
                                </div>
                                <span>
                                    <h2 className="content__animal-description-card-title">Nome do animal</h2>
                                    <p className="content__animal-description-card-subtitle">Nome da ong que ele vive cidade, estado</p>
                                    <p className="content__animal-description-card-text">
                                        Descrição do animal. exemplo: O olavinho é um cachorro quieto porém nervoso. prefere brincar com papelão mas também gosta de brinquedos vermelhos. gosta de petiscos de frango.
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

export default ApadrinheView