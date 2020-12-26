import React from 'react';
import ReactDom from 'react-dom';
import { Footer } from './components/Footer';
import GifExpertApp from './GifExpertApp';
import './index.css';



ReactDom.render( 
    <GifExpertApp />,
    document.getElementById('root')
);


ReactDom.render( 
    <Footer />,
    document.getElementById('footer')
);