import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RenderRichText, asText } from './../../Prismic/PrismicContent';

class PageHeaderSection extends Component {

    render() {
        let slice = this.props.slice;
        let headerText = slice.primary.header_text;
        let pageType = this.props.pageType;

        return (
            <Row className="justify-content-center">
                <Col>
                    <div className="text-center">
                        <div className={pageType}>
                            {pageType === 'home_page' &&
                                <h1 className={pageType}>{asText(headerText)}</h1>
                            }
                            {pageType !== 'home_page' &&
                                RenderRichText(headerText)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
} export default PageHeaderSection;