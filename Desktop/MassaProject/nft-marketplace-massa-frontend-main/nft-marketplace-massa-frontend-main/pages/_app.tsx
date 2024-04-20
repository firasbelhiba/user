import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './Pages/app';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/animated.css';
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

function App() {
  return (
    <div className="wraper">
      <GlobalStyles />
      <MyApp />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
