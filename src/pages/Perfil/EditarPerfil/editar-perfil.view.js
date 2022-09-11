import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import avanco_rapido from './../../../assets/images/avanco-rapido.svg'
import mulher2 from './../../../assets/images/mulher2.svg'
import email from './../../../assets/images/email.svg'
import logout from './../../../assets/images/logout.svg'
const EditarPerfilView = () => {
    const fileInput = useRef()
    return (
        <>
            <NavLink to="/perfil" className="back-button">
                <img src={avanco_rapido} alt="back" />
            </NavLink>
            <section className="profile-content">
                <div className="image-radio container edit-page">
                    <div className="image-radio__ellipse image-radio__donator-ellipse">
                        <img src={mulher2} className="image-radio__ellipse-image" alt=""/>
                        <input type="file" ref={fileInput} hidden accept="image/jpeg, image/png, image/jpg" />
                        <button className="image-radio__ellipse-button" onClick={() => fileInput.current.click()}>Alterar Foto</button>
                    </div>
                    <div className="profile-content__body">
                        <span className="profile-content__header edit-header">
                            <input type="text" name="nome" defaultValue="Nome" />
                        </span>
                        <span className="profile-content__header edit-header">
                            <textarea 
                                rows="" 
                                cols="" 
                                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."></textarea>
                        </span>
                    </div>

                </div>
                <div className="email">
                    <img src={email} alt="" />
                    <input type="email" defaultValue="email@hotmail.com" />
                </div>

                <NavLink to="/perfil" className="logout">
                    <img src={logout} alt="logout" />
                    Sair
                </NavLink>
            </section>
        </>
        
    )
}

export default EditarPerfilView