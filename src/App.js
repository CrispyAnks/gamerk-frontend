import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import Hello from './Components/Pages/Hello/Hello';
import Catalog from './Components/Pages/Hello/Catalog';
import News from './Components/Pages/Hello/News';
import Search from './Components/Pages/Hello/Search';
import DataManage from './Components/Pages/Mypage/DataManage';
import Game from './Components/Pages/Mypage/Game';
import Login from './Components/Pages/Mypage/Login';
import Mypage from './Components/Pages/Mypage/Mypage';
import SignUp from './Components/Pages/Mypage/SignUp';
import Portfolio from './Components/Pages/Hello/Portfolio';
import LogOut from './Components/Functions/LogOut';



function App() {
  return (
    <>
    <div className="App">
      <Route exact path="/" component={Hello}/>
      <Route exact path="/catalog" component={Catalog}/>
      <Route exact path="/news" component={News}/>
      <Route exact path="/about" component={Portfolio}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/admin" component={DataManage}/>
      <Route exact path="/game/:id" component={Game}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/mypage/:id" component={Mypage}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/logout" component={LogOut}/>
      
    </div>
    </>
  );
}

export default App;
