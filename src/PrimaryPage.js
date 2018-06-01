import React, { Component } from 'react';
import Butter from 'buttercms';
import { Container } from 'reactstrap';
import ErrorMessage from './ErrorMessage';
const butter = Butter('1ab2db4f14c0c5e4d4f221ca8702b0960f9b6ee8');

class PrimaryPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null
        };
    }

    setContent() {
        let slug = this.props.match.params.slug;
        if (!slug || slug === '') slug = 'home-page';
        butter.page.retrieve('*', slug).then((resp) => {
            this.setState({
                content: resp.data.data
            })
        });
    }

    componentWillMount() {
        this.setContent();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            let slug = this.props.match.params.slug;
            let prevslug = prevProps.match.params.slug;
            if (slug !== prevslug) this.setContent();
            //if(slug !== prevslug) console.log('updated');
        }
    }


    render() {
        if (this.state.content) {
            const primarypage = this.state.content;

            if (primarypage.fields.custom_html) {
                return (
                    <Container>
                        <div dangerouslySetInnerHTML={{ __html: primarypage.fields.custom_html }} />
                    </Container>
                );
            } else {
                return (
                    <div>
                        <div className="pageHeader">
                            <h2 className="text-center">{primarypage.fields.headline}</h2>
                        </div>
                        <div className="pageBody">
                            <Container>
                                <p>{primarypage.fields.page_info}</p>
                            </Container>
                        </div>
                    </div>
                );
            }

        } else {
            return (
                <Container>
                    <ErrorMessage />
                </Container>
            )
        }
    }
}

export default PrimaryPage;