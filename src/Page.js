import React, { Component } from 'react';
import { PrismicSetPage } from './PrismicContent';
import { Container, Row, Col } from 'reactstrap';

import PageHeaderSection from './PageHeaderSection.js';
import PageParagraphSection from './PageParagraphSection.js';
import PageImageCardSection from './PageImageCardSection';
import PageImageSection from './PageImageSection';

class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            doc: null
        };
    }

    componentWillMount() {
        PrismicSetPage(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            let slug = this.props.match.params.slug;
            let prevslug = prevProps.match.params.slug;
            //if( slug !== prevslug) console.log(slug + prevslug);
            if (slug !== prevslug) PrismicSetPage(this);
        }
    }

    render() {
        let document = this.state.doc;

        if (document) {
            let sections = document.data.body;
            let sectionsComponents = [];

            sections.forEach(element => {

                if (element.primary && element.primary.component_type) {

                    let sectionComponentType = element.primary.component_type;
                    let sectionContents = null;

                    if (sectionComponentType === 'header_section') {
                        sectionContents = <PageHeaderSection slice={element} />;
                    } else if (sectionComponentType === 'paragraph_section') {
                        sectionContents = <PageParagraphSection slice={element} />;
                    } else if (sectionComponentType === 'image_card_section') {
                        sectionContents = <PageImageCardSection slice={element} />;
                    } else if (sectionComponentType === 'image_section') {
                        sectionContents = <PageImageSection slice={element} />;
                    }

                    if (sectionContents) {
                        let sectionDiv = <div className="pageSection">{sectionContents}</div>;
                        sectionsComponents.push(sectionDiv);
                    }

                }
            });

            return (
                <Container className="pageSections">
                    {sectionsComponents}
                </Container>

            );
        }
        return <div></div>;
    }
}

export default Page;
