import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <Header />
                <Routes />
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </Router>
        </Provider>
    );
}

export default App;
