import "./App.css";
import React, { useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Authcontext from "./pages/context/Authcontext";
//components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//page
import Home from "./pages/home";
import Services from "./pages/services";
import Sectors from "./pages/sectors";
import SectorsInside from "./pages/sectorsInside";
import Clients from "./pages/clients";
import News from "./pages/news";
import Contact from "./pages/contact";
import Transactions from "./pages/transactions";
import Careers from "./pages/careers";
import Team from "./pages/team";
import Candidates from "./pages/candidates";


import MetaInfo from "./pages/metaInfo";
import NewsInside from "./pages/newsInside";




function App() {
  const [userStatus, setUserStatus] = useState(null)
 
 

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      if(location.pathname.includes("news") 
          || location.pathname.includes("transactions") 
          || location.pathname.includes("news") )
      {
       return 
      } else {
        document.documentElement.scrollTo(0, 0);
      }
        
    }, [location.pathname]);
    
    return children
  } 




  


  

  const RequiresAuth = ({children}) => {
   let user_status_temp = localStorage.getItem("userStatus") == "true"
   return user_status_temp ? (children) : <Navigate to="/login" />
  }
   
 
 

  
  return (
    <>
      <Authcontext.Provider value={{userStatus, setUserStatus}}>
        <div className="App">
          <Wrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              {/* <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={
                <RequiresAuth>
                  <Dashboard />
                </RequiresAuth>
              } /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/*" element={<SectorsInside />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/news/blogs/*" element={<NewsInside />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/transactions/*" element={<Transactions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/*" element={<Candidates />} />
              <Route path="/team" element={<Team />} />

              <Route path="/policy" element={<MetaInfo 
              title={"Privacy Policy"}
              paragraphs1={[
                "Connell Consulting is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.",
                "Connell Consulting may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 20/01/2015."
              ]}
              ul1={{
                title: "What we collect",
                subtitle: "We may collect the following information:",
                lis: [
                  "name and business name",
                  "contact information including email address",
                  "demographic information such as postcode, preferences and interests",
                  "other information relevant to customer surveys and/or offers"
                ]
              }}
              ul2={{
                title: "What we do with the information we gather",
                subtitle: "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
                lis: [
                  "Internal record keeping.",
                  "We may use the information to improve our products and services.",
                  "We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.",
                  "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests."
                ]
              }}
              title2={"Security"}
              paragraphs2 = {[
                "We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online."
              ]}
              title3={"Link to other websites"}
              paragraphs3 = {[
                "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question."
              ]}

              ul3={{
                title: "Controlling your personal information",
                subtitle: "You may choose to restrict the collection or use of your personal information in the following ways:",
                lis: [
                  "whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes",
                  "if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@connell-consulting.com"
                ],
                ps: [
                  "We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",

                  "You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to: Connell Consulting, 9 Catherine Place Westminster London SW1E 6DX.",

                  "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect."
                ]
              }}
              />}/>
              <Route path="/cookies" element={<MetaInfo title={"Cookie Policy"} paragraphs1={[
                "Cookies are small text files that are placed on your computer by websites that you visit. They are often used to help make websites work, or work more efficiently, as well as to provide information to the owners of the site. We do not use cookies to identify you.",

                "You may delete and block all cookies from this site, but parts of the site may not work as a result. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org. To opt out of being tracked by Google Analytics across all websites visit http://tools.google.com/dlpage/gaoptout."
              ]}/>} />
              <Route path="/terms_and_conditions" element={<MetaInfo title={"Terms & conditions"} 
                  tctitle={"The use of this website is subject to the following terms of use:"}
                  paragraphs1={["If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Connell Consulting’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.",

                  "The term ‘Connell Consulting’ ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website."]}

                  tcul= {[
                   "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
                    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
                    "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.",
                    "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
                    "All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.",
                    "Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.",
                    "From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).",
 "We have no responsibility for the content of the linked website(s), Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales."
                  ]}
                  
                
              />} />
            </Routes>
            <Footer />
          </Wrapper>
        </div>
      </Authcontext.Provider>
    </>
   
   
  );
}

export default App;
