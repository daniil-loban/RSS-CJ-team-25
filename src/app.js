import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import MainScreen from './main-screen';

global.controlsLang;
global.teamLang;
global.contentLang;

ReactDOM.render(<MainScreen />, document.querySelector('body'));
