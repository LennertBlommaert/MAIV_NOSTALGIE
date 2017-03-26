import React, {PropTypes} from 'react';
import ThumbnailLargeSC from './ThumbnailLarge';

const Thumbnails = ({artists, onThumbnailClick: handleOnThumbnailClick}) => {

  return (
      <ul>

        {

          artists.map(artist => {

            if (artist.selected) return;

            return <ThumbnailLargeSC key={artist.id} {...artist} onThumbnailClick={handleOnThumbnailClick} />;

          })

        }

      </ul>
  );

};

Thumbnails.propTypes = {
  artists: PropTypes.array.isRequired,
  onThumbnailClick: PropTypes.func.isRequired
};

export default Thumbnails;
