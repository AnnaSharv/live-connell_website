import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Row, Col} from 'antd'
import Header from "../components/Header";

import Img from '../assets/images/Clare-and-Charlotte-Sept-2020.jpg'

function Clients() {
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }
    const images = importAll(
      require.context("./ourclients", false, /\.(png|jpe?g|svg)$/)
    );

    setImagesArray(images);
  }, []);

  return (
    <div>
      <Header 
      subheading="Our Clients"
      title="We have recently completed projects including refinancing, market strategy and commercial due diligence for the following clients:"
      img={Img}
      order="imageText"
      myClass="smaller-padding-header banner-title-long"
      />

      <div className="clients_image_array">
        {imagesArray ? (
          Object.values(imagesArray).map((image, i) => {
            return (
              <div className="clients_image_card" key={i}>
                <LazyLoadImage
                  effect="blur"
                  src={image}
                  alt={image}
                  width="100"
                  className="clients_image"
                />
              </div>
            );
          })
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
}

export default Clients;
