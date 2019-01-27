import React, { Component } from 'react';
import Timeline from '../Timeline/Timeline';
import Teammate from '../teammate/teammate';
import Gallery from '../gallery/gallery';

import './architect.css';

export default class Architect extends Component {
  // takes a whole architect as 'data'
  render() {
    return <section className="architect" >
      <Timeline data={this.props.data} />
      <div className="architect__info">
        <Teammate data={this.props.data} isArchitect={true} />
        <Gallery type="images" data={this.props.data} />
      </div>
    </section>;
  }
}
