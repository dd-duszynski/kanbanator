import * as actionTypes from './actionTypes';
import { setUserBoards } from './index'

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
   return {
      type: actionTypes.SINGLE_BOARD_FETCH_SUCCESS,
      singleBoard: singleBoard
   };
};

// CREATE BOARD ACTIONS ---------------------------------------

export const createBoardStart = () => {
   return {
      type: actionTypes.BOARD_CREATE_START,
   }
}
export const createBoardFail = (err) => {
   return {
      type: actionTypes.BOARD_CREATE_FAIL,
      error: err,
   };
}
export const createBoardSuccess = () => {
   return {
      type: actionTypes.BOARD_CREATE_SUCCESS,
   };
}

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
            dispatch(setUserBoards(data.userBoards))
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

export const createBoard = (title, description, image_url, author) => {
   const reqBody = {
      boardId: Math.floor(Math.random() * 1000000),
      title: title,
      description: description,
      author: author,
      image_url: image_url
   }
   return (dispatch) => {
      dispatch(createBoardStart())
      fetch('http://localhost:5000/api/boards/board', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(reqBody)
      })
         .then(res => res.json())
         .then(() => {
            dispatch(getBoards(author))
            dispatch(createBoardSuccess())
         })
         .catch((err) => {
            return dispatch(createBoardFail(err))
         })
   }
}