import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Modal, Container } from 'react-bootstrap';
import Logo from '../assets/images/logo4.png'


import { NavLink } from 'react-router-dom'

class Header extends React.Component {
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
        return (
            <React.Fragment >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{ paddingRight: '33px', paddingLeft: '8%' }}  sticky="top">
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="auto"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />Tienda Online
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav >
                            {/**falta alinear al responsive PONER LOGOS*/}
                            <Form inline >
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info"> <i className="fas fa-search" style={{ fontSize: '1em' }}></i></Button>
                            </Form>
                            <Nav.Link href="#deets">Card <i className="fas fa-cart-arrow-down"></i></Nav.Link>
                            <Nav.Link eventKey={2} onClick={this.handleShow}>Sign-In</Nav.Link>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title >Iniciar Sesion</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Container>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="outline-warning" onClick={this.handleClose}>
                                        Cerrar
                                                        </Button>
                                    <Button variant="outline-info" onClick={this.handleClose}>
                                        Iniciar Sesion
                                                        </Button>
                                </Modal.Footer>
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;

