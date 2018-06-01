import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class HomePage extends Component {

    render() {
        let fields = this.props.fields;
        return (
            <div>
                <div className="pageHeader">
                    <h2 className="text-center">{fields.headline}</h2>
                </div>
                <div className="pageBody">
                    <Container>
                        <Row>
                            <div>
                                <p>{fields.page_info}</p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

} export default HomePage;