import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styled'


export default () => {
    return (
        <Header>
            <div ><h2>Logo</h2></div>
            <nav>
                <ul>
                    <Link to="/home"><p>Home</p></Link>
                    <Link to="/comunidade"><p>Comunidade</p></Link>
                    <Link to="/members"><p>Membros</p></Link>
                </ul>
            </nav>
        </Header >
    )
}