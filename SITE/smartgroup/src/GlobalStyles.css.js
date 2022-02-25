import { createGlobalStyle } from 'styled-components'
import backgroundimg from './iesb2.jpg';

export default createGlobalStyle`
.App {
  text-align: center;
}

.App-nav {
  min-height: 5vh;
  min-width: 100vw;
  background-color: #1762A7;
  display: flex;
  justify-content: center;
}

.App-nav li{
  float: left;
  padding: 10px;
  text-align: center;
  outline: solid;
  outline-color: white;
  background-color: rgba(0,0,0,.5);
}

.App-nav a {
  text-decoration: none;
  color:aliceblue;
}

.App-body {
  background-image: url(${backgroundimg});
  background-repeat: no-repeat;
  background-position: left;
  background-color: cornflowerblue;
  background-size: cover;
  min-height: 95vh;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}

.App-nav ul li{
  text-align: left;
  font-size: 14pt;
  list-style: none;
 
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`