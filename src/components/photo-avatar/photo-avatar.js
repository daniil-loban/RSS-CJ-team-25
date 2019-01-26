import React, { Component } from 'react';
import './photo-avatar.css';

class PhotoAvatar extends Component {
  constructor({ props }) {
    super();
    this.props = props;
  }

  render() {
    return (
      <img className="photo-avatar" alt={this.props.alt} src={this.props.img} />
    );
  }
}

export default PhotoAvatar;
