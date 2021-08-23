export interface TodoState {
    todos : any[];
    loading : boolean;
    error : null | string;
    page : number;
    limit : number ;

}
export enum TodoActionsType {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODO_SUCESS="FETCH_TODO_SUCESS",
    FETCH_TODO_ERROR="FETCH_TODO_ERROR",
    SET_TODO_PAGE="SET_TODO_PAGE"
}
interface FetchTodoActions {
    type : TodoActionsType.FETCH_TODOS
}
interface FetchTodoSuccesActions {
    type : TodoActionsType.FETCH_TODO_SUCESS
    payload : any[]
}
interface FetchTodoErrorActions {
    type : TodoActionsType.FETCH_TODO_ERROR
    payload:string
}
interface FetchTodoPageActions {
    type : TodoActionsType.SET_TODO_PAGE
    payload:number
}

export type TodoActions = FetchTodoActions | FetchTodoSuccesActions | FetchTodoErrorActions|FetchTodoPageActions