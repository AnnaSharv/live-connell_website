import React from 'react'
import Header from '../components/Header.js'


//components
import Banner from '../components/BannerCarousel'
import Services from '../components/OurServicesShort.js'
import BannerStatic from '../components/BannerStatic.js'
import Transactions from '../components/Transactions.js'
import News from '../components/News.js'
import Awards from '../components/Awards.js'
//image
import HeaderImg from '../assets/images/Header.svg'
import Img1 from '../assets/images/Clare-Goncalo-and-team-scaled 7.svg'
import Img2 from '../assets/images/Clare-Goncalo-and-team-scaled 8.svg'
import Img3 from '../assets/images/Clare-Goncalo-and-team-scaled 9.svg'
import Img4 from '../assets/images/Clare-Goncalo-and-team-scaled 10.svg'

import Aurora from '../assets/images/Aurora.svg'
import Advinia from '../assets/images/Advinia.svg'
import Accord from '../assets/images/Accord.svg'

function Home() {
  return (
    <div>
      <Header 
      title="Specialists in health, social care, education, pharma, biotech and vets."
      paragraphs={[
        "Connell Consulting offer private equity firms and corporate clients detailed market knowledge combined with commercial insight. Our commercial due diligence and strategic reports provide granular and comprehensive analysis. Our reports are based upon fresh and targeted primary research, plus comprehensive interviews with commissioners and other stakeholders at both local and national levels.",
        "Produced commercial due diligence reports on over £7 billion of health and social care transactions in the last year"
      ]}
      highlight={true}
      imageplural={false}
      img={HeaderImg}
      statistics={true}
      />

      <Banner title={["Awards Achieved", "Over engagements."]} imgArr={[Img1, Img2, Img3, Img4]} bg="#1D469610" icons={true}/>
      <Services />
      <Banner imgArr={[Aurora, Advinia, Accord,Aurora, Advinia, Accord]} bg="#1D4696" customClass="c-alice-carousel"/>
      <Transactions />
      <News />
      <Awards />
    </div>
  )
}

export default Home