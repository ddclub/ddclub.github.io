import React, { Component } from 'react';
import Butter from 'buttercms';
import { Container } from 'reactstrap';
import ErrorPage from './ErrorPage';
import StandardPage from './StandardPage';
import CustomPage from './CustomPage';
const butter = Butter('1ab2db4f14c0c5e4d4f221ca8702b0960f9b6ee8');

class Page extends Component {

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
            const thisPage = this.state.content;
            const fields = thisPage.fields;
            let thisPageType = thisPage.fields.page_type;

            if (thisPageType === 'custom') {
                return (
                    <div>
                        <CustomPage fields={fields}/>
                    </div>
                );
            } else if (thisPageType === 'standard') {
                return (
                    <div>
                        <StandardPage fields={fields}/>
                    </div>
                );
            } else {
                return (
                    <Container>
                        <ErrorPage />
                    </Container>
                );
            }

        } else {
            return (
                <Container>
                    <ErrorPage />
                </Container>
            );
        }
    }
}

export default Page;