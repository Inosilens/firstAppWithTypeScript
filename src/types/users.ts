export interface UserState  {
    users : any[];
    loading : boolean;
    error : null | string

}
export enum UserActionsType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCES = "FETCH_USERS_SUCCES",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUsersAction {
    type : UserActionsType.FETCH_USERS;

}
interface FetchUsersSuccesAction {
    type : UserActionsType.FETCH_USERS_SUCCES;
    payload : any[]


}
interface FetchUsersErrorAction {
    type : UserActionsType.FETCH_USERS_ERROR;
    payload : string

}


export type UserAction =  FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccesAction
