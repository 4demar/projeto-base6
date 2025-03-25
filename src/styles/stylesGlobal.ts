import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --red: #e52e4d;
      --blue: #5429cc;
      --green: #33cc95;
      
      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969cb3;
      --text-dark: #222;

      --background: #f0f2f5;
      --shape: #ffffff;
      --header: #c1c2c3;
   }

   * {
      width: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   // font-size: 16px (Desktop)
   // 1rem = font-size da pagina
   //se elementos estiver com rem ira se basear pelo tamanho do font-size
   html { 
      @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
      font-size: 87.5%; // 14px
      }
   }

   body {
      -webkit-font-smoothing: antialiased;

   }

   body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }

   input {
      font-size: 16px;
   }

   h1, h2, h3, h4, h5, strong {
      font-weight: 600;
   }

   h6 {
      font-size: 90%;
   }

   button {
      cursor: pointer;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }
 
   .mouse-pointer{
      cursor: pointer;
   }

   .modalBlur {
      backdrop-filter: blur(3px);
   }

   #scroll {
      max-height: 18.8rem;
      overflow-y: auto;
   }
`


// * {
//    padding: 0;
//    margin: 0;
//    box-sizing: border-box;
// }

// body {
//    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//    -webkit-font-smoothing: antialiased;
//    -moz-osx-font-smoothing: grayscale;
// }

// code {
//    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
// }

// .App {
//    text-align: center;
// }

// .App-logo {
//    height: 40vmin;
//    pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//    .App-logo {
//       animation: App-logo-spin infinite 20s linear;
//    }
// }

// .App-header {
//    /* background-color: #282c34; */
//    min-height: 100vh;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;
//    font-size: calc(10px + 2vmin);
//    color: white;
// }

// .App-link {
//    color: #61dafb;
// }

// @keyframes App-logo-spin {
//    from {
//       transform: rotate(0deg);
//    }

//    to {
//       transform: rotate(360deg);
//    }
// }