import React from 'react'
import styles from './MainView.module.css'

function NewsDetail({newsAtt}) {
  return (
    <div class='row'>
           
            <div class="col"><a class="h6" className={styles.newslist} href={newsAtt.src}>{newsAtt.title}</a></div>
             <div class="col">{newsAtt.newsdate}</div>
             <br/>
             <hr/>
            
    </div>
  )
}

export default NewsDetail
