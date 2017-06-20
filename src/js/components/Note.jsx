import React, {PropTypes} from 'react';

const Note = ({id, onActivate, cx, cy, isActive}) => {

  const handleActivate = () => onActivate(id);

  return (
    <ellipse
      onClick={handleActivate}
      onMouseOver={handleActivate}
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
  onActivate: PropTypes.func.isRequired,
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Note;
