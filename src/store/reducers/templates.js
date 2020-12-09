import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   error: null,
   loading: false,
   templates: null
};

const templatesFetchStart = (state, action) => {
   console.log('[Reducer] templatesFetchStart', action);
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const templatesFetchFail = (state, action) => {
   console.log('[Reducer] templatesFetchFail', action);
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const templatesFetchSuccess = (state, action) => {
   console.log('[Reducer] templatesFetchSuccess', action);
   return updateObject(state, {
      error: null,
      loading: false,
      templates: action.templates
   });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.TEMPLATES_FETCH_START:
         return templatesFetchStart(state, action);
      case actionTypes.TEMPLATES_FETCH_FAIL:
         return templatesFetchFail(state, action);
      case actionTypes.TEMPLATES_FETCH_SUCCESS:
         return templatesFetchSuccess(state, action);
      default:
         return state;
   }
}

export default reducer;
