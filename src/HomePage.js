import React, { Component } from 'react';
import Butter from 'buttercms';
import {Container} from 'reactstrap';
import ErrorMessage from './ErrorMessage';
//import { Link } from 'react-router'

const butter = Butter('1ab2db4f14c0c5e4d4f221ca8702b0960f9b6ee8');

class HomePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: null
		};
	}

	componentWillMount() {
		butter.page.retrieve('*', 'home-page').then((resp) => {
			this.setState({
				content: resp.data.data
			})
		});
	}


	render() {
		if (this.state.content) {
			const homepage = this.state.content;

			return (
				<div id="home">
					<Container>
						<h2 className="text-center">{homepage.fields.headline}</h2>
						<p>{homepage.fields.page_info}</p>

					</Container>
				</div>
			);

		} else {
			return (
				<Container>
                    <ErrorMessage/>
				</Container>
			)
		}
	}
}

export default HomePage;