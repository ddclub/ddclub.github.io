import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RichText } from 'prismic-reactjs';

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
                <li><small><a className="text-muted" href={itemLink}>{itemTitle}</a></small></li>
            );
        });

        //console.log(slice);

        return (
            <div>
                <h6>{columnHeaderText}</h6>
                <ul className="list-unstyled">{links}</ul>
            </div>
        );
    }

} export default FooterLinkColumn;