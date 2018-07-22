import React from 'react';

import { PrismicStartPreview, refreshToolbar } from '../Prismic/PrismicContent';

export default class Preview extends React.Component {

    componentWillMount() {
        PrismicStartPreview(this);
    }

    componentDidUpdate() {
        refreshToolbar(this);
    }

    render() {
        return <p>Loading preview... (you may need to refresh)</p>;
    }
}