import React, { Component } from 'react';
import NavBar from './NavBar';
import { Container } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <header className="appHeader">
                <Container>
                    <NavBar/>
                </Container>
            </header>
        )
    }
}

export default Header;
