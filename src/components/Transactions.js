import React, {useEffect, useState} from "react";
import {Card} from 'antd'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import {db} from '../firebase.js'
import { LazyLoadImage } from "react-lazy-load-image-component";

function Transactions(props) {
  const [transactions, setTransactions] = useState([])
  const settings = {
 
      infinite: true,
      slidesToShow: props.modal ? 3 : 4,
      slidesToScroll: 1,
      autoplay:  true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  useEffect(() => {
    async function getData() {
      const list = []
      const q = query(collection(db, "transactions"), orderBy("transactions_year", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setTransactions(list)
    }
    getData() 

  }, [])

  return (
    <div className="transactions">
        <h2 className="title-medium mbottom-30 container-custom"> Recent Transactions  </h2>

        <Slider {...settings} className={props.modal ? "container-custom pr-custom" : "container-custom pr-custom"}>
        {
          transactions.length > 0 && 
            transactions.map((transaction,i) => {
              if(transaction.data.transactions_status === "active") {
                return (
                  <Card key={i} bordered={false} title={`Year ${transaction.data.transactions_year}`} hoverable cover={<LazyLoadImage title={transaction.data.transactions_title} alt={transaction.data.transactions_title} src={transaction.data.transactions_image} effect="blur"/>}>
                      <p className="text-regular text-elipse text-elipse-small">{transaction.data.transactions_title}</p>
                  </Card>
                )
              }
              
            })
        
        }
        </Slider>

    </div>
  );
}

export default Transactions;
