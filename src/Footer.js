import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null
        };
    }



    componentWillMount() {

    }

    render() {
            return (
                <footer className="footer">
                    <Container>
                        <span className="text-muted">
                        </span>
                    </Container>
                </footer>
            );
        
    }
}

export default Footer;
