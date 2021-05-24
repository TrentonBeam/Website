import React from 'react';
import logo from './logo.svg';
import './App.css';


class Test2 extends React.Component {
  render() {
    return (
      <div>
    <h1>Hello2, </h1>
    <p style={{ backgroundColor: 'red'}}>Test {this.props.text || 'Trenton Beam'}</p>
    </div>
  )
  }
}
export default Test2;
