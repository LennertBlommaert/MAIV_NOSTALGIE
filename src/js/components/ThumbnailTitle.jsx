import React, {PropTypes} from 'react';

const ThumbnailTitle = ({name}) => {

  return (
      <span>{name}</span>
  );

};

ThumbnailTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default ThumbnailTitle;
