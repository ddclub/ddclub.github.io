import React, { Component } from 'react';
import { Container } from 'reactstrap';

class CustomPage extends Component {

    render() {
        let fields = this.props.fields;
        return (
            <div>
            <div className="pageHeader">
                <h2 className="text-center">{fields.headline}</h2>
            </div>
            <div className="pageBody">
                <Container>
                    <div dangerouslySetInnerHTML={{ __html: fields.custom_html }} />
                </Container>
            </div>
        </div>
        );
    }

} export default CustomPage;