import React, { Component } from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import { PrismicSetFooter } from './helpers';
import FooterLinkColumn from './FooterLinkColumn';
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
            <Container>     
                
                {cardsComponents}
                    
            </Container>
        );
    }
}

export default PageImageCardSection;
