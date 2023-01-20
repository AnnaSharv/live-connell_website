import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Banner({ bg, customClass }) {
  const items = [
  "Investor CDD on the CareTech property portfolio acquired by Civitas Investment Management", 
  "Vendor CDD for the sale of Ludlow Street Healthcare to Ancala Partners", 
  "Vendor CDD for the sale of LV Care Group to Aedifica and Emera", 
  "Vendor CDD for the sale of RNID’s Care and Support Services to Achieve Together", 
  "Vendor CDD for the sale of Voyage Care Group to Wren House Infrastructure", 
  "Vendor CDD for the sale of RNID’s Care and Support Services to Achieve Together"
  ];


  return (
    <div className={`${customClass} banner d-flex`} style={{ backgroundColor: bg }}>
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
