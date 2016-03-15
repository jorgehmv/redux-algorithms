import React from 'react';

import Helmet from 'react-helmet';

import config from '../../config';
import Navbar from '../../components/Navbar/Navbar';
import Overview from '../../components/Overview/Overview';

import Algorithm from '../../containers/Algorithm/Algorithm';
import bubbleSort, { Info as bubbleSortInfo } from '../../algorithms/bubble-sort';
import insertionSort, { Info as insertionSortInfo } from '../../algorithms/insertion-sort';
import quicksort, { Info as quicksortInfo } from '../../algorithms/quicksort';

const App = () => (
  <div>
    <Helmet {...config.app.head} />
    <Navbar />
    <Overview />
    <div>
      <div className="container">
        <Algorithm
          multireducerKey="bubbleSortArray"
          info={bubbleSortInfo}
          implementation={bubbleSort}
        />
        <Algorithm
          multireducerKey="insertionSortArray"
          info={insertionSortInfo}
          implementation={insertionSort}
        />
        <Algorithm
          multireducerKey="quicksortArray"
          info={quicksortInfo}
          implementation={quicksort}
        />
      </div>
    </div>
  </div>
);

export default App;
