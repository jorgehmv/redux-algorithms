import React, { PropTypes } from 'react';
import Item from '../components/Item';

let Array = ({ items, swapping, swapped }) => (
    <div>
        {items.map((item, index) => 
            <Item 
                key={index} 
                value={item}
                swapping={swapping.some(swappingIndex => swappingIndex === index)}
                swapped={swapped.some(swappedIndex => swappedIndex === index)}
                {...item} />
        )}
    </div>
);

Array.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    swapping: PropTypes.arrayOf(PropTypes.number).isRequired,
    swapped: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Array;