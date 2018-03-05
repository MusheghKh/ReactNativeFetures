import { SELECT_NEW_FEATURE, SEARCH_ON_SUBMIT, NAV_BAR_SAVE } from './actionTypes';

export const selectFeature = feature => ({ type: SELECT_NEW_FEATURE, feature })

export const search = searchKey => ({ type: SEARCH_ON_SUBMIT, searchKey })