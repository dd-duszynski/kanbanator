import * as actionTypes from './actionTypes';
//ok
export const boardsFetchStart = () => {
   return {
      type: actionTypes.BOARDS_FETCH_START,
   }
}

//ok
export const boardsFetchFail = (error) => {
   return {
      type: actionTypes.BOARDS_FETCH_FAIL,
      error: error,
   };
};

//ok
export const boardsFetchSuccess = (userBoards) => {
   return {
      type: actionTypes.BOARDS_FETCH_SUCCESS,
      userBoards: userBoards
   };
};

//ok
export const singleBoardFetchSuccess = (choosenBoard) => {
   console.log('singleBoardFetchSuccess', choosenBoard);
   return {
      type: actionTypes.SINGLE_BOARD_FETCH_SUCCESS,
      choosenBoard: choosenBoard
   };
};

//ok - export
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
            console.log('fetchedBoards', fetchedBoards);
            return dispatch(boardsFetchSuccess(fetchedBoards))
         })
         .catch((err) => {
            console.log('[ACTION - getBoards]', err);
         })
   };
};

//test --------------------------------------------------
export const getSingleBoard = (boardId) => {
   return (dispatch) => {
      dispatch(boardsFetchStart());
      let fetchedBoard, lists;
      fetch(`http://localhost:5000/api/boards/board/${boardId}`)
         .then(res => res.json())
         .then(data => {
            fetchedBoard = [];
            for (let key in data.choosenBoard) {
               fetchedBoard.push({
                  ...data.choosenBoard[key]
               })
            }
         })
         .catch((err) => {
            console.log('[ACTION - getSingleBoard]', err);
         })
      fetch(`http://localhost:5000/api/templates/lists/${boardId}`)
         .then(res => res.json())
         .then(data => {
            lists = data.lists
            return dispatch(singleBoardFetchSuccess([fetchedBoard, lists]))
         })
         .catch((err) => {
            console.log('[ACTION - templatesGetSingle - lists]', err);
         })
   };
};