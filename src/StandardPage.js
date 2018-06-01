import React, { Component } from 'react';
import { Container } from 'reactstrap';

class StandardPage extends Component {

    render() {
        let fields = this.props.fields;
        return (
            <div>
            <div className="pageHeader">
                <h2 className="text-center">{fields.headline}</h2>
            </div>
            <div className="pageBody">
                <Container>
                    <p>{fields.page_info}</p>
                </Container>
            </div>
        </div>
        );
    }

} export default StandardPage;