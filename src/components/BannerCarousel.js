import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

function Banner({ bg, customClass, imgGallery, transactions }) {
  const items = [    
    transactions[0]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[0].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[0].blog_id}`}>
          {transactions[0]?.blog_title}        </Link>,
    transactions[1]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[1].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[1].blog_id}`}>
          {transactions[1]?.blog_title}        </Link>,
    transactions[2]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[2].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[2].blog_id}`}>
          {transactions[2]?.blog_title}        </Link>,
    transactions[3]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[3].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[3].blog_id}`}>
          {transactions[3]?.blog_title}        </Link>,
    transactions[4]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[4].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[4].blog_id}`}>
          {transactions[4]?.blog_title}        </Link>,
    transactions[5]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[5].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[5].blog_id}`}>
          {transactions[5]?.blog_title}        </Link>,
    transactions[6]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[6].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[6].blog_id}`}>
          {transactions[6]?.blog_title}        </Link>,
    transactions[7]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[7].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[7].blog_id}`}>
          {transactions[7]?.blog_title}        </Link>,
    transactions[8]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[8].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[8].blog_id}`}>
          {transactions[8]?.blog_title}        </Link>,
    transactions[9]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[9].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[9].blog_id}`}>
          {transactions[9]?.blog_title}  
      </Link>,
    transactions[10]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[10].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[10].blog_id}`}>
          {transactions[10]?.blog_title}  
      </Link>,
    transactions[11]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[11].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[11].blog_id}`}>
          {transactions[11]?.blog_title}  
      </Link>,
    transactions[12]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[12].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[12].blog_id}`}>
          {transactions[12]?.blog_title}  
      </Link>,
    transactions[13]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[13].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[13].blog_id}`}>
          {transactions[13]?.blog_title}  
      </Link>,
    transactions[14]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[14].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[14].blog_id}`}>
          {transactions[14]?.blog_title}  
      </Link>,
    transactions[0]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[0].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[0].blog_id}`}>
          {transactions[0]?.blog_title}        </Link>,
    transactions[1]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[1].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[1].blog_id}`}>
          {transactions[1]?.blog_title}        </Link>,
    transactions[2]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[2].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[2].blog_id}`}>
          {transactions[2]?.blog_title}        </Link>,
    transactions[3]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[3].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[3].blog_id}`}>
          {transactions[3]?.blog_title}        </Link>,
    transactions[4]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[4].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[4].blog_id}`}>
          {transactions[4]?.blog_title}        </Link>,
    transactions[5]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[5].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[5].blog_id}`}>
          {transactions[5]?.blog_title}        </Link>,
    transactions[6]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[6].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[6].blog_id}`}>
          {transactions[6]?.blog_title}        </Link>,
    transactions[7]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[7].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[7].blog_id}`}>
          {transactions[7]?.blog_title}        </Link>,
    transactions[8]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[8].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[8].blog_id}`}>
          {transactions[8]?.blog_title}        </Link>,
    transactions[9]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[9].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[9].blog_id}`}>
          {transactions[9]?.blog_title}  
      </Link>,
    transactions[10]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[10].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[10].blog_id}`}>
          {transactions[10]?.blog_title}  
      </Link>,
    transactions[11]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[11].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[11].blog_id}`}>
          {transactions[11]?.blog_title}  
      </Link>,
    transactions[12]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[12].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[12].blog_id}`}>
          {transactions[12]?.blog_title}  
      </Link>,
    transactions[13]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[13].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[13].blog_id}`}>
          {transactions[13]?.blog_title}  
      </Link>,
    transactions[14]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[14].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[14].blog_id}`}>
          {transactions[14]?.blog_title}  
      </Link>,
    transactions[0]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[0].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[0].blog_id}`}>
          {transactions[0]?.blog_title}        </Link>,
    transactions[1]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[1].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[1].blog_id}`}>
          {transactions[1]?.blog_title}        </Link>,
    transactions[2]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[2].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[2].blog_id}`}>
          {transactions[2]?.blog_title}        </Link>,
    transactions[3]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[3].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[3].blog_id}`}>
          {transactions[3]?.blog_title}        </Link>,
    transactions[4]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[4].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[4].blog_id}`}>
          {transactions[4]?.blog_title}        </Link>,
    transactions[5]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[5].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[5].blog_id}`}>
          {transactions[5]?.blog_title}        </Link>,
    transactions[6]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[6].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[6].blog_id}`}>
          {transactions[6]?.blog_title}        </Link>,
    transactions[7]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[7].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[7].blog_id}`}>
          {transactions[7]?.blog_title}        </Link>,
    transactions[8]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[8].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[8].blog_id}`}>
          {transactions[8]?.blog_title}        </Link>,
    transactions[9]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[9].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[9].blog_id}`}>
          {transactions[9]?.blog_title}  
      </Link>,
    transactions[10]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[10].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[10].blog_id}`}>
          {transactions[10]?.blog_title}  
      </Link>,
    transactions[11]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[11].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[11].blog_id}`}>
          {transactions[11]?.blog_title}  
      </Link>,
    transactions[12]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[12].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[12].blog_id}`}>
          {transactions[12]?.blog_title}  
      </Link>,
    transactions[13]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[13].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[13].blog_id}`}>
          {transactions[13]?.blog_title}  
      </Link>,
    transactions[14]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[14].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[14].blog_id}`}>
          {transactions[14]?.blog_title}  
      </Link>,
    transactions[0]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[0].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[0].blog_id}`}>
          {transactions[0]?.blog_title}        </Link>,
    transactions[1]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[1].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[1].blog_id}`}>
          {transactions[1]?.blog_title}        </Link>,
    transactions[2]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[2].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[2].blog_id}`}>
          {transactions[2]?.blog_title}        </Link>,
    transactions[3]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[3].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[3].blog_id}`}>
          {transactions[3]?.blog_title}        </Link>,
    transactions[4]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[4].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[4].blog_id}`}>
          {transactions[4]?.blog_title}        </Link>,
    transactions[5]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[5].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[5].blog_id}`}>
          {transactions[5]?.blog_title}        </Link>,
    transactions[6]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[6].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[6].blog_id}`}>
          {transactions[6]?.blog_title}        </Link>,
    transactions[7]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[7].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[7].blog_id}`}>
          {transactions[7]?.blog_title}        </Link>,
    transactions[8]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[8].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[8].blog_id}`}>
          {transactions[8]?.blog_title}        </Link>,
    transactions[9]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[9].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[9].blog_id}`}>
          {transactions[9]?.blog_title}  
      </Link>,
    transactions[10]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[10].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[10].blog_id}`}>
          {transactions[10]?.blog_title}  
      </Link>,
    transactions[11]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[11].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[11].blog_id}`}>
          {transactions[11]?.blog_title}  
      </Link>,
    transactions[12]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[12].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[12].blog_id}`}>
          {transactions[12]?.blog_title}  
      </Link>,
    transactions[13]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[13].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[13].blog_id}`}>
          {transactions[13]?.blog_title}  
      </Link>,
    transactions[14]?.blog_title?.length > 0 &&
    <Link to={`news/blogs/${transactions[14].blog_title?.toLowerCase().split(" ").join("-").substring(0, 50)}?id=${transactions[14].blog_id}`}>
          {transactions[14]?.blog_title}  
      </Link>,
      

     

  ];




  return (
    <div className={`${customClass} banner d-flex full-width-section`} style={{ backgroundColor: bg }}>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval="0"
        animationDuration="2500"
        infinite={true}
        disableDotsControls
        disableButtonsControls
        autoPlayControls={false}
        animationType="fading"
        responsive={{
          0: {
            items: 3,
          },
          681: {
            items: 4,
          },
          1000: {
            items: 6,
          },
          1024: {
            items: 8,
          },
        }}
         items={items}
      />
    </div>
  );
}

export default Banner;
