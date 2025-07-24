import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  newText: "",
};

const listSlice = createSlice({
  name: "list_slice",
  initialState,
  reducers: {
    addList: (state) => {
      if (!state.newText.trim()) return;
      return {
        ...state,
        list: state.list.concat({
          id: new Date().getTime(),
          checkMark:
            "https://as2.ftcdn.net/jpg/06/01/98/99/1000_F_601989911_qULd3Bz9Nujn7izxcVTa76E0jnjixugj.jpg",
          message: state.newText,
        }),
        newText: "",
      };
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    updateList: (state, action) => {
      state.newText = action.payload;
    },
    logout: () => {
      localStorage.removeItem("currentUser");
      return initialState;
    },
    taskForUser: (state, action) => {
      const { id: taskId, userId } = action.payload;
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === taskId ? { ...item, userId } : item,
        ),
      };
    },
  },
});

export const { addList, deleteItem, updateList, logout, taskForUser } =
  listSlice.actions;
export default listSlice.reducer;
