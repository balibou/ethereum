import SimpleStorageContract from '../../build/contracts/SimpleStorage.json'
import { MetamaskLogIn, MetamaskLogOut } from '../actions/web3'

function checkMetamaskLogin(store, web3) {
  setInterval(() => {
    web3.eth.accounts.length > 0
    ? store.dispatch(MetamaskLogIn())
    : store.dispatch(MetamaskLogOut())
  }, 100);
}

function instantiateContract(store, web3) {
  // const contract = require('truffle-contract')
  // const simpleStorage = contract(SimpleStorageContract)
  // simpleStorage.setProvider(web3.currentProvider)

  // // Get accounts.
  // web3.eth.getAccounts((error, accounts) => {
  //   simpleStorage.deployed().then((instance) => {
  //   }).catch((err) => {
  //     // console.warn(err)
  //     // store.dispatch(MetamaskLogOut())
  //   })
  // })
}

export const connectToWeb3Middleware = store => next => action => {
  if(action.type === 'CONNECT_TO_WEB3_SUCCESS') {
    next(action);
    const { web3 } = store.getState().web3;

    // Check login
    // web3.eth.getAccounts((err, accounts) => {
    //   if(!accounts[0]) console.log('log out')
    //   if(accounts[0]) console.log('log in')
    // })

    // Check server
    // web3.version.getNetwork((err, netId) => {
    //   console.warn(err, netId)
    // })
    // instantiateContract(store, web3)
    checkMetamaskLogin(store, web3)
  } else {
    return next(action)
  }
}
