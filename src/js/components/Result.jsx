import React, {PropTypes} from 'react';

const Result = ({nSelected}) => {

  const resultText = [
    `No influence at all`,
    `Neglectible influence`,
    `Hardly any influence`,
    `A little bit of influence`,
    `Some influence`,
    `Quite some influence`,
    `A decent amount of influence`,
    `a big influence`,
    `quite an impact`,
    `A big impact`,
    `a very big impact`,
    `A huge impact`,
    `an incredible impact`
  ];

  return (
    <article className='meter__result'>
      <h4 className='meter__h4'>Look at that</h4>
      <p>Nico has had</p>
      {
        nSelected <= resultText.length ? <p className='highlighted'>{resultText[nSelected]}</p> : ``
      }
      <p>On the music you like!</p>
    </article>
  );

};

Result.propTypes = {
  nSelected: PropTypes.number.isRequired,
};

export default Result;
