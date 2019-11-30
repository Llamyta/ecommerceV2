import React from 'react'

import CardsHeader from './Cards';

import img1 from '../assets/images/logo3.png'
import { Container, Row } from 'react-bootstrap';


class Hotnews extends React.Component {
    state = {
        cards: [
            { title:'Nombre del producto',texto: 'Este es un producto', img: img1, estilo: 'tarjetas-img imagen',estilotarjeta:'cardtamaño2',buton: 'true' },
            { title:'Nombre del producto',texto: 'Este es un producto', img: img1, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2',buton: 'true' },
            { title:'Nombre del producto',texto: 'Este es un producto', img: img1, estilo: 'tarjetas-img',estilotarjeta:'cardtamaño2',buton: 'true' }
        ]        
    };
    render() {
        return (
            <React.Fragment>
               <section className="seccion" style={{backgroundColor:"#F2F2F2"}}>
                    <div className="descripcion">
                        <h2>Hot News</h2>
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
                </section>
            </React.Fragment>
        );
    }
}
export default Hotnews;

