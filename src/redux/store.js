import { createStore, applyMiddleware } from 'redux';
//  异步操作
import thunk from 'redux-thunk';
// 调试
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
let middleware = applyMiddleware(thunk);
// 如果在开发环境,包括调试工具
if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(middleware);
}
export default createStore(reducers, middleware);
