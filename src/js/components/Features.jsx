import React, {PropTypes} from 'react';

const Dots = ({features, setSelectedFeature: handleSelect, currentFeatureId}) => {

  return (
    <svg className='infographic__overlay' width='100%' height='100%'>

      {

        features.map(f =>
          <ellipse
            onMouseOver={() => handleSelect(f.id)}
            onClick={() => handleSelect(f.id)}
            key={f.id}
            cx={`${f.x}%`} cy={`${f.y}%`}
            rx='35px' ry='35px'
            fill='#ff6174'
            strokeWidth='2px'
            stroke={f.id === currentFeatureId ? `#ffffff` : ``}
          />
        )

      }

    </svg>
  );

};

Dots.propTypes = {
  features: PropTypes.array.isRequired,
  setSelectedFeature: PropTypes.func.isRequired,
  currentFeatureId: PropTypes.string.isRequired
};

export default Dots;
