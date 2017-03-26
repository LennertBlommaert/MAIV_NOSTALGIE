import createElementSVG from './createElementSVG.js';

export default $album => {

  const $audio = $album.querySelector(`.album-audio-sample`);
  // Progressive enhancement
  $audio.removeAttribute(`controls`);

  const $albumCoverContainer = $album.querySelector(`.album-cover-container`);
  $albumCoverContainer.appendChild(createButtonBackground());

  const $svg = $albumCoverContainer.querySelector(`svg`);
  toggleButtonState($svg);

};

const onButtonClick = $svg => {

  const $audioTag = $svg.parentNode.querySelector(`.album-audio-sample`);

  toggleButtonState($svg, $audioTag.paused);

  if ($audioTag.paused) {
    $audioTag.play();
  } else {
    $audioTag.pause();
  }

};

const createButtonBackground = () => {

  const $svg = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
  $svg.setAttribute(`width`, 40);
  $svg.setAttribute(`height`, 40);
  $svg.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);
  $svg.addEventListener(`click`, e => onButtonClick(e.currentTarget));

  const $circle = createElementSVG(`circle`,  {
    r: 20,
    fill: `#363636`,
    cx: 20,
    cy: 20
  }, $svg);

  $svg.appendChild($circle);

  return $svg;

};

const toggleButtonState = ($svg, $audioTagIsPaused) => {

  console.log($svg, $audioTagIsPaused);

  $svg.innerHTML = ``;

  createElementSVG(`circle`,  {
    r: 20,
    fill: `#363636`,
    cx: 20,
    cy: 20
  }, $svg);

  if ($audioTagIsPaused) {

    createElementSVG(`rect`,  {
      x: 24,
      y: 10,
      fill: `#ffffff`,
      width: `4`,
      height: `20`
    }, $svg);

    createElementSVG(`rect`,  {
      x: 13,
      y: 10,
      fill: `#ffffff`,
      width: `4`,
      height: `20`
    }, $svg);

  } else {

    createElementSVG(`polygon`,  {
      x: 20,
      y: 20,
      fill: `#ffffff`,
      points: `15,10 30,20 15,30`
    }, $svg);

  }

};