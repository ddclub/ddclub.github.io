import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { RenderRichText } from './PrismicContent';

class PageParagraphSection extends Component {

    render() {
        let slice = this.props.slice;
        let paragraphHeaderText = slice.primary.paragraph_header_text;
        let paragraphText = slice.primary.paragraph_text;

        if (!paragraphHeaderText);
        if (!paragraphText);

        return (
            <Row>
                <Col>
                    <div>
                        {paragraphHeaderText &&
                            <div>
                                {RenderRichText(paragraphHeaderText)}
                            </div>
                        }
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