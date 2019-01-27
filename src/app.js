import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import MainScreen from './main-screen';

import ControlsEn from './locale/en/controls.json';
import TeamEn from './locale/en/team.json';

global.controlsLang = ControlsEn;
global.teamLang = TeamEn;
global.contentLang;

ReactDOM.render(<MainScreen />, document.querySelector('body'));
