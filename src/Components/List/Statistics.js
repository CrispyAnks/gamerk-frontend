import React from 'react';
import ActivityCalendar from '../ActivityCalendar/ActivityCalendar';


function Statistics(props) {
  const data = [
    {
      count: 13,
      date: '2022-06-01',
      level: 3
    },
    {
      count: 0,
      date: '2022-06-02',
      level: 0
    },
    {
      count: 8,
      date: '2022-06-03',
      level: 2
    },
    {
      count: 3,
      date: '2022-06-04',
      level: 1
    },
    {
      count: 1,
      date: '2022-06-05',
      level: 1
    },
    {
      count: 3,
      date: '2022-06-06',
      level: 1
    },
    {
      count: 0,
      date: '2022-06-07',
      level: 0
    },
    {
      count: 8,
      date: '2022-06-08',
      level: 2
    },
    {
      count: 16,
      date: '2022-06-09',
      level: 4
    },
    {
      count: 2,
      date: '2022-06-10',
      level: 1
    },
    {
      count: 0,
      date: '2022-06-11',
      level: 0
    },
    {
      count: 0,
      date: '2022-06-12',
      level: 0},{
        count: 1,
        date: '2022-10-04',
        level: 1
      }
  ]
  return (
    <div>
      <h1>統計情報</h1>
      <table class="table table-borderless">
        <thead>
        <tr>
          <th>Marked game</th>
          <td>{props.count}</td>
          
        </tr>
        <td colSpan={2}>
        <ActivityCalendar 
        blockMargin={4}
        blockRadius={2}
        blockSize={12}
        colorScheme="light"
        theme={{
          light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
          dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
        }}
        hideColorLegend
        data={data}/>
        </td>
        </thead>
        
      </table>
      <hr/>
    </div>
  )
}

export default Statistics
