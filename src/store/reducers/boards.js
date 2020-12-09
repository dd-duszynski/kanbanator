import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   error: null,
   loading: false,
   userBoards: null
};

const boardsFetchStart = (state, action) => {
   console.log('[Reducer] boardsStartFetch', action);
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const boardsFetchFail = (state, action) => {
   console.log('[Reducer] boardsFetchFail', action);
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const boardsFetchSuccess = (state, action) => {
   console.log('[Reducer] boardsFetchSuccess', action);
   return updateObject(state, {
      error: null,
      loading: false,
      userBoards: action.userBoards
   });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.BOARDS_FETCH_START:
         return boardsFetchStart(state, action);
      case actionTypes.BOARDS_FETCH_FAIL:
         return boardsFetchFail(state, action);
      case actionTypes.BOARDS_FETCH_SUCCESS:
         return boardsFetchSuccess(state, action);
      default:
         return state;
   }
}

export default reducer;
