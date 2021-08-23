import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { UseActions } from "../hooks/useActions";

export const TodoList: React.FC = () => {
  const { todos, page, error, loading, limit } = useTypedSelector(
    (state) => state.todos
  );
  const { todo } = UseActions();
  useEffect(() => {
    todo(page, limit);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          {item.id}-{item.title}
        </div>
      ))}
    </div>
  );
};
