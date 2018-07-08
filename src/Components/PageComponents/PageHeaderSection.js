import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RenderRichText } from './../../Prismic/PrismicContent';

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
                                {RenderRichText(headerText)}
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        );
    }

} export default PageHeaderSection;