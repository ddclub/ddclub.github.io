import React, { Component } from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import ImageCard from './ImageCard';
class PageImageCardSection extends Component {

    render() {
        let slice = this.props.slice;
        let cards = slice.items;
        let cardsComponents = [];

        //console.log(slice);

        cards.forEach(element => {

            let cardComponent = <ImageCard card={element}/>
            cardsComponents.push(cardComponent);
            
        });
    

        return (
            <CardColumns>     
                
                {cardsComponents}
                    
            </CardColumns>
        );
    }
}

export default PageImageCardSection;
