import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyList from "./MyList/MyList";
import s from "./List.module.css";

const List = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const userFullName = JSON.parse(localStorage.getItem("currentUser"));
  const fullName = userFullName
    ? `${userFullName.firstName} ${userFullName.lastName}`
    : "Unknown";

  const AddList = () => {
    props.addList();
    setText("");
  };
  const handle = (id) => {
    props.deleteItem(id);
  };

  const changeList = (e) => {
    setText(e.target.value);
    props.updateList(e.target.value);
  };

  const LogOut = () => {
    props.logout();
    navigate("/register");
    window.location.reload();
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
          value={text}
        />
      </div>
      <button onClick={AddList}>Add</button>
      <button onClick={LogOut}>logOut</button>
      <MyList
        list={props.state.list}
        newText={text}
        addList={props.addList}
        deleteItem={props.deleteItem}
        updateList={props.updateList}
        handle={handle}
      />
    </div>
  );
};

export default List;
