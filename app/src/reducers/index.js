import {FETCH_DATA_FAIL, FETCH_DATA_LOADING, FETCH_DATA_SUCCESS} from './../actions/index'

const initialState = {
     data: null,
     isFetching: false,
     error: ''
}

export const reducer = (state = initialState, action) => {
     switch(action.type){
          case(FETCH_DATA_LOADING):
               return({
                    ...state,
                    isFetching: true
               })
          case(FETCH_DATA_SUCCESS):
               return({
                    ...state,
                    data: action.payload,
                    isFetching: false
               })
          case(FETCH_DATA_FAIL):
               return({
                    ...state,
                    error: action.payload,
                    isFetching: false
               })
          default:
               return state
     }
}