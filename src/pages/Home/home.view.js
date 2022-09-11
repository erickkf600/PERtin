import React from 'react'
import { NavLink } from 'react-router-dom'
import cao from './../../assets/images/cao.svg';
const HomeView = () => {
    return (
        <section className="container">
            <h1 className="page-title">Feed</h1>
            <div className="content">
                <section className="content__animal-description">
                {[1,2,3].map((item, i) => (
                    <div className="posts" key={i}>
                            <NavLink to="/apadrinhe/perfil">
                                <div className="posts__head">
                                    <div className="profile">
                                        <img src={cao} className="profile-image" alt=""/>
                                    </div>
                                    <p className="posts__head-name">Nome do Animal</p>
                                </div>
                            </NavLink>
                            <div className="posts__body"></div>
                            <p className="posts__footer-text">29 de setembro de 2020 ás 01:31</p>
                        </div>
                ))}
                </section>
            </div>
        </section>
    )
}

export default HomeView