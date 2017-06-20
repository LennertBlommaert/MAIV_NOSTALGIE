import * as d3 from 'd3';

const row = data => {

  data.id = parseInt(data.id, 10);
  data.x = parseInt(data.x, 10);
  data.y = parseInt(data.y, 10);

  return data;

};

export default url => {

  d3.csv(url, row, (err, data) => {

    if (err) throw new Error(err);

    const size = 3;
    const overlay = d3.select(`.infographic__overlay`);

    overlay.selectAll(`ellipse`)
      .data(data)
      .enter().append(`ellipse`)
      .attr(`class`, `hotspot`)
      .attr(`rx`, `${size}rem`)
      .attr(`ry`, `${size}rem`)
      .attr(`cx`, ({x}) => `${x}`)
      .attr(`cy`, ({y}) => `${y}`)
      .attr(`fill`, `#fe6174`)
      .on(`mouseover`, handleHover);

    // const nav = d3.select(`.infographic-nav`);
    // nav.selectAll()

  });
};

const handleHover = data => {

  const $desc = document.querySelector(`.infographic-description`);

  $desc.innerHTML = `${data.desc}`;

};
