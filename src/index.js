import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//  shahidameen.us.auth0.com
//  EuHQA8k9oVCl1OmfmRTEP1yO2G8LoKia

ReactDOM.render(
  <React.StrictMode
    domain="shahidameen.us.auth0.com"
    clientId="EuHQA8k9oVCl1OmfmRTEP1yO2G8LoKia"
    redirectUri={window.location.origin}
  >
    <Auth0Provider>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
