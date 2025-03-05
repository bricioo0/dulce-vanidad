
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ProductsPage} />
                    {/* Agrega más rutas según sea necesario */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;