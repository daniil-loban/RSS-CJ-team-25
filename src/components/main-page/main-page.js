import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './main-page.css';

import Architect from '../architect/architect';
import Teammate from '../teammate/teammate';

class MainPage extends Component {
  renderClickedArchitect(i) {
    ReactDOM.render(<Architect data={global.contentLang[i]} />, document.getElementById('content'));
  }

  render() {
    return (
      <section className="main-page">
        <Teammate isArchitect={true} onClick={() => this.renderClickedArchitect(index)} />
      </section>
    );
  }
}

export default MainPage;
