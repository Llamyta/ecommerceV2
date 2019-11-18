import React from 'react'

import CardsHeader from './Cards';

import img1 from '../assets/images/logo3.png'
import { Container, Row } from 'react-bootstrap';


class Categorias extends React.Component {
    state = {
        cards: [
            { img: img1, estilo: 'tarjetas-img  ',estilotarjeta:'cardtamaño2 ',hover: 'true' },
            { img: img1, estilo: 'tarjetas-img ',estilotarjeta:'cardtamaño2',hover: 'true' },
            { img: img1, estilo: 'tarjetas-img ',estilotarjeta:'cardtamaño2',hover: 'true' }
        ]        
    };
    render() {
        return (
            <React.Fragment>
                <div  style={{ textAlign:'center'}} >
                    {/**corregir padding */}
                <section className="contenedor-tarjetas ">
                    <div className="seccion-inicio" >
                    <h2>Categorías</h2>

                    </div>
                        <Container  style={{paddingLeft:'4%'}}>
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
export default Categorias;

