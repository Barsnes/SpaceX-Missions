import React from "react";

class SpaceImages extends React.Component {
  render() {
    if (this.props.images[0] === undefined) {
      return <p>No images</p>;
    } else {
      const images = this.props.images.map(i => <img alt="i" src={i} />);
      return (
        <div className="gallery">
          <h1>Images</h1>
          {images}
        </div>
      );
    }
  }
}

export default SpaceImages;
