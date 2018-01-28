import getWeb3 from '../utils/getWeb3'

export const connectToWeb3 = () => (dispatch) => {
  getWeb3
    .then(data => {
      dispatch({
        type: 'CONNECT_TO_WEB3_SUCCESS',
        payload: data
      });
    })
    .catch((err) => {
      dispatch({
        type: 'CONNECT_TO_WEB3_FAILED'
      });
    })
}

export const MetamaskLogOut = () => (dispatch) => {
  return dispatch({
    type: 'METAMASK_LOG_OUT'
  });
};

export const MetamaskLogIn = () => (dispatch) => {
  dispatch({
    type: 'METAMASK_LOG_IN'
  });
};