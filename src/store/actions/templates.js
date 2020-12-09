import * as actionTypes from './actionTypes';

export const templatesFetchStart = () => {
   return {
      type: actionTypes.TEMPLATES_FETCH_START,
   }
}

export const templatesFetchFail = (error) => {
   return {
      type: actionTypes.TEMPLATES_FETCH_FAIL,
      error: error,
   };
};

export const templatesFetchSuccess = (templates) => {
   return {
      type: actionTypes.TEMPLATES_FETCH_SUCCESS,
      templates: templates
   };
};

export const getTemplates = (userId) => {
   return (dispatch) => {
      dispatch(templatesFetchStart());
      fetch("http://localhost:5000/api/templates")
         .then(res => res.json())
         .then(data => {
            console.log('getTemplates', data);
            let templates = [];
            for (let key in data.templates) {
               templates.push({
                  ...data.templates[key]
               })
            }
            return dispatch(templatesFetchSuccess(templates))
         })
         .catch((err) => {
            console.log('[ACTION - getTemplates]', err);
         })
   };
};