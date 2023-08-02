import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';
import logo from './logo.png';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <NavLink to="./">
                <img
                    src={logo}
                    alt={"Logo do cinetag"} >

                </img>
            </NavLink>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}
