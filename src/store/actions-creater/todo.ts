import {Dispatch} from "redux";
import axios from "axios";
import {TodoActions, TodoActionsType} from "../../types/todos";

export const todo = (page=1,limit=10)=>
{
    return async (dispacth:Dispatch<TodoActions>) => {
        try {
            dispacth({type:TodoActionsType.FETCH_TODOS})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`,{
                params: {_page:page,_limit:limit}
            })
            dispacth({type:TodoActionsType.FETCH_TODO_SUCESS,payload:response.data})
        }
        catch (e){
            dispacth({type:TodoActionsType.FETCH_TODO_ERROR,payload:`ПРоизошла ошибка при загрузке пользователя`})

        }
    }
}

export function setTodoPage  (page : number): TodoActions {
    return {type:TodoActionsType.SET_TODO_PAGE,payload:page}

}