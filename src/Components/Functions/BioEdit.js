import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function BioEdit(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [comment, setComment] = useState({
    "nickname": props.bio.nickname,
      "gender": props.bio.gender,
      "intro": props.bio.intro,
      "imgsrc":props.bio.imgsrc
  }); 
  const ratingHandler = ((e) => {setComment(prevState => ({...prevState, nickname: e.target.value}))})
  const statusHandler = ((e) => {setComment(prevState => ({...prevState, gender: e.target.value}))})
  const commentHandler = ((e) => {setComment(prevState => ({...prevState, intro: e.target.value}))})
  const handleManage = () => {
    var raw = JSON.stringify({
      "nickname": comment.nickname,
      "gender": comment.gender,
      "intro": comment.intro,
      "imgsrc":comment.imgsrc,
    });

    var myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    console.log(token)

    var requestOptions = {
      method: props.method,
      body: raw,
      headers: myHeaders  
    };

    fetch("/api/user/update", requestOptions)
      .then(response => response.json())
      .then(result => {
       console.log(result)
        
      })
      .catch(error => console.log('error', error));

      
      window.location.href = "/mypage/" + localStorage.getItem("userid");
  }
  


return (
  <>
    <Button variant="success" onClick={handleShow}>
      {props.bottonName}
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ユーザー情報変更</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
              <table class="table table-borderless">
                    <tbody>
                    <tr>
                      <th>ニックネーム:</th>
                      <td><input type="text" placeholder="ニックネームを入力してください" name="rating" onChange={ratingHandler}/></td>
                    </tr>
                    
                    <tr>
                      <th>性別:</th>
                      <td><input type="text" placeholder="性別を入力してください" name="rating" onChange={statusHandler}/></td>
                    </tr>
                    <tr>
                    {/* <th>アバター:</th>
                    <td>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleUpload}>Upload</button>
                    </td> */}
                    </tr>
                    <tr>
                      <td><label for="comment">イントロ：</label></td>
                      <td>
                        <div class="mb-3 mt-3">
                          <textarea class="form-control" rows="5" id="comment" name="comment" onChange={commentHandler}></textarea>
                        </div>
                      </td>
                    </tr>

                    </tbody>
                  </table>
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          閉じる
        </Button>
        <Button variant="primary" onClick={handleManage}>
          保存
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)
}


export default BioEdit;