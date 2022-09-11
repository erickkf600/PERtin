import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './perfil.scss'
import PerfilView from './perfil.view'
import EditarPerfil from './EditarPerfil'
const Perfil = () => {
    return (
        <Switch>
            <Route exact path="/perfil">
                <PerfilView />
            </Route>
            <Route exact path="/perfil/editar">
                <EditarPerfil />
            </Route>
        </Switch>
    )
}

export default Perfil
