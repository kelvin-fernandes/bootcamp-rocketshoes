import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Routes />
            <GlobalStyle />
            <Header />
        </BrowserRouter>
    );
}

export default App;
