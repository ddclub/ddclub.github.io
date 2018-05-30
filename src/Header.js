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


const butter = Butter('35cf95a781728a107f330a1412ebd437cd5025e1');


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
            this.setState({
                primaryPagesContent: resp.data.data
            })
        });
    }

    render() {
        let primaryPagesCall = this.state.primaryPagesContent;
        let PrimaryPagesNavItems = null;

        if (primaryPagesCall) {
            let startlink = "/pages/";

            primaryPagesCall.forEach(function (obj) { obj.pageLink = startlink.concat(obj.slug); });
            primaryPagesCall.sort(function(a,b){return a.fields.page_id > b.fields.page_id});

            PrimaryPagesNavItems = primaryPagesCall.map((pageItem) =>
                <NavItem key={pageItem.fields.page_id}>
                    <NavLink href={pageItem.pageLink}>{pageItem.fields.headline}</NavLink>
                </NavItem>);
            console.log(PrimaryPagesNavItems);
        }

        return (
            <header>
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand href="/">Double Degree Club</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                {PrimaryPagesNavItems}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }
}

export default Header;
