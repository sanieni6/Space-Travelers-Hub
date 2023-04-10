import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import App from './App';
<<<<<<< HEAD
import './styles/index.css';
=======
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
>>>>>>> c61757e549a7f27e71872d4bcf8887d30fd89905

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
