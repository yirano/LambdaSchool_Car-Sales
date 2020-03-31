import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFeatures.length ? (
        <ol type="1">
          <AddedFeature />
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carFeatures: state.car.features
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
