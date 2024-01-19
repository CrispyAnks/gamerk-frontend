import React, { useState } from 'react'
import NavBar from '../../Nav/NavBar'
import styles from './hello.module.css'
import SearchResult from '../../Functions/SearchResult'

function Search() {
  
  const [searchRes, setSearchRes] = useState();
  const [gameName, setGameName] = useState({
    gamename:''
  });
  const inputHandler = ((e) =>{
    setGameName(prevState =>({...prevState, gamename: e.target.value}));
    console.log(gameName)
  })
  const SearchHandler = (() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": gameName.gamename
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

fetch("/api/index/search", requestOptions)
  .then(response => response.json())
  .then(result => {
    setSearchRes(result.data);
    console.log(result.data)
    console.log(searchRes);
  })
  .catch(error => console.log('error', error));
    
  })
  return (
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class="row" style={{margin:'2rem 4rem',padding:'0', color: 'rgba(120, 120, 120, 1)'}}>
         <h1 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'Hiragino Sans',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>Search</h1>
                <div class="input-group" style={{margin:'1rem auto'}}>
                    <input type="text" class="form-control" placeholder="Find a game?" onChange={inputHandler} required/>
                    <button class="btn btn-warning" type="submit" onClick={SearchHandler}>Go</button>
                </div>
      </div>
      <div class="row">
        {searchRes != null && searchRes.map(res => <SearchResult key={res.gameid} res={res}/>)}
      </div>

    </div>
  )
}

export default Search
