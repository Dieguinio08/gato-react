import React from 'react';
import App from '@routes/App';
import * as ReactDOMClient from 'react-dom/client';
import '@styles/index.css';


const app=ReactDOMClient.createRoot(document.getElementById("app"));
app.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);