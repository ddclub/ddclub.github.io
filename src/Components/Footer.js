import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PrismicSetFooter } from '../Prismic/PrismicContent';
import FooterLinkColumn from './FooterComponents/FooterLinkColumn';
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            document: null,
            api: null
        };
    }

    componentWillMount() {
        PrismicSetFooter(this, 'footer');
    }

    render() {

        let document = this.state.doc;

        if (document) {
            let columns = document.data.body;
            let columnsComponents = [];

            columns.forEach(element => {

                if (element.primary && element.primary.component_type) {

                    let columnComponentType = element.primary.component_type;
                    let columnContents = null;
                    //console.log(columnComponentType);

                    if (columnComponentType === 'footer_link_column') {
                        columnContents = <FooterLinkColumn slice={element} />;
                    }

                    if (columnContents) {
                        let column = <Col sm="auto">{columnContents}</Col>;
                        columnsComponents.push(column);
                    }
                }
            });

            return (
                <footer className="appFooter border-top shadow-sm">
                    <Container>
                        <Row className="justify-content-center">
                            {columnsComponents}
                            <div data-wio-id={document.id} />
                        </Row>
                    </Container>
                </footer>
            );
        }
        return <div></div>;
    }
}

export default Footer;
