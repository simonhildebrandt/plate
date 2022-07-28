import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Letter = styled.text`
  fill: black;
  font-size: 160px;
  text-anchor: middle;
  font-family: Plat Nomor;
  font-weight: bold;
`


const letters = "KXD126".split('');
const offsets = [80, 160, 240, 360, 440, 520];


const App = () => <div>
  <svg viewBox="0 0 600 200" width="100%" style={{background: 'lightgray'}}>
    <rect x="10" width="580" y="10" height="180" strokeWidth="10" stroke="white" fill="#AAAAAA" rx="5" ry="5"></rect>
    { letters.map((letter, index) => (
      <Letter key={index} x={`${offsets[index]}`} y="160" >{letter}</Letter>
    ))}
  </svg>
</div>;

ReactDOM.render(<App/>, document.getElementById('app'));
