import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RichText } from 'prismic-reactjs';

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
                                {RichText.render(paragraphHeaderText, this.linkResolver)}
                            </div>
                        }
                        {paragraphText &&
                            <div>
                                {RichText.render(paragraphText, this.linkResolver)}
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        );
    }

} export default PageParagraphSection;