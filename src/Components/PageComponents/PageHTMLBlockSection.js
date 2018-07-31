import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { asText } from './../../Prismic/PrismicContent';

class PageHTMLBlockSection extends Component {

    render() {
        let slice = this.props.slice;
        let htmlBlock = asText(slice.primary.html_block);
        //console.log(htmlBlock);
        return (
            <Row>
                <Col>
                    <div>
                        {htmlBlock &&
                            <div dangerouslySetInnerHTML={{__html: htmlBlock}}/>
                        }
                    </div>
                </Col>
            </Row>
        );
    }

} export default PageHTMLBlockSection;