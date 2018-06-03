import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class PageParagraphSection extends Component {

    render() {
        let slice = this.props.slice;
        let paragraphHeaderText = slice.primary.paragraph_header_text;
        let paragraphText = slice.primary.paragraph_text;

        if(!paragraphHeaderText);
        if(!paragraphText);
    
        return (
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
        );
    }

} export default PageParagraphSection;