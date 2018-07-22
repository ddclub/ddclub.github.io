import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { RenderRichText } from './../../Prismic/PrismicContent';

class PageParagraphSection extends Component {

    render() {
        let slice = this.props.slice;
        let paragraphText = slice.primary.paragraph_text;
        return (
            <Row>
                <Col>
                    <div>
                        {paragraphText &&
                            <div>
                                {RenderRichText(paragraphText)}
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        );
    }

} export default PageParagraphSection;