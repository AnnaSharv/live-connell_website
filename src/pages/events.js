import React from 'react'
import Header from '../components/Header'
import { Image, Spin } from 'antd';


import Img from '../assets/images/banners/events.jpg';

import Img1 from '../assets/images/sectors/11 1.jpg';
import Img2 from '../assets/images/sectors/11 6.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Events() {
    const images = {};
    const importAll = (r) => {
    r.keys().forEach((key) => (images[key] = r(key)));
    };
    importAll(require.context("../assets/images/events", true, /\.(png|jpe?g|JPG|svg)$/));

    const imagesArray = Object.values(images);
    const rows = [];
    
    for (let i = 0; i <= imagesArray.length; i += 5 ) {
        let row;      
         row = (
            <div className='events-row events-row-1' key={i}>
                <div className='full-width' style={{ order: i % 2 === 0 || i === 0 ? "0" : "1"}}>
                {imagesArray[i] && <Image loading='lazy' width={"100%"} className="ant-image-img ant-image-placeholder" height={"100%"} src={imagesArray[i]} style={{objectPosition:'center top'}}
                    placeholder={ <Spin />}
                />}
                </div>
                <div className='quarter' style={{ order: i % 2 === 0 || i === 0 ? "1" : "0"}}>
                    {imagesArray[i+1] && 
                    <Image loading='lazy' width={"100%"} src={imagesArray[i+1]} placeholder={ <Spin />} />}
                    {imagesArray[i+2] && 
                    <Image loading='lazy' width={"100%"} src={imagesArray[i+2]} placeholder={ <Spin />} />}
                    {imagesArray[i+3] && 
                    <Image loading='lazy' width={"100%"} src={imagesArray[i+3]} placeholder={ <Spin />} />}
                    {imagesArray[i+4] && 
                    <Image loading='lazy' width={"100%"} src={imagesArray[i+4]} placeholder={ <Spin />} />}
                </div>
            </div>
          )
        
        
        rows.push(row);
      }

  return (
    <div className='events'>
        <Header
            subheading="Events"
            title="Welcome to our biannual Healthcare drinks at The Royal Automobile Club on Pall Mall."
            image={Img}
            myClass="smaller-padding-header banner-title-long"
        />

        <p className="text-decor mblock-80  container-custom-margin events-paragraph"
            style={{
                fontFamily: 'MonserratBold',
                fontSize: 26,
                lineHeight: "31.69px"
            }}
        >
           A fantastic evening of networking with investors, operators, banks and advisors from the health, social care, education, and life sciences sector.
       </p>

       <div className={'container-custom'}
            style={{
                color:"#111315",
                fontSize: 18
            }}
       > 
            <div>February 2023</div>

            {/* gallery */}
            <div style={{marginTop:45}} className="events-gallery">
            <Image.PreviewGroup
                // preview={{
                // onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                // }}
            >
                {rows}
              
            </Image.PreviewGroup>
            </div>
        </div>

    </div>
  )
}

export default Events