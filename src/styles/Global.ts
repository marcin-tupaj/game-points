import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    #root{
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }


    :root {
    --border-color: rgb(200, 200, 200);
    --box-shadow-color: rgba(0, 0, 0, 0.25);
    --white-color: rgb(255, 255, 255);
    --action-primary-color: rgb(38, 137, 12);
    --action-primary-darker-color: rgb(35, 122, 10);
    --action-red-color: rgb(226, 27, 60);
    --action-red-darker-color: rgb(204, 23, 53);
    --action-blue-color: rgb(19, 104, 206);
    --action-blue-darker-color: rgb(15, 95, 184);
    --action-yellow-color: rgb(216, 158, 0);
    --action-yellow-darker-color: rgb(194, 135, 0);
    --dark-gray-color: rgb(40, 40, 40);
    --light-gray-color: rgb(240, 240, 240);
    --lighter-gray-color: rgb(249, 249, 249);
    --button-hover-color: rgb(116, 123, 255);
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --heading-font-size-h1: 1.75rem;
    --heading-font-size-h2: 1.5rem;
    --heading-font-size-h3: 1.25rem;
    --heading-font-size-h4: 1.125rem;
    --heading-font-size-h5: 1rem;
    --heading-font-size-h6: 0.875rem;
    --button-dimension: 42px;

    font-family: 'Montserrat', Helvetica, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: var(--dark-gray-color);
    background-color: var(--light-gray-color);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }


  body {
    margin: 0;
    display: flex;
    background-color: var(--light-gray-color);
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
      background-color: var(--dark-gray-color);
      color: var(--light-gray-color);
    }
    a:hover {
      color: var(--button-hover-color);
    }
    button {
      background-color: var(--lighter-gray-color);
    }
  }
`;

export default GlobalStyle;
