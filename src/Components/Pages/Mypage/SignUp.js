import React from 'react'
import NavBar from '../../Nav/NavBar'
import styles from './mypage.module.css'
import SignUpDetail from '../../Functions/SignUpDetail'

function SignUp() {
  return (
    <div class="container-fluid" id="main">
        <NavBar/>
        <div class="row" className={styles.myrow}>

        </div>
        <div class="row">
            <SignUpDetail/>
        </div>
      
    </div>
  )
}

export default SignUp
