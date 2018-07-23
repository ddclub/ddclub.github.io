import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class PageImageSection extends Component {

    render() {
        let slice = this.props.slice;
        //console.log(slice);
        let imgsrc = null;
        let imgdesc = null;
        let imgalt = null;
        let displaytype = null;
        if (slice.primary.image_field.url) imgsrc = slice.primary.image_field.url;
        if (slice.primary.image_description) imgdesc = slice.primary.image_description;
        if (slice.primary.image_alt_text) imgalt = slice.primary.image_alt_text;
        if (slice.primary.display_type) displaytype = slice.primary.display_type;

        let thisimg = <Col md="4"><img src={imgsrc} alt={imgalt} className="img-fluid fit-image"></img></Col>;

        switch (displaytype) {
            case 'xsmall_image':
                thisimg = <Col xs="4" md="2"><img src={imgsrc} alt={imgalt} className="img-fluid fit-image"></img></Col>;
                break;
            case 'small_image':
                thisimg = <Col md="4"><img src={imgsrc} alt={imgalt} className="img-fluid fit-image"></img></Col>;
                break;
            case 'medium_image':
                thisimg = <Col md="8"><img src={imgsrc} alt={imgalt} className="img-fluid fit-image"></img></Col>;
                break;
            case 'large_image':
                thisimg = <Col md="12"><img src={imgsrc} alt={imgalt} className="img-fluid fit-image"></img></Col>;
                break;
            default:
                break;
        }


        return (
            <Row className="justify-content-center">
                {thisimg}
            </Row>
        );
    }

} export default PageImageSection;