import React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

/** @jsx jsx */

const Hero = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(33, 150, 83, 0.5),
      rgba(33, 150, 83, 0.5)
    ),
    url(./dollar.jpg);
  background-size: cover;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: whitesmoke;
  line-height: 100%;
  font-size: 2rem;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero>
        <h1 css={css({ fontWeight: 300 })}>
          시시각각 변하는 환율 정보를 바로 확인하세요.
        </h1>
      </Hero>
    </div>
  );
};

export default App;
