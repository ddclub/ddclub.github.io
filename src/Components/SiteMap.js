import React from 'react';

import { PrismicDocLink, PrismicWebLink, PrismicGetPages, refreshToolbar } from '../Prismic/PrismicContent';

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
        if (!documents) return <div></div>;

        let links = [];
        documents.forEach(doc => {
            if(doc.uid && doc.data.title){
                let link = <p><a href={'/#/pages/'+doc.uid}>{doc.data.title}</a></p>;
                links.push(link);
            }
        });

        return (
            <div className='site-map'>
                {links}
            </div>
        );
    }
}