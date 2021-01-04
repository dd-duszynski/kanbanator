import * as actionTypes from './actionTypes';

// ALL BOARDS ACTIONS -------------------------------------------------
export const boardsFetchStart = () => {
   return {
      type: actionTypes.BOARDS_FETCH_START,
   }
}

export const boardsFetchFail = (error) => {
   return {
      type: actionTypes.BOARDS_FETCH_FAIL,
      error: error,
   };
};

export const boardsFetchSuccess = (userBoards) => {
   return {
      type: actionTypes.BOARDS_FETCH_SUCCESS,
      userBoards: userBoards
   };
};

// SINGLE BOARDS ACTIONS -------------------------------------------------

export const singleBoardFetchStart = () => {
   return {
      type: actionTypes.SINGLE_BOARD_FETCH_START
   };
};

export const singleBoardFetchFail = (error) => {
   return {
      type: actionTypes.SINGLE_BOARD_FETCH_FAIL,
      error: error,
   };
};

export const singleBoardFetchSuccess = (singleBoard) => {
   console.log('[singleBoardFetchSuccess]', singleBoard);
   return {
      type: actionTypes.SINGLE_BOARD_FETCH_SUCCESS,
      singleBoard: singleBoard
   };
};

// Master Actions -----------------------------------------------------

export const getBoards = (userId) => {
   return (dispatch) => {
      dispatch(boardsFetchStart());
      fetch("http://localhost:5000/api/boards", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            userId: userId
         }),
      })
         .then(res => res.json())
         .then(data => {
            let fetchedBoards = [];
            for (let key in data.userBoards) {
               fetchedBoards.push({
                  ...data.userBoards[key]
               })
            }
            return dispatch(boardsFetchSuccess(fetchedBoards))
         })
         .catch((err) => {
            dispatch(boardsFetchFail(err))
         })
   };
};

export const getSingleBoard = (boardId) => {
   return (dispatch) => {
      dispatch(singleBoardFetchStart());
      fetch(`http://localhost:5000/api/boards/board/${boardId}`)
         .then(res => res.json())
         .then(data => {
            return dispatch(singleBoardFetchSuccess(data))
         })
         .catch((err) => {
            dispatch(singleBoardFetchFail(err))
         })
   };
};