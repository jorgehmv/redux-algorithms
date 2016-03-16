import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';

const getHeading = (swapping, swapped, comparing) => {
  let title = ' ';
  if (swapping) {
    title = 'Swapping';
  } else if (swapped) {
    title = 'Swapped';
  } else if (comparing) {
    title = 'Comparing';
  }

  return `${title}`;
};

const getStyle = (swapping, swapped, comparing) => {
  if (swapping) {
    return 'info';
  }

  if (swapped) {
    return 'success';
  }

  if (comparing) {
    return 'warning';
  }

  return 'default';
};

const Item = ({ value, swapping, swapped, comparing }) => {
  const styles = require('./Item.scss');
  return (
    <div className="col-xs-4 col-md-2">
      <Panel
        header={getHeading(swapping, swapped, comparing)}
        bsStyle={getStyle(swapping, swapped, comparing)}
        className={styles.item}
      >
        {value}
      </Panel>
    </div>
  );
};

Item.propTypes = {
  value: PropTypes.number.isRequired,
  swapping: PropTypes.bool.isRequired,
  swapped: PropTypes.bool.isRequired,
  comparing: PropTypes.bool.isRequired
};

export default Item;
