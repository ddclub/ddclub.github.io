import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <Container>
                    <span className="text-muted">Place sticky footer content here.</span>
                </Container>
            </footer>
        )
    }
}

export default Footer;
