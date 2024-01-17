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
         <h1>ログイン         </h1>
            <div class="form-group">
                <label for="uname">ユーザーネーム:</label>
                <input type="text" class="form-control" id="username" placeholder="ユーザーネームを入力してください" name="username" onChange={usernameHandler} required/>
            </div>
            <br/>
            <div class="form-group">
                <label for="pwd">パスワード:</label>
                <input type="password" class="form-control" id="password" placeholder="パスワードを入力してください" name="password" onChange={passwordHandler} required/>
            </div>
            
            <br/>
            <button type="submit" class="btn btn-primary" onClick={submitHandler}>ログイン</button>
            
    </div>
  )
}

export default LoginDetail
