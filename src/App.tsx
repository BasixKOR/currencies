import React from 'react';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

const App: React.FC = () => {
  return (
    <div className="App">
      <section
        className="hero is-medium is-bold"
        css={css`
          background-image: linear-gradient(
              0deg,
              rgba(33, 150, 83, 0.5),
              rgba(33, 150, 83, 0.5)
            ),
            url(./dollar.jpg);
          background-size: cover;
        `}
      >
        <div className="hero-body">
          <div className="container">
            <h1
              className="title"
              css={css({ textAlign: 'center', color: 'white' })}
            >
              시시각각 변하는 환율 정보를 바로 확인하세요.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
