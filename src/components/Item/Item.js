import React, { PropTypes } from 'react';

const Item = ({ value, swapping, swapped }) => (
  <div className="col-xs-2 col-md-1">
    <h1>
      <span className={`label label-default value
                    ${(swapping ? ' swapping ' : ' ')}
                    ${(swapped ? ' swapped ' : ' ')}`}
      >{value}</span>
    </h1>
  </div>
);

Item.propTypes = {
  value: PropTypes.number.isRequired,
  swapping: PropTypes.bool.isRequired,
  swapped: PropTypes.bool.isRequired
};

export default Item;
