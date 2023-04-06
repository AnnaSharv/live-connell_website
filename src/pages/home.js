import React, {useState, useEffect, useRef} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import {db} from '../firebase.js'
import Header from '../components/Header.js'
import { Row, Col, Carousel } from 'antd'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
//components
import Banner from '../components/BannerCarousel'
import Services from '../components/OurServicesShort.js'
import News from '../components/News.js'
import Awards from '../components/Awards.js'
//image
import HeaderImg from '../assets/images/Header.svg'
// import BannerImg from '../assets/images/home/banner_1_homepage.jpg'

// import BannerImg1 from '../assets/images/home/c_img_1.png'
// import BannerImg2 from '../assets/images/home/c_img_2.png'
// import BannerImg3 from '../assets/images/home/c_img_3.png'

import ArrowBlack from '../assets/images/arrow-black.svg'

import 'react-lazy-load-image-component/src/effects/blur.css'

import {awardsArray} from '../utils/awards'
import {ImageArray} from '../utils/clientImagesArray'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





function Home(props) {
    const countUpRef1 = useRef(null);
    const countUpRef2 = useRef(null);
    const countUpRef3 = useRef(null);
    const countUpRef4 = useRef(null);


  
  const [team, setTeam] = useState([])
  const [elementInView, setelementInView] = useState(false)
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:  true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      }
      
    ]
  };
  const settings1 = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 6,
    autoplay:  true,
    speed:5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      
    ]
  };
  useEffect(() => {

    async function getData() {
      const list = []
     // const q = query(collection(db, "team"), orderBy("member_name", "asc"));
      const q = query(collection(db, "team"), orderBy("orderId", "asc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push({id: doc.id, data: doc.data()})
      });
      setTeam(list)
    }

    getData()


   
  
 
  }, [])

  useEffect(() => {

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // do something here
            setelementInView(true)
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        }
      );

      if (countUpRef1.current) {
        observer.observe(countUpRef1.current);
        observer.observe(countUpRef2.current);
        observer.observe(countUpRef3.current);
        observer.observe(countUpRef4.current);
      }
  
      return () => {
        setelementInView(false)

        if (countUpRef1.current) {
          observer.unobserve(countUpRef1.current);
          observer.unobserve(countUpRef2.current);
          observer.unobserve(countUpRef3.current);
          observer.unobserve(countUpRef4.current);
        }
      };
  }, [countUpRef1.current])

 



  return (
    <>
    {
      <style>
       {`
          .concat-arr-images img {
            height: 130px ;
            padding: 5px ;
            object-fit: cover
           }

           .concat-arr-images .slick-slide[data-index="0"] img,
           .concat-arr-images .slick-slide[data-index="1"] img,
           .concat-arr-images .slick-slide[data-index="6"] img,
           .concat-arr-images .slick-slide[data-index="7"] img,
       
           .concat-arr-images .slick-slide[data-index="11"] img,
           .concat-arr-images .slick-slide[data-index="18"] img,
           .concat-arr-images .slick-slide[data-index="37"] img,
           .concat-arr-images .slick-slide[data-index="43"] img,
           .concat-arr-images .slick-slide[data-index="46"] img,
           .concat-arr-images .slick-slide[data-index="47"] img,
           .concat-arr-images .slick-slide[data-index="56"] img,
           .concat-arr-images .slick-slide[data-index="59"] img,
           .concat-arr-images .slick-slide[data-index="60"] img,
           .concat-arr-images .slick-slide[data-index="61"] img,
           .concat-arr-images .slick-slide[data-index="71"] img,
           .concat-arr-images .slick-slide[data-index="77"] img,
           .concat-arr-images .slick-slide[data-index="65"] img,
           .concat-arr-images .slick-slide[data-index="69"] img,
           .concat-arr-images .slick-slide[data-index="78"] img,
           .concat-arr-images .slick-slide[data-index="80"] img,
           .concat-arr-images .slick-slide[data-index="81"] img,
           .concat-arr-images .slick-slide[data-index="82"] img,
           .concat-arr-images .slick-slide[data-index="84"] img,
           .concat-arr-images .slick-slide[data-index="86"] img,
           .concat-arr-images .slick-slide[data-index="97"] img,
           .concat-arr-images .slick-slide[data-index="99"] img,
           .concat-arr-images .slick-slide[data-index="100"] img,
           .concat-arr-images .slick-slide[data-index="105"] img,
           .concat-arr-images .slick-slide[data-index="120"] img,
           .concat-arr-images .slick-slide[data-index="131"] img,
           .concat-arr-images .slick-slide[data-index="135"] img,
           .concat-arr-images .slick-slide[data-index="143"] img,
           .concat-arr-images .slick-slide[data-index="137"] img,
       
           .concat-arr-images .slick-slide[data-index="143"] img,
           .concat-arr-images .slick-slide[data-index="147"] img,
           .concat-arr-images .slick-slide[data-index="149"] img,
           .concat-arr-images .slick-slide[data-index="150"] img,
           .concat-arr-images .slick-slide[data-index="152"] img,
           .concat-arr-images .slick-slide[data-index="153"] img,
           .concat-arr-images .slick-slide[data-index="154"] img
           {
            object-fit: contain !important
           }
          
           .concat-arr-images .slick-slide[data-index="1"] img,
           .concat-arr-images .slick-slide[data-index="10"] img {
            transform: translateX(18px) !important;
           }
        
           .concat-arr-images .slick-slide[data-index="83"] img,   
           .concat-arr-images .slick-slide[data-index="137"] img, 
           .concat-arr-images .slick-slide[data-index="141"] img {
            padding: 20px !important;
           }
           .concat-arr-images .slick-slide[data-index="14"]  {
            padding-top: 17px !important;
           }
           .concat-arr-images .slick-slide[data-index="18"]  {
            padding: 0 40px !important;
            transform: translateX(12px) !important;
           }
           .concat-arr-images .slick-slide[data-index="21"], .concat-arr-images .slick-slide[data-index="25"]  {
            padding-bottom: 28px !important;
           }
           .concat-arr-images .slick-slide[data-index="24"] {
            object-fit: contain;
            transform: translateY(10px);
           }
           .concat-arr-images .slick-slide[data-index="30"]  {
            padding-top: 20px !important;
           }
           .concat-arr-images .slick-slide[data-index="31"],  .concat-arr-images .slick-slide[data-index="33"] {
            padding-bottom: 40px !important;
           }
           .concat-arr-images .slick-slide[data-index="47"] {
            transform: translateY(-12px);
           }
           .concat-arr-images .slick-slide[data-index="21"], .concat-arr-images .slick-slide[data-index="72"],  .concat-arr-images .slick-slide[data-index="91"] {
            transform: translateY(-18px) !important;
           }
           .concat-arr-images .slick-slide[data-index="75"] {
            transform: translateY(15px) !important;
           }
           .concat-arr-images .slick-slide[data-index="77"] {
            transform: translateY(-18px) !important;
            object-fit: contain;
           }
           .concat-arr-images .slick-slide[data-index="81"], .concat-arr-images .slick-slide[data-index="84"] {
            object-fit: contain !important;
            padding:  0 25px !important;
           }
           .concat-arr-images .slick-slide[data-index="98"],  .concat-arr-images .slick-slide[data-index="137"] {
            transform: translateY(-10px) !important;
           }
           .concat-arr-images .slick-slide[data-index="107"], .concat-arr-images .slick-slide[data-index="108"]{
            transform: translateY(-13px) !important;
           }
           .concat-arr-images .slick-slide[data-index="114"] {
            transform: translateY(-14px) !important;
           }
           .concat-arr-images .slick-slide[data-index="136"] img {
            transform: translate(22px, -5px);
           }
        

       `}
     </style>
    } 
    <div>
      <Header
        title="Specialists in health, social care, education, pharma"
        subheading="Connell Consulting"
        paragraphs={[
          "Connell Consulting offer private equity firms and corporate clients detailed market knowledge combined with commercial insight. Our commercial due diligence and strategic reports provide granular and comprehensive analysis. Our reports are based upon fresh and targeted primary research, plus comprehensive interviews with commissioners and other stakeholders at both local and national levels.",
          "Produced commercial due diligence reports on over £7 billion of health and social care transactions in the last year",
        ]}
        highlight={true}
        imageplural={false}
        img={HeaderImg}
        statistics={true}
        carousel={true}
      />

      {/* <LazyLoadImage
        effect="blur"
        src={BannerImg}
        width="100%"
        className="banner_1_img container-custom"
      /> */}


      
      <Slider {...settings} className="container-custom mblock-80 home-slider" style={{display:'flex', alignItems:'center', maxWidth: '1600px', marginInline: 'auto'}}>
        <LazyLoadImage className="img" alt={"award"} src={awardsArray[0]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage className="img" alt={"award"} src={awardsArray[1]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage  alt={"award"} src={awardsArray[2]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage  alt={"award"} src={awardsArray[3]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage className="img" alt={"award"} src={awardsArray[4]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage className="img" alt={"award"} src={awardsArray[5]} effect="blur" width='100%' height='auto'/>
        <LazyLoadImage className="img" alt={"award"} src={awardsArray[6]} effect="blur" width='100%' height='auto'/>        
        {/* <LazyLoadImage className="img" alt={"award"} src={awardsArray[7]} effect="blur" width='100%' height='auto' style={{objectFit:'contain'}}/> */}
      </Slider>
      <h2
        className="title-medium text container-custom"
        style={{ marginTop: "30px" }}
      >
        <strong>
          We offer detailed market knowledge combined with commercial insight
        </strong>
      </h2>
      <p className="banner_p container-custom">
        Connell Consulting is a leading strategy consultancy specialising in commercial due diligence,
        strategy consulting, financial analysis and operational improvement for investors, corporate clients,
        and operators. Our reports are based upon fresh and targeted primary research. As a team we have
        unrivalled access to an extensive network of stakeholders.
      </p>
      <Row className="due-dilligence-banner container-custom padding-block">
        <Col sm={11} md={11} className="text">
          Produced commercial due diligence reports on over
          
          {/* <strong> £7 billion</strong>  */}
            <strong ref={countUpRef4}>
            { elementInView ? <CountUp sstart={0} end={7} duration={1} style={{fontSize: 24}} prefix=" £" suffix=" billion "/> : <span style={{fontSize: 24}}>£0 billion</span>}
          </strong>
          of health and social care transactions in the last year
        </Col>
        <Col sm={12} md={13} className="numbers">
          <div ref={countUpRef1}>
            { elementInView ? <CountUp start={500} end={526} duration={1}/> : <span>500</span>}
            <span>Engagements</span>
          </div>

          <div ref={countUpRef2}>
                { elementInView ? <CountUp start={70} end={84} suffix="%" duration={1.2}/> : <span>70%</span>}
                <span>Repeat business</span>
          </div>

          <div ref={countUpRef3}>
                { elementInView ? <CountUp start={0} end={7}  prefix="£" suffix="bn" duration={1.2}/> : <span>£0bn</span>}
                <span>Transactions</span>
          </div>

        </Col>
      </Row>

      <Services />

      <h2 className="title-medium">
        <span className="highlight-text">Our</span> Clients
      </h2>

      {/* <Carousel className="home-carousel" autoplay dots={false}>
        <Row>
          <LazyLoadImage effect="blur" alt="" src={BannerImg1} width="100%" />
        </Row>
        <Row>
          <LazyLoadImage effect="blur" alt="" src={BannerImg2} width="100%" />
        </Row>
        <Row>
          <LazyLoadImage effect="blur" alt="" src={BannerImg3} width="100%" />
        </Row>
      </Carousel> */}

      <Slider {...settings1} className="container-custom mblock-80 concat-arr-images" style={{display:'flex', alignItems:'center'}}>
        {/* awardsArray */}
        {/* ImageArray */}
      {
        ImageArray ?
          ImageArray.map((client,i) => {
           return  <img effect="blur" key={i} alt="" loading="lazy" src={client}/>
           
          })
        : <span>loading...</span>
      }
      </Slider>

    
 



  
      
      <News />

      <Banner bg="#B4C7E760" customClass="c-alice-carousel" transactions={props.transactions}/>

      <Awards />

      <Row className="team-grid container-custom" gutter={[20, 30]}>
        <Col sm={24} md={10} lg={10} xl={12}>
          <h1 style={{maxWidth: "100%"}}>
            Our team of sector specialists
          </h1>
          <p className="text-regular">
            Connell Consulting’s success is based on the wealth of experience of
            our people. We have a team of professionals with expertise across a
            wide variety of sectors, deal sizes, and transaction types.
          </p>
          <Link to="team">
            <button>
              Meet our experts 
              <LazyLoadImage
                effect="blur"
                alt=""
                src={ArrowBlack}
                style={{ marginBottom: "3px", marginLeft: "5px" }}
              />
            </button>
          </Link>
        </Col>
        <Col sm={24} md={14} lg={14} xl={12} className="team-grid-img">
          {team &&
            team.map((teamMember,i) => {
              {
                if(teamMember.data.member_status === "active") {
                return (
                  <img
                  key={i}
                    loading="lazy"
                    className="team_member_img"
                    src={
                      teamMember.data.blog_image ||
                      "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    }
                    alt="connell_staff"
                    width="100"
                    onError={() => console.log("error happened")}
                  />
                )}
              }
            })}
        
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Home



