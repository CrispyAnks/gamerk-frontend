import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DeleteComment(props) {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const DeleteHandler = () =>{
    var myHeaders = new Headers();
      const token = localStorage.getItem('token')
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
      console.log(token)

      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
        headers: myHeaders
      };

      fetch("/api/mark/" + props.markid, requestOptions)
        .then(response => response.json())
        .then(result => {
         console.log(result)
          
        })
        .catch(error => console.log('error', error));
        
       
        history.go(0);
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>削除</Modal.Title>
        </Modal.Header>
        <Modal.Body>このコメントを削除してもよろしいですか？</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={DeleteHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteComment;