import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   error: null,
   loading: false,
   userBoards: null,
   choosenBoard: null
};

const boardsFetchStart = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const boardsFetchFail = (state, action) => {
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const boardsFetchSuccess = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: false,
      userBoards: action.userBoards
   });
};

const singleBoardFetchSuccess = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: false,
      choosenBoard: action.choosenBoard
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
      case actionTypes.SINGLE_BOARD_FETCH_SUCCESS:
         return singleBoardFetchSuccess(state, action);
      default:
         return state;
   }
}

export default reducer;
