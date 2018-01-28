import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import web3 from './web3'

export default combineReducers({
  router: routerReducer,
  counter,
  web3
})