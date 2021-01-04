import * as actionTypes from './actionTypes';

// ALL TEMPLATES ACTIONS -------------------------------------------------
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

// SINGLE TEMPLATE ACTIONS -------------------------------------------------

export const templateSingleFetchStart = () => {
   return {
      type: actionTypes.TEMPLATE_SINGLE_FETCH_START,
   }
}

export const templateSingleFetchFail = (error) => {
   return {
      type: actionTypes.TEMPLATE_SINGLE_FETCH_FAIL,
      error: error,
   };
};

export const templateSingleFetchSuccess = (singleTemplate) => {
   return {
      type: actionTypes.TEMPLATE_SINGLE_FETCH_SUCCESS,
      singleTemplate: singleTemplate
   };
};

// Master Actions -----------------------------------------------------

export const templatesGetAll = () => {
   return (dispatch) => {
      dispatch(templatesFetchStart());
      fetch("http://localhost:5000/api/templates")
         .then(res => res.json())
         .then(data => {
            let templates = [];
            for (let key in data) {
               templates.push({
                  ...data[key]
               })
            }
            return dispatch(templatesFetchSuccess(templates))
         })
         .catch((err) => {
            dispatch(templatesFetchFail(err));
         })
   };
};

export const templateGetSingle = (templateURL) => {
   return (dispatch) => {
      dispatch(templateSingleFetchStart());
      fetch(`http://localhost:5000/api/templates/${templateURL}`)
         .then(res => res.json())
         .then(data => {
            dispatch(templateSingleFetchSuccess(data))
         })
         .catch((err) => {
            dispatch(templateSingleFetchFail(err))
         })
   };
};
