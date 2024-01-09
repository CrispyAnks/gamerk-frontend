import React from 'react'
import NavBar from '../../Nav/NavBar'
import styles from './hello.module.css'
import RankingByPlat from '../../List/RankingByPlat'

export default function Catalog() {
  return (
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class='row' className={styles.myrow}>          
      </div>
      <div class="row">
        <div class="col">
        <RankingByPlat id={0}/> 
        </div>
        <div class="col">
        <RankingByPlat id={0}/> 
        </div>
      </div>
      <div class="row">
        <div class="col">
        <RankingByPlat id={0}/> 
        </div>
        <div class="col">
        <RankingByPlat id={0}/> 
        </div>
      </div>
    </div>
  )
}
