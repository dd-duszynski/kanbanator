// import * as actionTypes from './actionTypes';

export const addCard = (dataObj) => {
   return () => {
      fetch('http://localhost:5000/api/cards/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(dataObj),
      })
         .then(res => res.json())
         .then(data => {
            console.log('[addCard] Success:', data);
         })
         .catch((error) => {
            console.error('Error:', error);
         });
   }
}