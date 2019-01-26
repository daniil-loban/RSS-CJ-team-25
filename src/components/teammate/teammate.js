import React, { Component } from 'react';
import PhotoAvatar from '../photo-avatar/photo-avatar';
import './teammate.css';

export default class Teammate extends Component {
  constructor({ props }) {
    super();
    this.props = props;
  }

  render() {
    return (
      <article className="teammate">
        <div className="teammate-photo">
          <PhotoAvatar alt={this.props.data.name} img={this.props.data.photo} />
        </div>
        <div className="teammate-about">
          <h1 className={`teammate-caption ${this.props.isArchitect === true && 'teammate_architect-name'}`}>{this.props.data.name}</h1>
          <p className={`teammate-text ${this.props.isArchitect === true && 'teammate_architect-text'}`}>{this.props.data.about}</p>
        </div>
      </article>
    );
  }
}
