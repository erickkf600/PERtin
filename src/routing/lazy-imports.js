import React, { Suspense, lazy } from 'react'

export default function LazyLoad(component) {
    const ComponentLoaded = lazy(component)
    return (props) => (
        <Suspense fallback={<p>...Loading</p>}>
            <ComponentLoaded {...props} />
        </Suspense>
    )
}
export const Home = LazyLoad(
    () => import('../pages/Home' /* webpackChunkName: 'Home' */),
)

export const Apadrinhe = LazyLoad(
    () => import('../pages/Apadrinhe' /* webpackChunkName: 'apadrinhe' */),
)

export const Ongs = LazyLoad(
    () => import('../pages/Ongs' /* webpackChunkName: 'ongs' */),
)

export const Perfil = LazyLoad(
    () => import('../pages/Perfil' /* webpackChunkName: 'perfil' */),
)
