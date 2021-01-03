import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   error: null,
   loading: false,
   templates: null,
   list: null,
   singleTemplate: null
};

// TEMPLATES
const templatesFetchStart = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const templatesFetchFail = (state, action) => {
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const templatesFetchSuccess = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: false,
      templates: action.templates
   });
};

// SINGLE TEMPLATE
const templateSingleFetchStart = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const templateSingleFetchFail = (state, action) => {
   console.log('REDUCER templateSingleFetchFail', action);
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const templateSingleFetchSuccess = (state, action) => {
   console.log('REDUCER templateSingleFetchSuccess', action);
   return updateObject(state, {
      error: null,
      loading: false,
      singleTemplate: action.singleTemplate
   })
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.TEMPLATES_FETCH_START:
         return templatesFetchStart(state, action);
      case actionTypes.TEMPLATES_FETCH_FAIL:
         return templatesFetchFail(state, action);
      case actionTypes.TEMPLATES_FETCH_SUCCESS:
         return templatesFetchSuccess(state, action);
      case actionTypes.TEMPLATE_SINGLE_FETCH_START:
         return templateSingleFetchStart(state, action);
      case actionTypes.TEMPLATE_SINGLE_FETCH_FAIL:
         return templateSingleFetchFail(state, action);
      case actionTypes.TEMPLATE_SINGLE_FETCH_SUCCESS:
         return templateSingleFetchSuccess(state, action);
      default:
         return state;
   }
}

export default reducer;
