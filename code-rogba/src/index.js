import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import { createStore } from 'redux';    // redux store 생성
//import reducers from './reducers';
//import { Provider } from 'react-redux';


//const store = createStore(reducers);


ReactDOM.render(
    // <Provider store={store}>
    // <App />
    // </Provider>,
    <App />,
    document.getElementById('root')
    //<div><MainPage /></div> , document.getElementById('root')
);