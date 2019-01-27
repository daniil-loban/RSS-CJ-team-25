import React, { Component } from 'react';
import './team.css';

import ModalDialog from '../modal-dialog/modal-dialog';
import Teammate from '../teammate/teammate';

class Team extends Component {
  render() {
    return <ModalDialog
      data={this.props.data.map(element => <Teammate data={element} />)}
    />;
  }
}

export default Team;
