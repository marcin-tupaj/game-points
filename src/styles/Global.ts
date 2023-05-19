import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  #root{
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }


  :root {
    color-scheme: light dark;
    color: rgba(40, 40, 40);
    background-color: rgb(240, 240, 240);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }


  body {
    margin: 0;
    display: flex;
    background-color: rgb(240,240,240);
    min-width: 320px;
    min-height: 100vh;

    @media screen and (min-width: 1024px) {
      place-items: center;

      #root {
        height: 800px;
        max-height: 100%;
        max-width: 1280px;
        border: 2px solid var(--border-color);
      }
    }
  }

  button {
    background-color: rgb(220, 220, 220);
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: rgba(40, 40, 40);
      color: rgb(240, 240, 240);
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: rgba(140, 140, 140);
      color: rgb(40, 40, 40);
    }
  }
`;

export default GlobalStyle;
