import React, { PropTypes } from 'react';
import { connectMultireducer, multireducerBindActionCreators } from 'multireducer';
import Array from '../../containers/Array/Array';
import { beginSorting, swap, compare, endSorting } from '../../redux/modules/array';

let Algorithm = ({ implementation, info, array, actions }) => (
  <div className="row" id={info.id}>
    <div className="col-xs-12">
      <h2>{info.name}</h2>
      <p>
        {info.description}
        <span> [<a href={info.link} target="_blank">{info.linkSource}</a>]</span>
      </p>
      <div className="row">
        <div className="col-xs-12">
          {(() => (
            !array.sorting ?
              <button
                className="btn btn-default"
                onClick={() => implementation(array.items.slice(), actions)}
              >
                Sort
              </button> :
              <button className="btn btn-default" disabled>Sorting...</button>
          ))()}
        </div>
      </div>
      <Array
        items={array.items}
        swapping={array.swapping || []}
        swapped={array.swapped || []}
        comparing={array.comparing || []}
      />
      <pre>
        {info.source}
      </pre>
    </div>
  </div>
);

Algorithm.propTypes = {
  info: PropTypes.object.isRequired,
  implementation: PropTypes.func.isRequired,
  array: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (key, state) => ({
  array: state.array[key]
});

const mapDispatchToProps = (key, dispatch) => ({
  actions: multireducerBindActionCreators(key, {
    beginSorting,
    swap,
    compare,
    endSorting
  }, dispatch)
});

Algorithm = connectMultireducer(mapStateToProps, mapDispatchToProps)(Algorithm);

export default Algorithm;
