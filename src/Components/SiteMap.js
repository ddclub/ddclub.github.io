import React from 'react';

import { PrismicDocLink, PrismicGetPages, refreshToolbar } from '../Prismic/PrismicContent';

export default class Preview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            docs: null,
            api: null
        };
    }

    componentWillMount() {
        PrismicGetPages(this);
    }

    componentDidUpdate() {
        refreshToolbar(this);
    }

    render() {
        let documents = this.state.docs;
        console.log(documents);
        if (!documents) return <div></div>;

        let links = [];
        documents.forEach(doc => {

            //let doclink = PrismicDocLink(doc);
            //if(doclink)
             //   links.push(doclink);
        });

        return (
            <div className='site-map'>
                {links}
            </div>
        );
    }
}