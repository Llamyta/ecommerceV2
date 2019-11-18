import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../assets/images/facebook.png'
import Logo1 from '../assets/images/twitter.png'
import Logo2 from '../assets/images/instagram.png'

import Logo3 from '../assets/images/house.png'
import Logo4 from '../assets/images/smartphone.png'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <footer className="App-footer">

                        <div>
                            <Container>
                                <Row>
                                    <Col sm>
                                        <h5>¿Quienes somos?</h5>
                                        <p>Somos una Compañia dedicada a la venta de software integrado con un
                                        conjunto de cosas que no se lo que estoy escribiendo, este
                                        texto es solo para llenara informacion en el cuadro de informacion
                                    de la compañia.</p>

                                    </Col>
                                    <Col sm>

                                        <h5>Siguenos en nuestras Redes Sociales</h5>
                                        <div className="logo-footer">
                                            <img src={Logo} alt="Logo1" />
                                            <label>Siguenos en Facebook</label>
                                        </div>
                                        <div className="logo-footer">
                                            <img src={Logo1} alt="Logo2"/>
                                            <label>Siguenos en Twitter</label>
                                        </div>
                                        <div className="logo-footer">
                                            <img src={Logo2} alt="Logo3"/>
                                            <label>Siguenos en Instagram</label>
                                        </div>

                                    </Col>
                                    <Col sm>

                                        <h5>Contactanos</h5>
                                        <div className="logo-footer">
                                            <img src={Logo3} alt="Logo4"/>
                                            <label>Av. algo
                                                esquina no se qué
                                        </label>
                                        </div>

                                        <div className="logo-footer">
                                            <img src={Logo4} alt="Logo5"/>
                                            <label>+591 7777777</label>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        
                    </footer>
                    
                </section>
            </React.Fragment>
            
        );
    }
}
export default Footer;

