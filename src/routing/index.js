import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Header from '../components/Header'
import { Pages } from './pages'
import RouteSwitching from './routes-switching'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {RouteSwitching(Pages)}
                <Redirect from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </BrowserRouter>
    )
}
export default Routing
