let rerenderEntireTree = () => {};

let store = {
  state: {
    list: [],
  },
};
window.state = store;
export const addList = () => {
  let newText = {
    id: new Date().getTime(),
    CheckMark:
      "https://as2.ftcdn.net/jpg/06/01/98/99/1000_F_601989911_qULd3Bz9Nujn7izxcVTa76E0jnjixugj.jpg",
    message: store.state.newText,
  };
  store.state.list.push(newText);
  store.state.newText = "";
  rerenderEntireTree();
};

export const deleteItem = (id) => {
  store.state.list = store.state.list.filter((item) => item.id !== id);
  rerenderEntireTree();
};

export const updateList = (text) => {
  store.state.newText = text;
  rerenderEntireTree();
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};
export default store;
