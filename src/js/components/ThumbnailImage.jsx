import React, {PropTypes} from 'react';

const ThumbnailImage = ({imgPath, width, height}) => {

  return (
      <img src={imgPath} width={width} height={height} />
  );

};

ThumbnailImage.propTypes = {
  imgPath: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

ThumbnailImage.defaultProps = {
  width: 145,
  height: 145
};

export default ThumbnailImage;
