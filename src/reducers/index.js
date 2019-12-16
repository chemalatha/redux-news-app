import {combineReducers} from 'redux';
import articles from './article_reducer';
import gallery from './gallery_reducer';

const RootReducer = combineReducers({
    articles,gallery
});

export default RootReducer;