import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import { connect } from 'react-redux';
import render from '@alex-playground/components';
import '@alex-playground/api';

export default function (widget = '') {
  return (
    <div>
      Containers
      { render() }
      Rendering { widget } widget.
    </div>
  );
}