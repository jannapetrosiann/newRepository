import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as listSlice from "./../../store/slices/listSlice.js";
import MyList from "./MyList/MyList";
import s from "./List.module.css";
const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list_slice.list);
  const newText = useSelector((state) => state.list_slice.newText);

  const userFullName = JSON.parse(localStorage.getItem("currentUser"));
  const fullName = userFullName
    ? `${userFullName.firstName} ${userFullName.lastName}`
    : "Unknown";

  const AddList = () => {
    dispatch(listSlice.addList());
  };
  const handleDelete = (id) => {
    dispatch(listSlice.deleteItem(id));
  };

  const changeList = (e) => {
    dispatch(listSlice.updateList(e.target.value));
  };

  const LogOut = () => {
    dispatch(listSlice.logout());
    navigate("/register");
  };

  return (
    <div className={s.list}>
      <div>
        <div>
          <span className={s.user}>{fullName}</span>
        </div>
        <textarea
          onChange={changeList}
          placeholder="Write your doing list"
          value={newText}
        />
      </div>
      <button onClick={AddList}>Add</button>
      <button onClick={LogOut}>logOut</button>
      <MyList list={list} />
    </div>
  );
};

export default List;
