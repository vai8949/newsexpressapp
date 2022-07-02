import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,desc,imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
  <img src={!imgUrl?"https://therecord.media/wp-content/uploads/2022/01/moon-night-sky-cloud.jpg":imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {desc}
    </p>
    <a href={newsUrl} target="_blank" className="btn btn-dark">
      Read More...
    </a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
