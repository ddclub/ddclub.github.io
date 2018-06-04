import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class ImageCard extends Component {

    render() {

        let card = this.props.card;
        console.log(card);

        return (
            <Row className="justify-content-center">
                <Col sm="12" md="6">
                    <Card>
                        {card.card_image.url && <CardImg top width="100%" src={card.card_image.url} alt={card.card_title} />}
                        <CardBody>
                            {card.card_title && <CardTitle>{card.card_title}</CardTitle>}
                            {card.card_subtitle && <CardSubtitle className="text-muted mb-2">{card.card_subtitle}</CardSubtitle>}
                            {card.card_text && <CardText>{RichText.render(card.card_text, this.linkResolver)}</CardText>}
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        );
    }

} export default ImageCard;