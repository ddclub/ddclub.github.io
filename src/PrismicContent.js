import Prismic from 'prismic-javascript';
import PrismicConfig from './PrismicConfig';

//Add your own endpoint here
const apiEndpoint = PrismicConfig.apiEndpoint;

// Link Resolver
export function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === 'page') {
        return '/page/' + doc.uid;
    } else if (doc.type === 'footer') {
        return '/footer/' + doc.uid;
    } else if (doc.type === 'navigation') {
        return '/navigation/' + doc.uid;
    } else if (doc.type === 'blog_post') {
        return '/navigation/' + doc.uid;
    }

    // Default to homepage
    return '/';
}

export function PrismicSetPage(cmp) {
    let slug = cmp.props.match.params.slug;
    if (!slug || slug === '') slug = 'home';
    Prismic.api(apiEndpoint).then(api => {
        api.query(Prismic.Predicates.at('my.page.uid', slug)).then(response => {
            if (response) {
                cmp.setState({ doc: response.results[0] });
            }
        });
    });
}


//create a 'navigation' content with a slug 'navbar' to use as the main navbar
export function PrismicSetNav(cmp, navslug) {
    let navsluglocation = 'my.navigation.slug';
    Prismic.api(apiEndpoint).then(api => {
        api.query(Prismic.Predicates.at(navsluglocation, navslug)).then(response => {
            if (response.results[0]) {
                let nav = response.results[0];
                let pages = nav.data.body;
                pages.forEach(item => {
                    if (item.primary.item_link && item.primary.item_link.uid)
                        item.primary.item_link.uid = '/' + item.primary.item_link.uid; //lets navbar active link work
                });
                cmp.setState({ doc: nav, docs: pages });
            }
        });
    });
}

//create a 'navigation' content with a slug 'footer' to use as the main footer
export function PrismicSetFooter(cmp, footerslug) {
    let footersluglocation = 'my.footer.slug';

    Prismic.api(apiEndpoint).then(api => {
        api.query(Prismic.Predicates.at(footersluglocation, footerslug)).then(response => {
            if (response.results[0]) {
                cmp.setState({ doc: response.results[0] });
            }
        });
    });
}