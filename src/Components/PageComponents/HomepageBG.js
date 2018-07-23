import React, { Component } from 'react';

class HomepageBG extends Component {

    render() {
        let slice = this.props.slice;
        let imgurl = slice.url;
        
        return (
                <img src={imgurl} className="homeImg"></img>
        );
    }

} export default HomepageBG;