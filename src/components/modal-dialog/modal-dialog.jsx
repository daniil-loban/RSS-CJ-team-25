import React, { Component, Fragment } from 'react'
import './style.css'

export default class ModalDialog extends Component {
  constructor({props}){
    super();
    this.props = props;
    this.classWrapperDefault = 'modal-mask';
    this.classWrapperClose = 'modal-mask-hidden';
    this.classCloseButton = 'close-button';
    this.state = {classWrapper: this.classWrapperDefault};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e) {
    if (e.target.className === this.classWrapperDefault
    || e.target.className === this.classCloseButton) {
      this.setState(state => ({
        classWrapper: this.classWrapperClose
      }));
    }
  }
  render() {
    return (
      <div className={this.state.classWrapper} onClick={(e) => this.handleClick(e)} >
        <div className="modal-container">
          <Fragment>
          <header className="modal-header" >
            <button className={this.classCloseButton} 
              onClick={this.handleClick}>
            </button>
          </header>
          <article className="modal-body">
            {this.props.data}
          </article>
          </Fragment>
        </div>  
      </div>
    )
  }
}
