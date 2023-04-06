import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Row, Col} from 'antd'
import Header from "../components/Header";

import Img from '../assets/images/banners/clients.jpg'
import {ImageArray} from "../utils/clientImagesArray";
function Clients() {
  const [imagesArray, setImagesArray] = useState(ImageArray);

  // useEffect(() => {
  //   function importAll(r) {
  //     let images = {};
  //     r.keys().map((item, index) => {
  //       images[item.replace("./", "")] = r(item);
  //     });
  //     return images;
  //   }
  //   const images = importAll(
  //     require.context("./ourclients", false, /\.(png|jpe?g|svg)$/)
  //   );

  //   setImagesArray(images);
  // }, []);

  return (
    <div>
      <Header 
      subheading="Our Clients"
      title="We have recently completed projects including refinancing, market strategy and commercial due diligence for the following clients:"
      image={Img}
      myClass="smaller-padding-header banner-title-long"
      />

      <Row className="clients_image_array  container-custom" gutter={[30,25]} style={{alignItems: 'center'}}>
        {imagesArray ? (
          Object.values(imagesArray).map((image, i) => {
            return (
              <Col xs={8} sm={6} md={4} className="clients_image_card" key={i}
              style={{
                display:'grid',
                placeContent:'center'
               }}>
                {
                 <LazyLoadImage
                 effect="blur"
                 src={image}
                 alt={image}
                //  width={i === 18 || i === 61 || i === 78 || i === 81 ? "110px" : "100"}
                 style={{ maxWidth: i === 18 || i === 61 || i === 78 || i === 81 ? "110px" : "100",  transform: i === 1 ?  'translateX(17px)' : ""}}
                 className="clients_image"
                
                 />
                }
              </Col>
            );
          })
        ) : (
          <h1>loading</h1>
        )}
      </Row>
    </div>
  );
}

export default Clients;
