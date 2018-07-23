import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RenderRichText, asText } from './../../Prismic/PrismicContent';

class PageHeaderSection extends Component {

    render() {
        let slice = this.props.slice;
        let headerText = slice.primary.header_text;
        let pageType = this.props.pageType;
        let order = this.props.order;
        console.log(headerText);

        let headerTag;
        if (pageType === 'home_page') {
            switch (headerText[0].type) {
                case 'heading1':
                    headerTag = <h1 className="home_title">{asText(headerText)}</h1>;
                    break;
                case 'heading2':
                case 'heading3':
                    headerTag = <h1 className="home_subtitle">{asText(headerText)}</h1>;
                    break;
                default:
                    headerTag = RenderRichText(headerText);
            }
        }

        return (
            <Row className="justify-content-center">
                <Col>
                    <div className={"text-center " + pageType}>
                        {headerTag}
                    </div>
                </Col>
            </Row>
        );
    }
} export default PageHeaderSection;