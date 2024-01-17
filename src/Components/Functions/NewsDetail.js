import React from 'react'
import styles from './MainView.module.css'

function NewsDetail({newsAtt}) {
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
  
    return originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replace(/\//g, '-');}
  return (
    <div class='row'>
           
            <div class="col"><a class="h6" className={styles.newslist} href={newsAtt.src}>{newsAtt.title}</a></div>
             <div class="col">{formatDateString(newsAtt.newsdate)}</div>
             <br/>
             <hr/>
            
    </div>
  )
}

export default NewsDetail
