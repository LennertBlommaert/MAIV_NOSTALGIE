import React, {PropTypes} from 'react';

const CurrentNote = ({note}) => {

  return (
    <div className='harmonium__note'>{note}</div>
  );

};

CurrentNote.propTypes = {
  note: PropTypes.string.isRequired
};

export default CurrentNote;
