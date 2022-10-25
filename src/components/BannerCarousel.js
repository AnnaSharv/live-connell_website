import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Banner({ title, bg, imgArr, icons, customClass }) {
  const handleDragStart = (e) => e.preventDefault();
  const items = [];

  {imgArr?.map((img,i) => {
 
    return items.push(<img src={img} onDragStart={handleDragStart} role="presentation" key={i} />)
  })}
  return (
    <div className={`${customClass} banner d-flex`} style={{ backgroundColor: bg }}>
      
        {title && (
          <div className="banner-text">
            <p>{title[0]}</p>
            <p>{title[1]}</p>
          </div>
        )}
      

      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval="0"
        animationDuration="1200"
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayControls={false}
        animationType="fading"
        responsive={{
          0: {
            items: 3,
          },
          1024: {
            items: 5,
          },
        }}
        items={items}
      />
    </div>
  );
}

export default Banner;
