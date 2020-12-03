import * as actionTypes from './actionTypes';

export const authStart = () => {
   return {
      type: actionTypes.AUTH_START,
   };
};

export const authSuccess = (token, userId) => {
   return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: token,
      userId: userId,
   };
};

export const authFail = (error) => {
   return {
      type: actionTypes.AUTH_FAIL,
      error: error,
   };
};

export const logout = () => {
   localStorage.removeItem('token');
   return {
      type: actionTypes.AUTH_LOGOUT,
   };
};


export const auth = (email, password) => {
   return (dispatch) => {
      dispatch(authStart());
      let responseData;
      fetch("http://localhost:5000/api/users/login", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: email,
            password: password
         }),
      })
         .then(res => res.json())
         .then(data => {
            responseData = data
            console.log('responseData',responseData)
            return data
         })
         .then(data => {
            localStorage.setItem('token', data.token)
            return data
         })
         .then(data =>
            dispatch(authSuccess(data.token, data.userId))
         )
         .catch((err) => {
            console.log(err);
         })
   };
};

export const setAuthRedirectPath = (path) => {
   return {
      type: actionTypes.SET_AUTH_REDIRECT_PATH,
      path: path,
   };
};

