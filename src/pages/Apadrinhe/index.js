import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './apadrinhe.scss'
import ApadrinheView from './apadrinhe.view'
import PerfilAnimal from './PerfilAnimal'
const Apadrinhe = () => {
    return (
        <Switch>
            <Route exact path="/apadrinhe">
                <ApadrinheView />
            </Route>
            <Route exact path="/apadrinhe/perfil">
                <PerfilAnimal />
            </Route>
    </Switch>

    )
}

export default Apadrinhe
