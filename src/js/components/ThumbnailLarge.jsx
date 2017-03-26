import React, {PropTypes, Component} from 'react';
import {ItemTypes} from '../constants/ItemTypes';
import {DragSource} from 'react-dnd';

import ThumbnailImage from './ThumbnailImage';
import ThumbnailTitle from './ThumbnailTitle.jsx';

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

class ThumbnailLarge extends Component {

  render() {
    const {name, imgPath, id, onThumbnailClick, connectDragSource, isDragging} = this.props;

    const handleClick = () => onThumbnailClick(id);

    return connectDragSource(
      <li onClick={handleClick} style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: `move`
      }}>
        <ThumbnailImage imgPath={imgPath} />
        <ThumbnailTitle name={name} />
      </li>
    );
  }

}

ThumbnailLarge.propTypes = {
  name: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

ThumbnailLarge.defaultProps = {
  isDragging: false,
  connectDragSource: function() {}
};

export default ThumbnailLarge;
