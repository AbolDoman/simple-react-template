import React from 'react';
import MobContainer from './MobConntainer'
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import MobContainerWithHooks from "./MobContainerWithHooks";
const redux = require('redux');

const App = () => {
    return (
        <>
            <Provider store={store}>
                <MobContainerWithHooks/>
                <MobContainer />
            </Provider>
        </>
    )
};

export default App;