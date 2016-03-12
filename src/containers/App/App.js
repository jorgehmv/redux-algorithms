import React from 'react';

import Helmet from 'react-helmet';

import config from '../../config';
import Navbar from '../../components/Navbar/Navbar';
import Sort from '../../containers/Sort/Sort';

const App = () => (
  <div>
    <Helmet {...config.app.head} />
    <Navbar />
    <div className="container">
        <Sort />
    </div>
  </div>
);

export default App;
