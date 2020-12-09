import * as actionTypes from './actionTypes';

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
   console.log('[boardsFetchSuccess]', userBoards);
   return {
      type: actionTypes.BOARDS_FETCH_SUCCESS,
      userBoards: userBoards
   };
};

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
            console.log('tu musi coś być: ',data);
            let fetchedBoards = [];
            for (let key in data.userBoards) {
               fetchedBoards.push({
                  ...data.userBoards[key]
               })
            }
            console.log('fetchedBoards',fetchedBoards);
            return dispatch(boardsFetchSuccess(fetchedBoards))
         })
         .catch((err) => {
            console.log('[ACTION - getBoards]', err);
         })
   };
};