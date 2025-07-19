
import './App.css';
import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hello from './Components/Hello/Hello.jsx';
import List from './Components/List/List.jsx'
import Register from './Components/Register/Register.jsx'
import SignIn from './Components/SignIn/SignIn.jsx';



const App=(props)=>{
  return (
    <BrowserRouter>
    <div className='whole'>
      <Header/>
      <Navbar/>
   
      <div className='content'>
        <Routes >
        <Route path="/hello" element={<Hello />}/>
        <Route path="/list" element={<List 
                                     state={props.store.state} 
                                     addList={props.addList} 
                                     deleteItem={props.deleteItem}
                                     updateList={props.updateList}
                                     logout={props.logout}
                                   />}/>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  )
};

export default App;