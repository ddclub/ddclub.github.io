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
            doc: null,
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
        let navbarTitle = null;
        let navbarImage = null;
        let navItemsMap = null;
        if (this.state.doc && this.state.docs) {
            //console.log(this.state.doc);
            navbarTitle = this.state.doc.data.navbar_title;
            navbarImage = this.state.doc.data.navbar_image.url;
            navItemsMap = this.state.docs.map((item, index) =>
                <LinkContainer to={item.primary.item_link.uid}>
                    <NavItem key={index}>
                        <NavLink><h3>{item.primary.item_title}</h3></NavLink>
                    </NavItem>
                </LinkContainer>
            );
        }

        return (
            <Container>
                <Navbar light expand="md">
                    <NavbarBrand href="/">
                    <span>
                        <img width="140" height="70" src={navbarImage}></img> {navbarTitle}
                    </span>
                    </NavbarBrand>
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