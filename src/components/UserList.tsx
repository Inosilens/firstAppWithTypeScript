import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";

import { fetchUsers } from "../store/actions-creater/fetchUsers";
import { UseActions } from "../hooks/useActions";

export const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = UseActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  );
};
