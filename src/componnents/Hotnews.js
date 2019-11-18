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
                <div  style={{ textAlign:'center', backgroundColor:'#FFC107'}} >
                    {/**corregir padding */}
                <section className="contenedor-tarjetas " >
                    <div className="seccion-inicio" >
                    <h2>Hot News</h2>

                    </div>
                        <Container style={{paddingLeft:'4%'}}>
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
                    </section>

                   
                </div>

            </React.Fragment>
        );
    }
}
export default Hotnews;

