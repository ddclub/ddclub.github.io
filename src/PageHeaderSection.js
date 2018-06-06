import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class PageHeaderSection extends Component {

    render() {
        let slice = this.props.slice;
        let headerText = slice.primary.header_text;

        return (
            <div className="text-center">
                {headerText &&
                <div>
                    {RichText.render(headerText, this.linkResolver)}
                </div>
                }
            </div>
        );
    }

} export default PageHeaderSection;