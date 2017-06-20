import React, {PropTypes} from 'react';

const Note = ({id, onClick, cx, cy, isActive}) => {

  const handleClick = () => onClick(id);

  return (
    <ellipse
      onClick={handleClick}
      cx={cx} cy={cy}
      rx='20' ry='20'
      strokeWidth='2'
      stroke='#ff6174'
      fill={isActive ? `#ffffff` : `#ff6174`}
    />
  );

};

Note.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Note;
