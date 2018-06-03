import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class FooterLinkColumn extends Component {

    render() {
        let slice = this.props.slice;
        let columnHeaderText = slice.primary.column_header_text;
        let items = slice.items;
        let links = [];

        items.forEach(element => {
            let itemTitle = element.column_link_title;
            let itemLink = element.column_link.url;

            links.push(
                <li><a href={itemLink}>{itemTitle}</a></li>
            );
        });

        console.log(slice);

        return (
            <div>
                <h5>{columnHeaderText}</h5>
                <ul>{links}</ul>
            </div>
        );
    }

} export default FooterLinkColumn;