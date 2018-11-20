import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
Button } from "mdbreact";

class MultiCarouselPage extends Component {
  render() {
    return (
      <div className="col-12 carouselContainerFilter-container-fluid">
        <Carousel activeItem={1} slide={true} showControls={true} showIndicators={true} multiItem>
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>

                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>

                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>

                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </div>
      );
    }
  }

export default MultiCarouselPage;
