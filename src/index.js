import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Routing from './components/Routing';

const App = ()=>{
    return(
        <div>
            <Routing />
        </div>
    )
}

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,document.getElementById('root'));