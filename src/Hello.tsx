import styled from 'styled-components';
import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <Title>hooi</Title>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default Hello;