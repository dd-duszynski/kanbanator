export {
   templatesFetchStart,
   templatesFetchFail,
   templatesFetchSuccess,
   templatesGetAll,
   
   templateSingleFetchStart,
   templateSingleFetchFail,
   templateSingleFetchSuccess,
   templatesGetSingle
} from './templates'

export {
   getBoards,
   getSingleBoard
} from './boards'

export {
   authStart,
   authSuccess,
   signupSuccess,
   authFail,
   setUserBoards,
   logout,
   auth,
   sign,
   setAuthRedirectPath,
   authCheck
} from './auth'