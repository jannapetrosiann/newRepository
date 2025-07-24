import { useSelector, useDispatch } from "react-redux";
import * as listSlice from "./../../store/slices/listSlice.js";
import MyList from "./MyList/MyList";
import s from "./List.module.css";
const List = () => {
  const dispatch = useDispatch();

  const newText = useSelector((state) => state.list_slice.newText);

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
          onChange={(e) => dispatch(listSlice.updateList(e.target.value))}
          placeholder="Write your doing list"
          value={newText}
        />
      </div>
      <button onClick={() => dispatch(listSlice.addList())}>Add</button>
      <button onClick={() => dispatch(listSlice.logout())}>logOut</button>
      <MyList />
    </div>
  );
};

export default List;
