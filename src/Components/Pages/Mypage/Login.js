import React from 'react'
import NavBar from '../../Nav/NavBar'
import styles from './mypage.module.css'
import LoginDetail from '../../Functions/LoginDetail'

export default function Login() {
  return (
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class='row' className={styles.myrow}>
        <LoginDetail/>
      </div>
      
    </div>
  )
}
