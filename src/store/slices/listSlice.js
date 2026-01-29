import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  currentUser: localStorage.getItem("currentUser") || null,
};

const listSlice = createSlice({
  name: "list_slice",
  initialState,
  reducers: {
    addList: (state, action) => {
      const text = action.payload;
      if (!text || !text.trim()) return state;
      return {
        ...state,
        list: state.list.concat({
          id: new Date().getTime(),
          checkMark:
            "https://as2.ftcdn.net/jpg/06/01/98/99/1000_F_601989911_qULd3Bz9Nujn7izxcVTa76E0jnjixugj.jpg",
          message: text,
        }),
      };
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
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

export const { addList, deleteItem, logout, taskForUser } = listSlice.actions;
export default listSlice.reducer;
