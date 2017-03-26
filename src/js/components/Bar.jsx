import React, {Component, PropTypes} from 'react';
import {ItemTypes} from '../constants/ItemTypes';
import {DropTarget} from 'react-dnd';

import ThumbnailSmall from './ThumbnailSmall';

const barTarget = {
  drop(props, monitor) {
    const {onThumbnailClick} = props;
    const thumbnail = monitor.getItem();
    onThumbnailClick(thumbnail.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

@DropTarget(ItemTypes.THUMBNAIL, barTarget, collect)

class Bar extends Component {

  render() {

    const {artists, onThumbnailClick: handleOnThumbnailClick, connectDropTarget, isOver, canDrop} = this.props;

    console.log(isOver, canDrop);

    return connectDropTarget(
      <ul className='bar'>
        {

          artists.map(artist => {

            if (!artist.selected) return;

            return <ThumbnailSmall key={artist.id} {...artist} onThumbnailClick={handleOnThumbnailClick} />;

          })

        }
      </ul>
    );
  }

}

Bar.propTypes = {
  artists: PropTypes.array.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

Bar.defaultProps = {
  isOver: false,
  canDrop: false,
  connectDropTarget: function() {}
};

export default Bar;
