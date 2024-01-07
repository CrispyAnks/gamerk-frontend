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
      <h1 style={{textAlign:"center"}}>News</h1>
      <hr/>
      {newsData.data ? (newsData.data.map(news => <NewsDetail key={news.newsid} newsAtt={news}/>)) : (<p>loading...</p>)}   
    </div>
  )
}

export default News
