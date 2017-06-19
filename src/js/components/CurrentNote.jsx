import React, {PropTypes} from 'react';

const CurrentNote = ({note}) => {

  return (
    <div className='harmonium__bg'>
      <div className='harmonium__note'>{note}</div>
    </div>
  );

};

CurrentNote.propTypes = {
  note: PropTypes.string.isRequired
};

export default CurrentNote;
