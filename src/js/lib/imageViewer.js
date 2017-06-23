export default $case => {

  //dataset ipv id
  const artist = $case.id;

  const imgFilenames = getImageFilenames(artist);

  const $thumbnails = document.createElement(`div`);
  $thumbnails.classList.add(`case__thumbnails`);

  for (let i = 0;i < imgFilenames.length;i ++) {
    $thumbnails.appendChild(createThumbnail(imgFilenames[i], $case, i));
  }

  const $caseContent = $case.querySelector(`.case__content`);
  $caseContent.appendChild($thumbnails);

};

const getImageFilenames = artist => {

  const imgFilenames = [];

  for (let i = 1;i <= 3;i ++) {
    imgFilenames.push(`${artist}_${i}.jpg`);
  }

  return imgFilenames;

};

const createThumbnail = (imgFilename, $case, i) => {

  const $img = document.createElement(`img`);
  $img.src = `assets/img/thumbnails/${imgFilename}`;
  $img.alt = `${imgFilename}`;
  $img.width = 100;
  $img.height = 100;
  $img.classList.add(`case__thumbnail`);

  if (i === 0) $img.classList.add(`selected`);

  $img.addEventListener(`click`, e => onThumbnailClick(imgFilename, $case, e));

  return $img;

};

const onThumbnailClick = (imgFilename, $case, e) => {

  const $thumbnail = e.currentTarget;

  resetPreviousSelectedThumbnails($thumbnail);

  $thumbnail.classList.add(`selected`);

  const $img = $case.querySelector(`.case-img`);
  $img.classList.remove(`revealedX`);
  $img.addEventListener(`transitionend`, (() => {
    $img.src = `assets/img/${imgFilename}`;
    $img.classList.add(`revealedX`);
  }));
};

const resetPreviousSelectedThumbnails = $currentThumbnail => {
  const $thumbnails = $currentThumbnail.parentNode.querySelectorAll(`.selected`);
  for (let i = 0;i < $thumbnails.length;i ++) {
    $thumbnails[i].classList.remove(`selected`);
  }
};
