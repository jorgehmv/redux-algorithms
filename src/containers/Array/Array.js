import React, { PropTypes } from 'react';
import Item from '../../components/Item/Item';

const Array = ({ items, swapping, swapped, comparing }) => (
    <div className="row">
        {items.map((item, index) =>
            <Item
              key={index}
              value={item}
              swapping={swapping.some(swappingIndex => swappingIndex === index)}
              swapped={swapped.some(swappedIndex => swappedIndex === index)}
              comparing={comparing.some(comparingIndex => comparingIndex === index)}
              {...item }
            />
        )}
    </div>
);

Array.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  swapping: PropTypes.arrayOf(PropTypes.number).isRequired,
  swapped: PropTypes.arrayOf(PropTypes.number).isRequired,
  comparing: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Array;
