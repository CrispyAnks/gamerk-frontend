import React,{ useCallback, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';


function SignUpDetail() {
  const history = useHistory();
  const [user, setUser] = useState({
    username:'',
    password:'',
    gender:'',
    intro:'',
    nickname:''
  });
  
  const usernameHandler = ((e) => {
      setUser(prevState =>({...prevState, username: e.target.value}));
      console.log(user.username)
      
  })
  const passwordHandler = ((e) => {
    setUser(prevState =>({...prevState, password: e.target.value}));
    console.log(user.password)
  })
  const genderHandler = ((e) => {
    setUser(prevState =>({...prevState, gender: e.target.value}));
    
  })
  const introHandler = ((e) => {
    setUser(prevState =>({...prevState, intro: e.target.value}));
    
  })
  const nicknameHandler = ((e) => {
    setUser(prevState =>({...prevState, nickname: e.target.value}));
    
  })

  const submitHandler = ( (e) =>{
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "user_id": "0",
      "username": user.username,
      "password": user.password,
      "bio_id": "0",
      "nickname": user.nickname,
      "gender": user.gender,
      "intro": user.intro,
      "img_src": "0"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = fetch("/api/user/signup", requestOptions)
      .then(response => {
        response.json()
        console.log(response)})
      .then(result => {
       console.log(result)
        if(result.code == '0')
                                console.log(result);
                                
                                history.push('/');
        if(result.code == '1'){console.log(result)}
      })
      .catch(error => console.log('error', error));
    
      
    
});

  return (
    <div>
      <h1>サインアップ</h1>
       <Form>
      <Form.Group className="mb-3">
        <Form.Label>ユーザーネーム</Form.Label>
        <Form.Control type="text" placeholder="ユーザーネームを入力してください" name="username" onChange={usernameHandler}/>
        <Form.Text className="text-muted">
          １０文字まで
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>パスワード</Form.Label>
        <Form.Control type="password" placeholder="パスワードを設定してください" name="password" onChange={passwordHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ニックネーム</Form.Label>
        <Form.Control type="text" placeholder="ニックネームを設定してください" name="nickname" onChange={nicknameHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>性別</Form.Label>
        <Form.Control type="text" placeholder="男性/女性/まだ分からない" name="gender" onChange={genderHandler}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>自己紹介</Form.Label>
        <Form.Control as="textarea" rows={3} name="言いたい話" onChange={introHandler}/>
      </Form.Group>
      <button type="submit" class="btn btn-primary" onClick={submitHandler}>サインアップ</button>
    </Form>
    </div>
  )
}

export default SignUpDetail
