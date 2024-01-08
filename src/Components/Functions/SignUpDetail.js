import React,{ useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
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
      <h1>Sign up</h1>
       <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" onChange={usernameHandler}/>
        <Form.Text className="text-muted">
          Less than 10 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={passwordHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Your Nickname" name="nickname" onChange={nicknameHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Male/Female/Unknown" name="gender" onChange={genderHandler}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Intro</Form.Label>
        <Form.Control as="textarea" rows={3} name="intro" onChange={introHandler}/>
      </Form.Group>
      <button type="submit" class="btn btn-primary" onClick={submitHandler}>Sign Up</button>
    </Form>
    </div>
  )
}

export default SignUpDetail
