import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   token: null,
   userId: null,
   error: null,
   message: null,
   loading: false,
   boards: JSON.parse(localStorage.getItem('boards')),
   authRedirectPath: '/'
};

const authStart = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const authSuccess = (state, action) => {
   return updateObject(state, {
      token: action.idToken,
      userId: action.userId,
      error: null,
      loading: false,
      authRedirectPath: `/${action.userId}`
   });
};

const authFail = (state, action) => {
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const signupSuccess = (state, action) => {
   return updateObject(state, {
      error: null,
      loading: false,
      message: action.message
   });
};


const logout = (state, action) => {
   return updateObject(state, {
      token: null,
      userId: null,
      boards: null
   })
}

const setAuthRedirectPath = (state, action) => {
   return updateObject(state, {
      authRedirectPath: action.path
   })
}

const authSetUserBoards = (state, action) => {
   return updateObject(state, {
      boards: action.boards
   })
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.AUTH_SIGNUP_SUCCESS:
         return signupSuccess(state, action);
      case actionTypes.AUTH_START:
         return authStart(state, action);
      case actionTypes.AUTH_LOGIN_SUCCESS:
         return authSuccess(state, action);
      case actionTypes.AUTH_FAIL:
         return authFail(state, action);
      case actionTypes.AUTH_LOGOUT:
         return logout(state, action);
      case actionTypes.AUTH_SET_USER_BOARDS:
         return authSetUserBoards(state, action);
      case actionTypes.AUTH_REDIRECT_PATH:
         return setAuthRedirectPath(state, action);
      default:
         return state;
   }
}

export default reducer;
