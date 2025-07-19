
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addList, deleteItem, subscribe, updateList, logout } from './redux/store';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store}
                 addList={addList} 
                 deleteItem={deleteItem}
                 updateList={updateList}
                 logout={logout} />
        </React.StrictMode>
    );
};

rerenderEntireTree();
subscribe(rerenderEntireTree);
reportWebVitals();



