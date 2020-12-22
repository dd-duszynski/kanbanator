import * as actionTypes from './actionTypes';


// TEMPLATES -------------------------------------------------
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

export const templatesGetSingle = (templateURL) => {
   return (dispatch) => {
      dispatch(templateSingleFetchStart());
      let template, lists;
      fetch(`http://localhost:5000/api/templates/${templateURL}`)
         .then(res => res.json())
         .then(data => {
            template = data.singleTemplate
         })
         .catch((err) => {
            console.log('[ACTION - templatesGetSingle - template]', err);
         })
      fetch(`http://localhost:5000/api/templates/lists/${templateURL}`)
         .then(res => res.json())
         .then(data => {
            lists = data.lists
            return dispatch(templateSingleFetchSuccess([template, lists]))
         })
         .catch((err) => {
            console.log('[ACTION - templatesGetSingle - lists]', err);
         })
   };
};
