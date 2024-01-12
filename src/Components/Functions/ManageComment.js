
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ManageComment(props) {
  const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comment, setComment] = useState({
       'rating' : '',
      'status' : '',
      'comment' : ''
    }); 
    const ratingHandler = ((e) => {setComment(prevState => ({...prevState, rating: e.target.value}))})
    const statusHandler = ((e) => {setComment(prevState => ({...prevState, status: e.target.value}))})
    const commentHandler = ((e) => {setComment(prevState => ({...prevState, comment: e.target.value}))})
    const handleManage = () => {
      var raw = JSON.stringify({
        "markid": 0,
        "status": comment.status,
        "rating": comment.rating,
        "comment": comment.comment,
        "userid": localStorage.getItem('userid'),
        "gameid": props.gameid
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

      fetch("/api/mark", requestOptions)
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
        {props.bottonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>コメントの操作</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="#" method="post">
                <table class="table table-borderless">
                      <tbody>
                      <tr>
                        <th>レーティング:</th>
                        <td><input type="text" placeholder="Edit rating" name="rating" onChange={ratingHandler}/></td>
                      </tr>
                      <tr>
                        <td><input type="radio" class="form-check-input" id="radio1" name="status" value="1" CHECKED onChange={statusHandler}/>
                          <label class="form-check-label" for="radio2">Plan</label></td>
                        <td><input type="radio" class="form-check-input" id="radio2" name="status" value="2" onChange={statusHandler}/>
                          <label class="form-check-label" for="radio2">Playing</label></td>
                        <td><input type="radio" class="form-check-input" id="radio3" name="status" value="3" onChange={statusHandler}/>
                          <label class="form-check-label" for="radio2">Played</label></td>
                      </tr>
                      <tr>
                        <td><label for="comment">コメント：</label></td>
                        <td>
                          <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="comment" onChange={commentHandler}></textarea>
                          </div>
                        </td>
                      </tr>

                      </tbody>
                    </table>
        </form>
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

export default ManageComment
