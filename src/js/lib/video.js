export default () => {

  const $headerContent = document.querySelector(`.header__content`);
  $headerContent.addEventListener(`click`, toggleVideoPlayState);

};

const toggleVideoPlayState = () => {

  const $headerVideo = document.querySelector(`.header__video`);
  if ($headerVideo.paused) return $headerVideo.play();
  return $headerVideo.pause();

};
