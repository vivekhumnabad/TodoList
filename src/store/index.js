import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import throttle from '../middleware/throttle';
import analytics from '../middleware/analytics';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(
  throttle,
  analytics
  ));

export default store = createStore(rootReducer, enhancer)
