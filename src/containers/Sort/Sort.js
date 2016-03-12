import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Array from '../../containers/Array/Array';
import bubbleSort from '../../algorithms/bubbleSort';
import { swap, beginSorting, endSorting } from '../../redux/modules/array';

let Sort = ({ items, swapping, swapped, actions }) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <button
          className="btn btn-default"
          onClick={() => bubbleSort(items.slice(), actions)}
        >
          Bubble Sort
        </button>
      </div>
    </div>
    <Array
      items={items}
      swapping={swapping}
      swapped={swapped}
    />
  </div>
);

Sort.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  swapping: PropTypes.arrayOf(PropTypes.number).isRequired,
  swapped: PropTypes.arrayOf(PropTypes.number).isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  items: state.array.items,
  swapping: state.array.swapping,
  swapped: state.array.swapped
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    swap,
    beginSorting,
    endSorting
  }, dispatch)
});

Sort = connect(mapStateToProps, mapDispatchToProps)(Sort);

export default Sort;
