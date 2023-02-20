import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from "html-react-parser";
import { Spin } from "antd";
import formatDate from "../utils/formatBlogDate";

function NewsInside() {
  const [news, setNews] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const location = useLocation();
  // Get the query parameters as an object
  const queryParams = new URLSearchParams(location.search);
  // Get the value of a specific query parameter
  const id = queryParams.get("id");
  const docRef = doc(db, "blogs", id);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        console.log("Document data:", docSnap.data());
        setNews(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getData();
     setIsLoading(false)
  }, []);

  return (
    <div className="container-custom">
      {loading ? <Spin /> 
      : <div className="single-news">
        <h1 className="title">{news?.blog_title}</h1>
        <div className="meta-info">
          <div>{news?.blog_date && formatDate(news.blog_date)}</div>
          {/* <div>{news?.blog_date}</div> */}
        </div>

        {news?.imgArr?.length > 0 &&
          news?.imgArr.map((newsImg, i) => {
            return (
              <LazyLoadImage
                key={i}
                effect="blur"
                src={newsImg?.blog_image || null}
                alt={newsImg?.blog_image_name}
              />
            );
          })}

        {news?.blog_body && (
          <div className="text-regular" style={{ marginTop: "50px" }}>
            {parse(news.blog_body)}
          </div>
        )}
      </div>}
    </div>
  );
}

export default NewsInside;
