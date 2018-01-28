const initialState = {
  web3: null,
  web3Error: false,
  metamask: {
    isLoggingIn: false,
    isLoggedIn: false
  }
}

// Connected = il y a une instance de web3
// instanciated = on est sur le bon network
    
export default (state = initialState, action) => {
  switch (action.type) {
    // WEB3 CONNECTION
    case 'CONNECT_TO_WEB3_SUCCESS':
      return {
        ...state,
        web3: action.payload.web3
      }
    case 'CONNECT_TO_WEB3_FAILED':
      return {
        ...state,
        web3Error: true
      }
    // METAMASK LOGIN STATUS
    case 'METAMASK_LOG_IN': {
      return {
        ...state,
        metamask: {
          isLoggedIn: true
        }
      }
    }
    case 'METAMASK_LOG_OUT': {
      return {
        ...state,
        metamask: {
          isLoggedIn: false
        }
      }
    }
    default:
      return state
  }
}
