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
                            {pageType === 'home_page' && asText(headerText) === 'Double Degree Club' &&
                                <h1 className="home_title">{asText(headerText)}</h1>
                            }
                            {pageType === 'home_page' && asText(headerText) === 'University of Waterloo' &&
                                <h1 className="home_subtitle">{asText(headerText)}</h1>
                            }
                            {pageType === 'home_page' && asText(headerText) === 'Wilfrid Laurier University' &&
                                <h1 className="home_subtitle">{asText(headerText)}</h1>
                            }
                            {pageType === 'home_page' && asText(headerText) === 'Upcoming Events' &&
                                <h1>{asText(headerText)}</h1>
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