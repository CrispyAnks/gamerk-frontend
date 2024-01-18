import React from 'react'
import styles from './MainView.module.css'

function NewsDetail({newsAtt}) {
  const colStyle = {
    display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px'
  }
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
    
  
    return originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replace(/\//g, '-');}
  return (
    <div class='row' style={{borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
      <div class="col" style={colStyle}><a class="h6" className={styles.newslist} href={newsAtt.src} style={{fontSize: '14px', fontWeight: 'bold'}}>{newsAtt.title}</a></div>
      <div class="col" style={colStyle}>{formatDateString(newsAtt.newsdate)}</div>        
    </div>
  )
}

export default NewsDetail
