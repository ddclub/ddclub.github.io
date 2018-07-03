import React from 'react';
import Cookies from 'js-cookie';
import qs from 'qs';
import Prismic from 'prismic-javascript';
import PrismicConfig from './PrismicConfig';
import { linkResolver, refreshToolbar } from './PrismicContent.js';

const PREVIEW_EXPIRES = 1 / 48; // 30 minutes

export default class Preview extends React.Component {

    componentWillMount() {
        const params = qs.parse(this.props.location.search.slice(1));
        //console.log(params);
        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            api.previewSession(params.token, linkResolver, '/').then((url) => {
                console.log('Preview started');
                Cookies.set(Prismic.previewCookie, params.token, { expires: PREVIEW_EXPIRES });
                this.props.history.push(url);
            });
        });
    }

    componentDidUpdate() {
        refreshToolbar(this);
    }

    render() {
        return <p>Loading preview... (you may need to refresh)</p>;
    }
}