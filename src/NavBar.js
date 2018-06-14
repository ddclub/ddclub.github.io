import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import { Container } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PrismicSetNav } from './PrismicContent';

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
        PrismicSetNav(this, 'navbar');
    }

    buildNavItem(item) {
        return <LinkContainer to={item.primary.item_link.uid}>
            <NavItem key={item.primary.item_link.uid}>
                <NavLink>{item.primary.item_title}</NavLink>
            </NavItem>
        </LinkContainer>;
    }

    buildDropdown(element) {
        let dropdownItems = [];
        element.items.forEach(item => {

            if (item.sub_item_link.uid && item.sub_item_title) {
                dropdownItems.push(
                    <LinkContainer to={item.sub_item_link.uid}>
                        <DropdownItem key={item.sub_item_link.uid}>
                            <NavLink>{item.sub_item_title}</NavLink>
                        </DropdownItem>
                    </LinkContainer>
                );
            }
        });

        let dropd = <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {element.primary.item_title && element.primary.item_title}
            </DropdownToggle>
            <DropdownMenu right>
                {dropdownItems}
            </DropdownMenu>

        </UncontrolledDropdown>;

        //console.log(dropdownItems);

        return dropd;
    }

    render() {
        let navbarTitle = null;
        let navbarImage = null;
        let navbarItems = null;
        if (this.state.doc && this.state.docs) {
            //console.log(this.state.doc);
            navbarTitle = this.state.doc.data.navbar_title;
            navbarImage = this.state.doc.data.navbar_image.url;
            navbarItems = [];
            //console.log(this.state.docs);

            this.state.docs.forEach(item => {

                if (item.primary.item_link.uid) {
                    //console.log(item.primary.item_link.uid);
                    navbarItems.push(this.buildNavItem(item));
                } else if (item.items && item.items.length > 0) {
                    navbarItems.push(this.buildDropdown(item));
                }
            });
            return (
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand href="#/home">
                            <span>
                                {navbarImage &&
                                    <img width="140" height="70" alt="" src={navbarImage}></img>} {navbarTitle}
                            </span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                {navbarItems}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            );
        }

        return <div></div>;

    }
}

export default NavBar;