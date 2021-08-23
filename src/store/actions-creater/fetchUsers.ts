import { UserAction, UserActionsType } from "../../types/users";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispacth: Dispatch<UserAction>) => {
    try {
      dispacth({ type: UserActionsType.FETCH_USERS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      dispacth({
        type: UserActionsType.FETCH_USERS_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispacth({
        type: UserActionsType.FETCH_USERS_ERROR,
        payload: `ПРоизошла ошибка при загрузке пользователя`,
      });
    }
  };
};
