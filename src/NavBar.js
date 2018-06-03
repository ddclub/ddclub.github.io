import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Container } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { linkResolver, PrismicSetNav } from './helpers';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            docs: null
        };

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillMount() {
        PrismicSetNav(this);
    }

    render() {

        let navItemsMap = null;
        if (this.state.docs) {
            navItemsMap = this.state.docs.map((item) =>
                <LinkContainer to={item.primary.item_link.uid}>
                    <NavItem key={item.primary.item_link.uid}>
                        <NavLink>{item.primary.item_title}</NavLink>
                    </NavItem>
                </LinkContainer>
            );

        }

        return (
            <Container>
                <Navbar light expand="md">
                    <NavbarBrand href="/">Double Degree Club</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                        {navItemsMap}
                        </Nav>
                    </Collapse>
                </Navbar>                
            </Container>
        )
    }
}

export default NavBar;