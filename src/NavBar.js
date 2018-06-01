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
import Butter from 'buttercms';
import { LinkContainer } from 'react-router-bootstrap';

const butter = Butter('1ab2db4f14c0c5e4d4f221ca8702b0960f9b6ee8');

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            primaryPagesContent: null
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillMount() {
        butter.page.list('primary_page').then((resp) => {
            let primaryPagesCall = resp.data.data;
            let startlink = "/";
            primaryPagesCall.forEach(function (obj) { obj.pageLink = startlink.concat(obj.slug); });
            primaryPagesCall.sort(function (a, b) { return a.fields.page_id > b.fields.page_id });

            this.setState({
                primaryPagesContent: primaryPagesCall
            })
        });
    }

    render() {
        let PrimaryPagesNavItems = null;
        if (this.state.primaryPagesContent) {
            PrimaryPagesNavItems = this.state.primaryPagesContent.map((pageItem) =>
                <LinkContainer to={pageItem.pageLink}>
                    <NavItem key={pageItem.fields.page_id}>
                        <NavLink>{pageItem.fields.nav_name}</NavLink>
                    </NavItem>
                </LinkContainer>);
        }

        return (
            <Container>
                <Navbar light expand="md">
                    <NavbarBrand href="/">Double Degree Club</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {PrimaryPagesNavItems}
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default Header;