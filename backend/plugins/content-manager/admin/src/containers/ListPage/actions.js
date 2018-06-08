/**
 *
 * ListPage actions
 *
 */

import {
  ADD_FILTER,
  CHANGE_PARAMS,
  DELETE_DATA,
  DELETE_DATA_SUCCESS,
  GET_DATA,
  GET_DATA_SUCCEEDED,
  ON_CHANGE,
  ON_CLICK_REMOVE,
  ON_TOGGLE_FILTERS,
  OPEN_FILTERS_WITH_SELECTION,
  REMOVE_ALL_FILTERS,
  REMOVE_FILTER,
  SET_PARAMS,
  SUBMIT,
} from './constants';

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    filter,
  };
}

export function changeParams({ target }) {
  return {
    type: CHANGE_PARAMS,
    keys: target.name.split('.'),
    value: target.value,
  };
}

export function deleteData(id, modelName, source) {
  return {
    type: DELETE_DATA,
    id,
    modelName,
    source,
  };
}

export function deleteDataSuccess(id) {
  return {
    type: DELETE_DATA_SUCCESS,
    id,
  };
}

export function getData(currentModel, source) {
  return {
    type: GET_DATA,
    currentModel,
    source,
  };
}

export function getDataSucceeded(data) {
  return {
    type: GET_DATA_SUCCEEDED,
    data,
  };
}

export function onChange(index, key, value) {
  return {
    type: ON_CHANGE,
    index,
    key,
    value,
  };
}

export function onClickRemove(index) {
  return {
    type: ON_CLICK_REMOVE,
    index,
  };
}

export function openFiltersWithSelections(index) {
  return {
    type: OPEN_FILTERS_WITH_SELECTION,
    index,
  };
}

export function onToggleFilters() {
  return {
    type: ON_TOGGLE_FILTERS,
  };
}

export function removeAllFilters() {
  return {
    type: REMOVE_ALL_FILTERS,
  };
}

export function removeFilter(index) {
  return {
    type: REMOVE_FILTER,
    index,
  };
}

export function setParams(params, filters) {
  return {
    type: SET_PARAMS,
    params,
    filters,
  };
}

export function submit() {
  return {
    type: SUBMIT,
  };
}
