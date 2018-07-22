import React, { Component } from 'react';

class HomepageBG extends Component {

    render() {
        let slice = this.props.slice;
        let imgurl = slice.url;
        
        return (
            <div className="justify-content-center">
                <img src={imgurl}></img>
            </div>
        );
    }

} export default HomepageBG;