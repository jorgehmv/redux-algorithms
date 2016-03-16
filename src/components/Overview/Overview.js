import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default () => {
  const styles = require('./Overview.scss');
  return (
    <Jumbotron id="Overview" className={styles.overview}>
      <div className="container">
        <h1>Redux Algorithms</h1>
        <p>
          Sorting algorithms implemented using Redux
        </p>
        <p className="text-center">
          <a className={styles.github} href="https://github.com/jorgehmv/redux-algorithms"
            target="_blank"
          >
            <i className="fa fa-github" /> View on Github
          </a>
        </p>
      </div>
    </Jumbotron>
  );
};
