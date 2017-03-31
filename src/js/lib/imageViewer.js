export default $case => {

  const artist = $case.id;

  const imgFilenames = getImageFilenames(artist);

  const $thumbnails = document.createElement(`div`);
  $thumbnails.classList.add(`case__thumbnails`);

  for (let i = 0;i < imgFilenames.length;i ++) {
    $thumbnails.appendChild(createThumbnail(imgFilenames[i], $case));
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

const createThumbnail = (imgFilename, $case) => {

  const $img = document.createElement(`img`);
  $img.src = `assets/img/thumbnails/${imgFilename}`;
  $img.alt = `${imgFilename}`;
  $img.width = 100;
  $img.height = 100;

  $img.addEventListener(`click`, e => onThumbnailClick(imgFilename, $case, e));

  return $img;

};

const onThumbnailClick = (imgFilename, $case) => {

  const $img = $case.querySelector(`.case-img`);

  $img.src = `assets/img/${imgFilename}`;

};
