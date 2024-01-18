import React, { useEffect,useState } from 'react';
import ActivityCalendar from '../ActivityCalendar/ActivityCalendar';


function Statistics(props) {
  const [data, setData] = useState([
    {
      count: 1,
      date: '2023-12-17',
      level: 4
    }
  ]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    var myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append("Authorization", token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const fetchData = async () => {
      try {
        await fetch('/api/mark/statistic/', requestOptions)
        .then((res =>{
          return res.json();
        })).then(result => {
          if(Array.isArray(result.data) && result.data.length > 0){
            setData(prevData => {
              const newData = Array.isArray(result.data) ? [...prevData, ...result.data] : prevData;
              return newData;
            });
          }
          setShow(true);
          console.log(result);
          console.log(data);
        });
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [])
  return (
    <div style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
      <h1 style={{ backgroundColor: 'rgba(100, 100, 0, 0.1)',margin:'0',padding:'0.5rem'}}>統計情報</h1>
        <div style={{margin:'0.5rem', padding:'0.5rem 1rem'}}>
        {show && <ActivityCalendar 
        blockMargin={4}
        blockRadius={2}
        blockSize={12}
        colorScheme="light"
        theme={{
          light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
          dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
        }}
        hideColorLegend
        data={data}/>}
      </div>
    </div>
  )
}

export default Statistics
