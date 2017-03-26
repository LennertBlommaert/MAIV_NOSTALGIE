import React, {PropTypes} from 'react';

const Result = ({nSelected}) => {

  const resultText = [
    `Cultuurbarbaar`,
    `Pleb`,
    `Ist al?`,
    `Doe ke je best`,
    `allez`,
    `Allichte aan den helft`,
    `Average af`,
    `Hmmm okay`,
    `Valt wel mee`,
    `Cavaatjes nog`,
    `Close Enough`,
    `Overlooooord`
  ];

  return (
    <article>
      <h4>Result</h4>
      {
        nSelected <= resultText.length ? <p>{resultText[nSelected]}</p> : ``
      }
    </article>
  );

};

Result.propTypes = {
  nSelected: PropTypes.number.isRequired,
};

export default Result;
