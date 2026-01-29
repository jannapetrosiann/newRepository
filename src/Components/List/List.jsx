import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as listSlice from "./../../store/slices/listSlice.js";
import MyList from "./MyList/MyList";
import s from "./List.module.css";
const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newText, setnewText] = useState();

  const handleLogOut = () => {
    dispatch(listSlice.logout());
    navigate("/register");
  };

  const addText = () => {
    dispatch(listSlice.addList(newText));
    setnewText("");
  };

  const userFullName = JSON.parse(localStorage.getItem("currentUser"));
  const fullName = userFullName
    ? `${userFullName.firstName} ${userFullName.lastName}`
    : "Unknown";

  return (
    <div className={s.list}>
      <div>
        <div>
          <span className={s.user}>{fullName}</span>
        </div>
        <textarea
          onChange={(e) => setnewText(e.target.value)}
          placeholder="Write your doing list"
          value={newText}
        />
      </div>
      <button onClick={addText}>Add</button>
      <button onClick={handleLogOut}>logOut</button>
      <NavLink className={s.todos} to="/todos">
        ToDos
      </NavLink>
      <MyList />
    </div>
  );
};

export default List;
