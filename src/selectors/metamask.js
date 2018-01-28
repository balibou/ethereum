import { createSelector } from 'reselect';

export const metamaskSelector = state => state.metamask;

export const metamaskIsLoggedInSelector = createSelector(
  metamaskSelector,
  metamask => metamask.isLoggedIn,
);

export const metamaskIsLoggingInSelector = createSelector(
  metamaskSelector,
  metamask => metamask.isLoggingIn,
);
