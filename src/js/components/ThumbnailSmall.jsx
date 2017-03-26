import React, {PropTypes, Component} from 'react';
import {ItemTypes} from '../constants/ItemTypes';
import {DragSource} from 'react-dnd';

import ThumbnailImage from './ThumbnailImage';

const thumbnailSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

@DragSource(ItemTypes.THUMBNAIL, thumbnailSource, collect)

class ThumbnailSmall extends Component {

  state

  render() {
    const {imgPath, id, onThumbnailClick, connectDragSource, isDragging} = this.props;

    const handleClick = () => onThumbnailClick(id);

    return connectDragSource(
      <li onClick={handleClick} style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: `move`
      }}>
        <ThumbnailImage imgPath={imgPath} width={60} height={60} />
      </li>
    );
  }

}

ThumbnailSmall.propTypes = {
  imgPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

ThumbnailSmall.defaultProps = {
  isDragging: false,
  connectDragSource: function() {}
};

export default ThumbnailSmall;
