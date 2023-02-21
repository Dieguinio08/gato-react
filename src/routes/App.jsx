import React from 'react';
import Layout from '@containers/Layout';
import Home from '@templates/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (     
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};
export default App;