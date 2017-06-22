import React, {PropTypes} from 'react';
import Note from './Note';

const Staff = ({notes, onActivateNote: handleActivateNote}) => {

  const staffHeight = 230;
  const staffWidth = 1000;

  return (

    <svg width={staffWidth} height={staffHeight}
        xmlns='http://www.w3.org/2000/svg'>
        {
          notes.map(note => {

            return (
              <g key={note.id}>
                <line
                  x1='0'
                  y1={staffHeight - 40 * note.id}
                  x2={staffWidth}
                  y2={staffHeight - 40 * note.id}
                  strokeWidth='1'
                  stroke='grey' />

                <Note cx={(staffWidth / 16) * note.id}
                  cy={staffHeight - 20 * note.id}
                  onActivate={handleActivateNote}
                  {...note}
                />;
              </g>
            );

          })
        }
    </svg>
  );

};

Staff.propTypes = {
  notes: PropTypes.array.isRequired,
  onActivateNote: PropTypes.func.isRequired
};

export default Staff;
