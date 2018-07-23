import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { RenderRichText } from './../../Prismic/PrismicContent';

class ImageCard extends Component {

    render() {
        let card = this.props.card;
        return (
            <Card>      
                    {card.card_image.url && <CardImg top width="100%" src={card.card_image.url} alt={card.card_title} />}
                    <CardBody>
                        {card.card_title && <CardTitle>{card.card_title}</CardTitle>}
                        {card.card_subtitle && <CardSubtitle className="text-muted mb-2">{card.card_subtitle}</CardSubtitle>}
                        {card.card_text && <div>{RenderRichText(card.card_text)}</div>}
                    </CardBody>    
            </Card>
        );
    }

} export default ImageCard;