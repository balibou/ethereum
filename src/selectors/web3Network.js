import { createSelector } from 'reselect';

export const web3NetworkSelector = state => state.web3Network;

export const web3NetworkIsConnectedSelector = createSelector(
  web3NetworkSelector,
  web3Network => web3Network.isConnected,
);