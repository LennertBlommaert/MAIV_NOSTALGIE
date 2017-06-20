import React, {PropTypes} from 'react';
import Note from './Note';

const Staff = ({audio, onActivateNote: handleActivateNote}) => {

  const staffHeight = 230;
  const staffWidth = 1000;

  return (

    <svg width={staffWidth} height={staffHeight}
        xmlns='http://www.w3.org/2000/svg'>
        {
          audio.map(audioItem => {

            return (
              <g key={audioItem.id}>
                <line
                  x1='0'
                  y1={staffHeight - 40 * audioItem.id}
                  x2={staffWidth}
                  y2={staffHeight - 40 * audioItem.id}
                  strokeWidth='1'
                  stroke='grey' />

                <Note cx={(staffWidth / 16) * audioItem.id}
                  cy={staffHeight - 20 * audioItem.id}
                  onActivate={handleActivateNote}
                  {...audioItem}
                />;
              </g>
            );

          })
        }
    </svg>
  );

};

Staff.propTypes = {
  audio: PropTypes.array.isRequired,
  onActivateNote: PropTypes.func.isRequired
};

export default Staff;
