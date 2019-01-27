import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  getArticle(item, index) {
    const [left, right] = ['timeline__container_left', 'timeline__container_right'];
    return (
      <article className={`timeline__container ${index % 2 !== 0 ? right : left}`}>
        <div className="timeline__item">
          <h3 className="timeline__header">{item.year}</h3>
          <p className="timeline__text">{item.bio}</p>
        </div>
      </article>
    );
  }

  render() {
    return (
      <section className="timeline">
        {this.props.data.timeline.map((item, index) => this.getArticle(item, index))}
      </section>
    );
  }
}

export default Timeline;
