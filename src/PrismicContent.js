import Prismic from 'prismic-javascript';
import React from 'react';
import Cookies from 'js-cookie';
import qs from 'qs';
import PrismicConfig from './PrismicConfig';
import { RichText } from 'prismic-reactjs';

//Add your own endpoint here
const apiEndpoint = PrismicConfig.apiEndpoint;
const PREVIEW_EXPIRES = 1 / 48; // 30 minutes

// Link Resolver
export function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type && doc.uid && doc.type === 'page') {
        return '/#/pages/' + doc.uid;
    } else if (doc.uid) {
        return '/#/' + doc.uid;
    }

    // Default to homepage
    return '/#/';
}

export function refreshToolbar(cmp) {
    // Start an experiment if there is one
    const maybeCurrentExperiment = cmp.state.api.currentExperiment();
    if (maybeCurrentExperiment) {
        window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }

    // Launch the prismic.io toolbar
    window.PrismicToolbar.setup(apiEndpoint);
}

export function PrismicStartPreview(cmp) {
    const params = qs.parse(cmp.props.location.search.slice(1));
    //console.log(params);
    Prismic.api(apiEndpoint).then(api => {
        api.previewSession(params.token, (doc => {return '/pages/'+doc.uid}), '/').then((url) => {
            console.log('Preview started');
            Cookies.set(Prismic.previewCookie, params.token, { expires: PREVIEW_EXPIRES });
            cmp.props.history.push(url);
        });
    });
}

export function RenderRichText(txt) {
    return RichText.render(txt, linkResolver);
}

function getRef(api) {
    const previewRef = Cookies.get(Prismic.previewCookie);
    const masterRef = api.refs.find(ref => { return ref.isMasterRef === true }).ref;
    const ref = previewRef || masterRef;
    return ref;
}

export function PrismicSetPage(cmp) {
    let slug = cmp.props.match.params.slug;
    if (!slug || slug === '' || slug === '/') slug = 'home';
    Prismic.api(apiEndpoint).then(api => {
        const ref = getRef(api);
        api.query(Prismic.Predicates.at('my.page.uid', slug), { ref: ref }).then(response => {
            if (response) {
                cmp.setState({
                    doc: response.results[0],
                    api: api
                });
            }
        });
    });
}

//create a 'navigation' content with a slug 'navbar' to use as the main navbar
export function PrismicSetNav(cmp, navslug) {
    let navsluglocation = 'my.navigation.slug';
    Prismic.api(apiEndpoint).then(api => {
        const ref = getRef(api);
        api.query(Prismic.Predicates.at(navsluglocation, navslug), { ref: ref }).then(response => {
            if (response.results[0]) {
                let nav = response.results[0];
                let pages = nav.data.body;
                pages.forEach(item => {
                    if (item.primary.item_link && item.primary.item_link.uid) {
                        item.primary.item_link.uid = '/pages/' + item.primary.item_link.uid; //lets navbar active link work
                    } else if (item.items) {
                        item.items.forEach(subitem => {
                            subitem.sub_item_link.uid = '/pages/' + subitem.sub_item_link.uid;
                        });
                    }
                });
                cmp.setState({ doc: nav, docs: pages, api: api });
            }
        });
    });
}

//create a 'navigation' content with a slug 'footer' to use as the main footer
export function PrismicSetFooter(cmp, footerslug) {
    let footersluglocation = 'my.footer.slug';

    Prismic.api(apiEndpoint).then(api => {
        const ref = getRef(api);
        api.query(Prismic.Predicates.at(footersluglocation, footerslug), { ref: ref }).then(response => {
            if (response.results[0]) {
                cmp.setState({ doc: response.results[0], api: api });
            }
        });
    });
}