import {
  MetamaskLogIn,
  MetamaskLogOut,
  ConnectWeb3Network,
  DisonnectWeb3Network,
} from '../actions/web3'

function checkMetamaskLogin(store, web3) {
  setInterval(() => {
    web3.eth.accounts.length > 0
    ? store.dispatch(MetamaskLogIn())
    : store.dispatch(MetamaskLogOut())
  }, 100);
}

function checkNetwork(store, web3) {
  web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "4447":
        store.dispatch(ConnectWeb3Network())
        break
      default:
        store.dispatch(DisonnectWeb3Network())
    }
  })
}

export const connectToWeb3Middleware = store => next => action => {
  if(action.type === 'CONNECT_TO_WEB3_SUCCESS') {
    next(action);
    const { web3 } = store.getState().web3;
    checkMetamaskLogin(store, web3)
    checkNetwork(store, web3)
  } else {
    return next(action)
  }
}
