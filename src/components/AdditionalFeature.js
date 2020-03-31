import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions/actions'


const AdditionalFeature = props => {
  console.log(props);
  function handleFeatureAdd(e) {
    e.preventDefault();
    console.log('handle add', e.target);
    props.addFeature(e.target.id)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" id={props.key} onClick={e => handleFeatureAdd(e)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    feature: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
