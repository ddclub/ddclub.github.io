import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RichText } from 'prismic-reactjs';

class PageHeaderSection extends Component {

    render() {
        let slice = this.props.slice;
        let headerText = slice.primary.header_text;

        return (
            <Row className="justify-content-center">
                <Col>
                    <div className="text-center">
                        {headerText &&
                            <div>
                                {RichText.render(headerText, this.linkResolver)}
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        );
    }

} export default PageHeaderSection;