import React, { Component } from 'react';
import { Link, RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { linkResolver, PrismicSetPage } from './helpers';
import { Container, Row, Col } from 'reactstrap';

import PageHeaderSection from './PageHeaderSection.js';
import PageParagraphSection from './PageParagraphSection.js';

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

          if (element.primary.component_type === 'header_section') {
            sectionsComponents.push(
              <PageHeaderSection slice={element} />
            );
          } else if (element.primary.component_type === 'paragraph_section') {
            sectionsComponents.push(
              <PageParagraphSection slice={element} />
            );
          }
        }
      });

      return (
        <Container>
          <div>{sectionsComponents}</div>
        </Container>
        
      );
    }
    return <div></div>;
  }
}

export default Page;
