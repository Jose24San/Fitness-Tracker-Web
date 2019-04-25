import { createSelector } from 'reselect';


export const getRouting = state => state.routing;

export const getRedirectedFromPage = createSelector(
  state => getRouting( state ),
  routing => routing.redirectFrom,
);
