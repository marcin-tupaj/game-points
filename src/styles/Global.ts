import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    #root{
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }


    :root {
    --breakpoint-small: 767px;
    --breakpoint-medium: 1024px;
    --border-color: rgb(200, 200, 200);
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --heading-font-size-h1: 2rem;
    --heading-font-size-h2: 1.75rem;
    --heading-font-size-h3: 1.5rem;
    --heading-font-size-h4: 1.25rem;
    --heading-font-size-h5: 1.125rem;
    --heading-font-size-h6: 1rem;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

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
      color: rgb(116, 123, 255);
    }
    button {
      background-color: rgb(249, 249, 249);
    }
  }
`;

export default GlobalStyle;
