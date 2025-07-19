import s from './MyList.module.css';
import React from 'react';

const MyList = (props) => {

const users = JSON.parse(localStorage.getItem('users'));
function taskForUser(task, userId){
task.userId = userId;
}
  return (
    <div className={s.ToDoList}>
      {props.list.map((element) => (
        <div>
          <img className={s.img} alt="completed" src={element.CheckMark} />
          <span className={s.item}>{element.message}</span>
          <button onClick={() => props.handle(element.id)}>Delete</button>
          <select onChange={(e)=>taskForUser(element, e.target.value)} value={element.userId}>
            <option>Choose user</option>
            {users.map(user =>(
              <option>
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
