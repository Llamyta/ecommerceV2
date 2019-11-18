import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './componnents/Header'
import Carrusel from './componnents/Carrusel'
import Hotnw from './componnents/Hotnews'
import Cat from './componnents/Categorias'
import Footer from './componnents/Footer'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Carrusel />
                <Hotnw/>
                <Cat/>

                <Switch>
                    
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}
export default Router;

