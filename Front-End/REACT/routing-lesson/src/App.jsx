import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './SiteRoutes';
// eslint-disable-next-line no-unused-vars
import styles from './scss/style.scss';

function App() {
  return (
    <Router>
        <SiteRoutes />
    </Router>
  );
}

export default App;
