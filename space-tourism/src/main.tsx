// Community
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './index.css';

// Compontents
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(window.document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
