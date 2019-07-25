// reducer2개를 합쳐준다
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter , ui
});

export default reducers;