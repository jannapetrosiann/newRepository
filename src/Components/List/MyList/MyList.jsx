import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./MyList.module.css";
import { deleteItem, taskForUser } from "./../../../store/slices/listSlice";

const MyList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list_slice.list);

  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <div className={s.ToDoList}>
      {list.map((element) => (
        <div>
          <img className={s.img} alt="completed" src={element.CheckMark} />
          <span className={s.item}>{element.message}</span>
          <button onClick={() => dispatch(deleteItem(element.id))}>
            Delete
          </button>
          <select
            onChange={(e) =>
              dispatch(taskForUser({ id: element.id, userId: e.target.value }))
            }
            value={element.userId}
          >
            <option value="">Choose user</option>
            {users.map((user, index) => (
              <option key={index} value={`${user.firstName} ${user.lastName}`}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MyList;
