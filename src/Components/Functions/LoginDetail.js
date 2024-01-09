import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginDetail() {
  const history = useHistory();
  const [user, setUser] = useState({
    username:'',
    password:''
  });
  const [loginResult, setLoginResult] = useState();
  const usernameHandler = ((e) => {
      setUser(prevState =>({...prevState, username: e.target.value}));
      
  })
  const passwordHandler = ((e) => {
    setUser(prevState =>({...prevState, password: e.target.value}));
    
  })
  
  const submitHandler = ( () =>{
      var formdata = new FormData();
      formdata.append("username", user.username);
      formdata.append("password", user.password);

      var requestOptions = {
        method: 'POST',
        body: formdata,  
      };

      const res = fetch("/api/user/login", requestOptions)
        .then(response => response.json())
        .then(result => {
         console.log(result)
          if(result.code == '0'){setLoginResult(result.data.userid);
                                  localStorage.setItem('userid', result.data.userid)
                                  localStorage.setItem('token', result.data.token)
                                  localStorage.setItem('username', user.username)}
                                  console.log(result.data.userid)
                                  console.log(result.data.token)
                                  history.push('/');
          if(result.code == '1'){setLoginResult(result.message)}
        })
        .catch(error => console.log('error', error));
      
        
      
});


  return (
    <div>
         <h1>Login</h1>
            <div class="form-group">
                <label for="uname">Username:</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" onChange={usernameHandler} required/>
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" onChange={passwordHandler} required/>
            </div>
            
            <br/>
            <button type="submit" class="btn btn-primary" onClick={submitHandler}>LOG IN</button>
            {(loginResult != null && <p>{loginResult}</p>)}
    </div>
  )
}

export default LoginDetail
