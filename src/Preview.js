import React from 'react';

import Prismic from 'prismic-javascript';
import PrismicConfig from './PrismicConfig';
import { PrismicStartPreview, refreshToolbar } from './PrismicContent.js';

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