import {TodoActions, TodoActionsType, TodoState} from "../../types/todos";
const defaultState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

export const todoReducer = (state :TodoState = defaultState,action :TodoActions):TodoState=>{
    switch (action.type){
        case TodoActionsType.FETCH_TODOS:
            return {...state,loading:true}
        case TodoActionsType.FETCH_TODO_SUCESS:
            return {...state,loading:false,todos:action.payload}
        case TodoActionsType.FETCH_TODO_ERROR:
            return{...state,loading:false,error:action.payload}
        case TodoActionsType.SET_TODO_PAGE:
            return{...state,page:action.payload}


        default:return state
    }
}