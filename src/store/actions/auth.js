import * as actionTypes from './actionTypes';

export const authStart = () => {
   return {
      type: actionTypes.AUTH_START,
   };
};

export const authSuccess = (token, userId) => {
   return {
      type: actionTypes.AUTH_LOGIN_SUCCESS,
      idToken: token,
      userId: userId,
   };
};

export const signupSuccess = (message) => {
   return {
      type: actionTypes.AUTH_SIGNUP_SUCCESS,
      message: message
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
   localStorage.removeItem('userId');
   return {
      type: actionTypes.AUTH_LOGOUT,
   };
};

export const auth = (email, password) => {
   return (dispatch) => {
      dispatch(authStart());
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
            if (data.error !== null) {
               dispatch(authFail(data.error));
               return
            }
            return data
         })
         .then(data => {
            console.log('test', data);
            localStorage.setItem('token', data.token)
            localStorage.setItem('userId', data.userId)
            return data
         })
         .then(data =>
            dispatch(authSuccess(data.token, data.userId))
         )
         .catch((err) => {
            console.log('[authFail]', err);
         })
   };
};

export const sign = (name, email, password) => {
   return (dispatch) => {
      dispatch(authStart());
      fetch("http://localhost:5000/api/users/signup", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            name: name,
            email: email,
            password: password
         }),
      })
         .then(res => res.json())
         .then(data => {
            if (data.error !== null) {
               dispatch(authFail(data.error));
               return
            }
            dispatch(signupSuccess(data.message))
         })
         .catch((err) => {
            console.log('[authFail]', err);
         })
   };
};

export const setAuthRedirectPath = (path) => {
   return {
      type: actionTypes.AUTH_REDIRECT_PATH,
      path: path,
   };
};

export const authCheck = () => {
   return (dispatch) => {
      const token = localStorage.getItem('token')
      if (!token) {
         dispatch(logout())
      } else {
         const userId = localStorage.getItem('userId')
         dispatch(authSuccess(token, userId))
      }
   }
}