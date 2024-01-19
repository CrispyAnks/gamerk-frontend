import React,{ useEffect, useState } from 'react'
import NavBar from '../../Nav/NavBar'
import styles from './hello.module.css'
import NewsDetail from '../../Functions/NewsDetail'

function News() {
  const NEWS = [{
    id : '1',
    attributes : {
      title : '',
      src : ''
    }
  }];
  const [newsData, setNewsData] = useState(NEWS);
  useEffect(() =>{ 
    const fetchNews = async () => {
      await fetch('/api/index/news')
      .then((res) =>{
        return res.json();
      }).then(data => {
        setNewsData(data);
      })
      .catch(()=>{})
    } 
    fetchNews();
    console.log(newsData)
  },[])

  return (
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class='row' className={styles.myrow}>       
      </div>
      <div class="container mt-3" style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
        <h1 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'Hiragino Sans',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>News</h1>
        <div style={{margin:'1rem 2rem'}}>
        {newsData.data ? (newsData.data.map(news => <NewsDetail key={news.newsid} newsAtt={news}/>)) : (<p>loading...</p>)}  
        </div>
         
      </div>
      
    </div>
  )
}

export default News
