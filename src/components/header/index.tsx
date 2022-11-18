import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Nav, Img } from './styled'


export default () => {
    return (
        <Header>
            <Img />
            <Nav>
                <ul>
                    <Link to="/home"><p>Home</p></Link>
                    <Link to="/comunidade"><p>Comunidade</p></Link>
                    <Link to="/members"><p>Membros</p></Link>
                </ul>
            </Nav>
        </Header >
    )
}