import React from 'react'

import CardsHeader from './Cards';

import img1 from '../assets/images/logo3.png'
import { Container, Row, Button } from 'react-bootstrap';


class Categorias extends React.Component {
    state = {
        cards: [
            { img: img1, estilo: 'tarjetas-img  ', estilotarjeta: 'cardtamaño2 ', hover: 'true' },
            { img: img1, estilo: 'tarjetas-img ', estilotarjeta: 'cardtamaño2', hover: 'true' },
            { img: img1, estilo: 'tarjetas-img ', estilotarjeta: 'cardtamaño2', hover: 'true' },
            { img: img1, estilo: 'tarjetas-img  ', estilotarjeta: 'cardtamaño2 ', hover: 'true' }
        ]
    };
    render() {
        return (
            <React.Fragment>
                <section className="seccion">
                    <div className="descripcion">
                        <h2>Categorias</h2>
                    </div>
                    <div className="tarjeta">
                        <Container className="containers">
                            <Row>
                                {
                                    this.state.cards.map((cards, i) => {
                                        return (
                                            <CardsHeader key={i} cards={cards} />
                                        )
                                    })

                                }


                            </Row>
                        </Container>

                    </div>
                    <div className="alinearD">
                        <Button variant="link" >Ver mas...</Button>
                    </div>

                </section>


            </React.Fragment>
        );
    }
}
export default Categorias;

