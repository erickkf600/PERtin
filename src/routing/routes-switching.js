import React from 'react'
import { Route } from 'react-router-dom'

const RouteSwitching = (routes) => {
    return routes.map((r, i) => {
        return <Route path={r.path} component={r.component} key={i} />
    })
}

export default RouteSwitching
