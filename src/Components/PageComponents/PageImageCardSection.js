import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ImageCard from './ImageCard';
class PageImageCardSection extends Component {

    render() {
        let slice = this.props.slice;
        let cards = slice.items;
        let cardComponents = [];
        let cardRows = [];

        //console.log(slice);

        cardComponents.push([]);
        cards.forEach(element => {
            let cardComponent = <Col md='4' className="p-4"><ImageCard card={element}/></Col>;
            if(cardComponents[cardComponents.length-1]>=3){
                cardComponents.push([cardComponent]);
            } else {
                cardComponents[cardComponents.length-1].push(cardComponent);
            }
        });

        cardComponents.forEach(cardRow => {
            cardRows.push(
                <Row>
                    {cardRow}
                </Row>
            )
        });



        return (
            <div>
                
                {cardRows}
                    
            </div>
        );
    }
}

export default PageImageCardSection;
