import axios from 'axios'

export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export const getData = () => {
     return dispatch => {
          dispatch({type: FETCH_DATA_LOADING})

          axios
          .get('https://covid-api.mmediagroup.fr/v1/cases')
          .then(res => {
               dispatch({type:FETCH_DATA_SUCCESS, payload:res.data})
          })
          .catch(err => {
               dispatch({type:FETCH_DATA_FAIL, payload:err})
          })
     }
}

export const fetchDataLoading = () => {
     return({
          type:FETCH_DATA_LOADING
     })
}
export const fetchDataSuccess = (data) => {
     return({
          type:FETCH_DATA_SUCCESS,
          payload:data
     })
}
export const fetchDataFail = (err) => {
     return({
          type:FETCH_DATA_FAIL,
          payload:err
     })
}