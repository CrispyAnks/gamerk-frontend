
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UpdateUser(props) {
  const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState({
      gender:'',
      intro:'',
      nickname:''
    }); 
    const genderHandler = ((e) => {setUser(prevState => ({...prevState, gender: e.target.value}))})
    const introHandler = ((e) => {setUser(prevState => ({...prevState, intro: e.target.value}))})
    const nicknameHandler = ((e) => {setUser(prevState => ({...prevState, nickname: e.target.value}))})
    const handleManage = () => {
      var raw = JSON.stringify({
        "gender": user.gender,
        "intro": user.intro,
        "nickname": user.nickname,
        "userid": localStorage.getItem('userid'),
      });

      var myHeaders = new Headers();
      const token = localStorage.getItem('token')
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
      console.log(token)

      var requestOptions = {
        method: 'POST',
        body: raw,
        headers: myHeaders  
      };

      fetch("/api/user/upload", requestOptions)
        .then(response => response.json())
        .then(result => {
         console.log(result)
          
        })
        .catch(error => console.log('error', error));

        
        history.go(0);
    }
  
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
                <table class="table table-borderless">
                      <tbody>
                      <tr>
                        <th>Gender:</th>
                        <td><input type="text" placeholder="Update your gender" name="gender" onChange={genderHandler}/></td>
                      </tr>
                      <tr>
                        <th>Nickname:</th>
                        <td><input type="text" placeholder="Update your nickname" name="nickname" onChange={nicknameHandler}/></td>
                      </tr>
                      <tr>
                        <td><label for="comment">Intro：</label></td>
                        <td>
                          <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="comment" onChange={introHandler}></textarea>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                    </table>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleManage}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateUser
