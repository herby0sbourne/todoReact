import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import App from './App';

const store = configStore();

if (module.hot) {
  // Accept hot update
  module.hot.accept();
}

const state = store.getState();
console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if HMR interface is enabled
// if (module.hot) {
//   // Accept hot update
//   module.hot.accept();
// }

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
