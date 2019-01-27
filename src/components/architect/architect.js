import React, { Component, Fragment } from 'react';
import Timeline from '../Timeline/Timeline';
import Teammate from '../teammate/teammate';
import Gallery from '../gallery/gallery';

import './architect.css';

export default class Architect extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.gallery = null;
  }

  onClick() {
    if (this.gallery) this.gallery.open();
  }

  // takes a whole architect as 'data'
  render() {
    return <section className="architect" >
      <Timeline data={this.props.data} />
      <div className="architect__info">
        <Teammate data={this.props.data} isArchitect={true} />
        <Fragment>
          <button onClick={this.onClick}>Open</button>
          <Gallery ref={(CurrentGallery) => { this.gallery = CurrentGallery; }} type="images" data={this.props.data} />
        </Fragment>
      </div>
    </section>;
  }
}
