import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import { connect } from 'react-redux';
import render from '@alex-playground/components';

export default function () {
  return (
    <div>
      Containers
      { render() }
    </div>
  );
}