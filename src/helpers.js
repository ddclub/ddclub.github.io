import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

const apiEndpoint = 'https://ddsite.prismic.io/api/v2';

// Link Resolver
export function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === 'page') {
        return '/page/' + doc.uid;
    }

    // Default to homepage
    return '/';
}

export function PrismicSetPage(cmp) {
    let slug = cmp.props.match.params.slug;
    if (!slug || slug === '') slug = 'home';
    //console.log(slug);

    Prismic.api(apiEndpoint).then(api => {
        api.query(Prismic.Predicates.at('my.page.uid', slug)).then(response => {
            if (response) {
                cmp.setState({ doc: response.results[0] });
            }
        });
    });
}

export function PrismicSetNav(cmp) {

    Prismic.api(apiEndpoint).then(api => {
        api.getSingle('navbar').then(response => {
            if (response) {
                //console.log(response);
                let pages = response.data.body;
                pages.forEach(item => {
                    if(item.primary.item_link.uid && 
                        item.primary.item_link.uid==='home')
                        item.primary.item_link.uid=''
                });
                cmp.setState({ docs: pages });
            }
        });
    });
}