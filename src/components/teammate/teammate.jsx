import React, { Component } from 'react'
import PhotoAvatar from './../photo-avatar/photo-avatar'
import './style.css'

export default class Teammate extends Component {
  constructor({props}){
    super();
    this.props = props;
  }
  render() {
    return (
      <article className="teammate"> 
        <div className="teammate-photo">
          <PhotoAvatar alt={this.props.name} img={this.props.photo}/>
        </div>
        <div className="teammate-about">
          <h1 className="teammate-caption">{this.props.name}</h1>
          <p className="teammate-text">{this.props.shortBio}</p>   
        </div> 
      </article>
    )
  }
}
