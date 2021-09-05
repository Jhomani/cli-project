const capitalize = require("../utils");

const index = (name) =>
  ` import React from 'react';
import Wrapper from './styles/index.styles';

export function ${capitalize(name)}() {
  //some logic

  return (<Wrapper>
    <h1>new container :)</h1>
  </Wrapper>)
};

export default ${capitalize(name)};`;

module.exports = index;