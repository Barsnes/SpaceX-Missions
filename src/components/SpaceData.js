import React from "react";

import SpaceImages from "./SpaceImages";

class SpaceData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const data = this.props.data;
    if (!this.state.visible) {
      return (
        <button onClick={this.handleClick}>
          Show {data.mission_name}
        </button>
      );
    } else {
      const local_date = data.launch_date_local;
      return (
        <div>
          <button onClick={this.handleClick}>
            Hide {this.props.data.mission_name}
          </button>
          <h1>{data.mission_name}</h1>
          <p>{data.details}</p>
          <p>Launched from {data.launch_site.site_name_long}</p>
          <h3>
            <b>Local launch time:</b> {local_date}
          </h3>
          {data.upcoming ? <h5>Upcoming</h5> :
          <h5>{data.launch_success || data.is_tentative ? <span className='success'>Success</span> : <span className='failed'>Failed</span>}</h5>}
          <SpaceImages images={data.links.flickr_images} />
        </div>
      );
    }
  }
}

export default SpaceData;
