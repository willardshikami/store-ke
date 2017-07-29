import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
