import React, { Component } from 'react';
import { Row } from 'reactstrap';
import BlogPost from './BlogPost';
class PageBlogSection extends Component {

    render() {
        let slice = this.props.slice;
        let posts = slice.items;
        let blogposts = [];

        //console.log(slice);

        posts.forEach(element => {
            let postComponent = <BlogPost post={element}/>
            blogposts.push(postComponent);
        });
    

        return (
            <div>     
                {blogposts}      
            </div>
        );
    }
}

export default PageBlogSection;
