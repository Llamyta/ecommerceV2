import React from 'react'


import { Card, Col, Button, Modal, Container, Row } from 'react-bootstrap';

class Cards extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        const { title, texto, img, estilo, buton, estilotarjeta, hover } = this.props.cards;


        return (
            <React.Fragment>
                <section className="tarjetas">
                    <Col >
                        <Card border="secondary" className={estilotarjeta}>
                            <div className={estilo}>
                                <Card.Img variant="top" src={img} alt={title} />
                                {hover &&
                                <h1>aun no </h1>
                                /**<div class="card">
            <div class="imgBx">
                <img src="https://wallpaperscraft.ru/image/gory_reka_derevya_izgiby_hvoynye_6386_300x400.jpg">
            </div>
            <div class="details">
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
 */


                                }
                            </div>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {texto}


                                </Card.Text>
                                {buton &&
                                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                                        <Button variant="outline-info" onClick={this.handleShow} >
                                            Ver Producto
                                        </Button>

                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{title}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <Card.Img variant="top" src={img} alt={title} />


                                                        </Col>
                                                        <Col>
                                                            {texto}
                                                        </Col>
                                                    </Row>
                                                </Container>


                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="outline-warning" onClick={this.handleClose}>
                                                    Cerrar
                                                </Button>
                                                <Button variant="outline-info" onClick={this.handleClose}>
                                                    Anadir al carrito
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </section>
            </React.Fragment>
        );
    }
}
export default Cards;

