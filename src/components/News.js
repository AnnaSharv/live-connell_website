import React from 'react'

import { news } from '../data/news'
function News() {
  return (
    <div className="news transactions">
    <div id="title">
      <p>Recent news</p>
      <p className="text-end text-xs-start">Read all</p>
    </div>


{/* Link to ! */}
<div className='news-cards'>
  {news.map((news) => {
          return (
              <div className="news-card" key={news.id}>
                  <img  src={news.image} alt={news.image}/>
                  <p className="header">{news.header}</p>
              </div>
          )
      })}
</div>
      

      
  </div>
  )
}

export default News