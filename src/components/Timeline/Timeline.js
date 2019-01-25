import React from 'react';
import ReactDOM from 'react-dom';
import './Timeline.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="timeline">
        {this.props.data.timeline.map((item, index) => getArticle(item, index))}
      </section>
    );
  }
}

function getArticle(item, index) {
  let [left, right] = ['timeline__container_left', 'timeline__container_right']

  return (
    <article className={`timeline__container ${index % 2 !== 0 ? right : left}`}>
      <div className="timeline__item">
        <h3 className="timeline__header">{item.year}</h3>
        <p className="timeline__text">{item.bio}</p>
      </div>
    </article>
  );
}

ReactDOM.render(<Timeline data={data} />, document.querySelector('#root')); // {data} была js объектом 
