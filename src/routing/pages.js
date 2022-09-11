import casa from '../assets/images/casa.svg'
import mulher from '../assets/images/mulher.svg'
import pata from '../assets/images/pata.svg'
import ongs from '../assets/images/house.svg'
import { Apadrinhe, Ongs, Perfil, Home } from './lazy-imports'

export const Pages = [
    {
        path: '/home',
        name: 'Home',
        icon: casa,
        component: Home,
    },
    {
        path: '/apadrinhe',
        name: 'Apadrinhe',
        icon: pata,
        component: Apadrinhe,
    },
    {
        path: '/ongs',
        name: 'Ongs',
        icon: ongs,
        component: Ongs,
    },
    {
        path: '/perfil',
        name: 'Perfil',
        icon: mulher,
        component: Perfil,
    }
]
