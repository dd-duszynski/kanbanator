import * as actionTypes from './actionTypes';

// ALL TEMPLATES -------------------------------------------------
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

export const templatesGetAll = () => {
   return (dispatch) => {
      dispatch(templatesFetchStart());
      fetch("http://localhost:5000/api/templates")
         .then(res => res.json())
         .then(data => {
            console.log(data);
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


// SINGLE TEMPLATE -------------------------------------------------

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
