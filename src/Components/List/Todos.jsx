import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./../../store/slices/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>loading is in process</p>;
  if (error) return <p>Error</p>;

  return (
    <ol>
      {list.map((item) => (
        <li>
          {item.title} {item.completed ? "✅" : "❌ "}
        </li>
      ))}
    </ol>
  );
};

export default Todos;
