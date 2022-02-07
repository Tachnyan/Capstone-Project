import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.App {
  text-align: center;
}

.App-nav {
  min-height: 100vh;
  min-width: 5vw;
  left: 0;
  float:left;
  background-color: #0f1e3b;
}

.App-nav a {
  text-decoration: none;
  color:aliceblue;
}

.App-body {
  background: cornflowerblue;
  min-height: 100vh;
  max-height: 100vh;
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