import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
   token: null,
   userId: null,
   error: null,
   message: null,
   loading: false,
   authRedirectPath: '/'
};

const authStart = (state, action) => {
   console.log('[Reducer] authStart', action);
   return updateObject(state, {
      error: null,
      loading: true
   })
}

const authSuccess = (state, action) => {
   console.log('[Reducer] authSuccess', action);
   return updateObject(state, {
      token: action.idToken,
      userId: action.userId,
      error: null,
      loading: false,
      authRedirectPath: `/${action.userId}`
   });
};

const authFail = (state, action) => {
   console.log('[Reducer] authFail', action);
   return updateObject(state, {
      error: action.error,
      loading: false,
   });
};

const signupSuccess = (state, action) => {
   console.log('[Reducer] signupSuccess', action);
   return updateObject(state, {
      error: null,
      loading: false,
      message: action.message
   });
};


const logout = (state, action) => {
   console.log('[Reducer] logout', action);
   return updateObject(state, {
      token: null,
      userId: null
   })
}

const setAuthRedirectPath = (state, action) => {
   console.log('[Reducer] setAuthRedirectPath', action);
   return updateObject(state, {
      authRedirectPath: action.path
   })
}

const reducer = (state = initialState, action) => {
   console.log('[MAIN Reducer] - action', action);
   switch (action.type) {
      case actionTypes.SIGNUP_SUCCESS:
         return signupSuccess(state, action);
      case actionTypes.AUTH_START:
         return authStart(state, action);
      case actionTypes.AUTH_SUCCESS:
         return authSuccess(state, action);
      case actionTypes.AUTH_FAIL:
         return authFail(state, action);
      case actionTypes.AUTH_LOGOUT:
         return logout(state, action);
      case actionTypes.SET_AUTH_REDIRECT_PATH:
         return setAuthRedirectPath(state, action);
      default:
         return state;
   }
}

export default reducer;
