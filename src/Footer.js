import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Butter from 'buttercms';
const butter = Butter('1ab2db4f14c0c5e4d4f221ca8702b0960f9b6ee8');

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null
        };
    }

    setContent() {
        let pageName = "footer-page";
        butter.page.retrieve('*', pageName).then((resp) => {
            //console.log(resp);
            this.setState({
                content: resp.data.data
            })
        });
    }

    componentWillMount() {
        this.setContent();
    }

    render() {
        if (this.state.content) {
            let footercontent = this.state.content;
            return (
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col xs="12" sm="12" md="4">
                            </Col>
                            <Col xs="12" sm="12" md="4">
                            </Col>
                            <Col xs="12" sm="12" md="4">
                            <div>
                                <span>
                                    Made with <img className="butter-img" src={footercontent.fields.buttercms_image} alt=""></img> ButterCMS
                                </span>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            );
        } else {
            return (
                <footer className="footer">
                    <Container>
                        <span className="text-muted">
                        </span>
                    </Container>
                </footer>
            );
        }
    }
}

export default Footer;
