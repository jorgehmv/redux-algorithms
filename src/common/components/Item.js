import React, { PropTypes } from 'react';

const Item = ({ value, swapping, swapped }) => (
    <h3>
        <span className={`label label-default value
                        ${(swapping ? ' swapping ' : ' ')}
                        ${(swapped ? ' swapped ' : ' ')}`}
        >{value}</span>
    </h3>
);

Item.propTypes = {
  value: PropTypes.number.isRequired,
  swapping: PropTypes.bool.isRequired,
  swapped: PropTypes.bool.isRequired
};

export default Item;
