import React,{ useEffect, useState } from 'react'
import styles from './mypage.module.css'
import NavBar from '../../Nav/NavBar'
import Avatar from '../../List/Avatar'
import Bio from '../../List/Bio'
import Marked from '../../List/Marked'
import Statistics from '../../List/Statistics'
import Comments from '../../List/Comments'

function Mypage(props) {
  const COM_DATA={}
  const USER_DATA = {}
  const [commentData, setCommentData] = useState(COM_DATA);
  const [userData, setUserData] = useState(USER_DATA);
  useEffect(() => {
    var myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append("Authorization", token);
    console.log(token)
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

      const fetchUSER = async () => { fetch('/api/user/mypage/' + props.match.params.id, requestOptions)
      .then((res) =>{
        return res.json();
      }).then(data => {
        setUserData(data)
        console.log(userData)
      })
      .catch(()=>{})}

      const fetchCOM = async () => {
        await fetch('/api/mark/user/?pageNum=1&pageSize=3', requestOptions)
        .then((res =>{
          return res.json();
        })).then(data => {
          if(data.status != '404'){
            setCommentData(data.data.items);
            console.log(data.data.items)
            console.log(commentData)
          }else{
            setCommentData(null);
          }
        })
        .catch(() =>{})}
      
        fetchUSER();
        fetchCOM();      
  }, []);
  return (
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class='row' className={styles.myrow}>
     
      </div>
      <div class="row">
      <div class="col">
      {userData.data != null && <Avatar ava={userData.data.imgsrc}/>}
      </div>
      <div class="col">
      {userData.data != null && <Bio bio={userData.data}/>}
      </div>
      </div>
      <div class='row' className={styles.myrow}>
     
      </div>
      <div class="row">
      <div class="col">
        <Marked/>
      </div>
      <div class="col">
        <Statistics/>
        <br/>
        <br/>
        {Array.isArray(commentData) && (<Comments Usercoms={commentData}/>)}
      </div>
      </div>
     

    </div>
  )
}

export default Mypage
