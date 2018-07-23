import React, { Component } from 'react';
import { PrismicSetPage, refreshToolbar } from '../Prismic/PrismicContent';
import { Container, Row } from 'reactstrap';
import Helmet from 'react-helmet';
import PrismicConfig from '../Prismic/PrismicConfig';

import PageHeaderSection from './PageComponents/PageHeaderSection';
import PageParagraphSection from './PageComponents/PageParagraphSection';
import PageImageCardSection from './PageComponents/PageImageCardSection';
import PageImageSection from './PageComponents/PageImageSection';
import PageBlogSection from './PageComponents/PageBlogSection';

class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            doc: null,
            api: null
        };
    }

    componentWillMount() {
        PrismicSetPage(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        refreshToolbar(this);
        if (snapshot !== null) {
            let slug = this.props.match.params.slug;
            let prevslug = prevProps.match.params.slug;
            //if( slug !== prevslug) console.log(slug + prevslug);
            if (slug !== prevslug) PrismicSetPage(this);
        }
    }

    render() {
        let document = this.state.doc;
        //console.log(document);

        if (!document || !document.data) return <div></div>;

        let pageType = document.data.page_type;

        if (pageType === null) pageType = 'standard_page';

<<<<<<< HEAD
            let homepageDiv = <div className="homeImgDiv">{homeBgContents}</div>
            homepageBgComponents.push(homeBgContents);
=======
        //check if background image exists
        let pageStyle = {};
        if(document.data.background_image && document.data.background_image.url){
            pageStyle = {
                backgroundImage: `url(${document.data.background_image.url})`,
                backgroundSize: 'cover',
                overflow: 'hidden'
            };
>>>>>>> 87e4532acafee72a50e161169221f36b8593d2fd
        }

        let sections = document.data.body;

        let firstThreeComponents = [];
        let sectionsComponents = [];

        let numComponents = 0;
        sections.forEach(element => {

            if (element.primary && element.primary.component_type) {

                let sectionComponentType = element.primary.component_type;
                let sectionContents = null;

                if (sectionComponentType === 'header_section') {
<<<<<<< HEAD
                    sectionContents = <PageHeaderSection slice={element} pageType={pageType}/>;
                    numComponents ++;
                } else if (sectionComponentType === 'paragraph_section') {
                    sectionContents = <PageParagraphSection slice={element} pageType={pageType}/>;
                    numComponents ++;
                } else if (sectionComponentType === 'image_card_section') {
                    sectionContents = <PageImageCardSection slice={element} pageType={pageType}/>;
                    numComponents ++;
                } else if (sectionComponentType === 'image_section') {
                    sectionContents = <PageImageSection slice={element} pageType={pageType}/>;
                    numComponents ++;
                } else if (sectionComponentType === 'blog_section') {
                    sectionContents = <PageBlogSection slice={element} pageType={pageType}/>;
                    numComponents ++;
=======
                    sectionContents = <PageHeaderSection slice={element} pageType={pageType} />;
                } else if (sectionComponentType === 'paragraph_section') {
                    sectionContents = <PageParagraphSection slice={element} pageType={pageType} />;
                } else if (sectionComponentType === 'image_card_section') {
                    sectionContents = <PageImageCardSection slice={element} pageType={pageType} />;
                } else if (sectionComponentType === 'image_section') {
                    sectionContents = <PageImageSection slice={element} pageType={pageType} />;
                } else if (sectionComponentType === 'blog_section') {
                    sectionContents = <PageBlogSection slice={element} pageType={pageType} />;
>>>>>>> 87e4532acafee72a50e161169221f36b8593d2fd
                }

                if (sectionContents && numComponents > 3) {
                    let sectionDiv = <div className="pageSection">{sectionContents}</div>;
                    sectionsComponents.push(sectionDiv);
                } else {
                    let sectionDiv = <div className="pageSection">{sectionContents}</div>;
                    firstThreeComponents.push(sectionDiv);
                }

            }
        });

        return (
<<<<<<< HEAD
            <div className={pageType}>
                    {homepageBgComponents}
                    <Container className={'pageSections_' + pageType}>
                        <Helmet>
                            <title>{document.data.title && document.data.title + ' - '}{PrismicConfig.siteTitle}</title>
                        </Helmet>
                        {firstThreeComponents}
                        <div className={'content_' + pageType}>
                            {sectionsComponents}
                        </div>
                    </Container>
=======
            <div className={pageType} style={pageStyle}>
                <Container className='pageSections'>
                    <Helmet>
                        <title>{document.data.title && document.data.title + ' - '}{PrismicConfig.siteTitle}</title>
                    </Helmet>
                    <div data-wio-id={document.id}>
                        {sectionsComponents}
                    </div>
                </Container>
>>>>>>> 87e4532acafee72a50e161169221f36b8593d2fd
            </div>
        );
    }

}

export default Page;
