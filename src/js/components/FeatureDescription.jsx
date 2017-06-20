import React, {PropTypes} from 'react';

const FeatureDescription = ({currentFeatureDescription}) => {

  return (
    <p className='infographic__description'>{currentFeatureDescription}</p>
  );

};

FeatureDescription.propTypes = {
  currentFeatureDescription: PropTypes.string.isRequired
};

export default FeatureDescription;
