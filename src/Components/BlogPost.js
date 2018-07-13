import React, { Component } from 'react';
import { } from 'reactstrap';
import { } from './../../Prismic/PrismicContent';

class BlogPost extends Component {

    render() {
        let post = this.props.post;
        return (
            <div>
                <p>post.title</p>
            </div>
        );
    }

} export default BlogPost;