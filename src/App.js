import "./App.css";
import React, {useEffect, useState, useLayoutEffect, useContext} from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import MetaInfo from "./pages/metaInfo";
import NewsInside from "./pages/newsInside";




function App() {
  const [userStatus, setUserStatus] = useState(null)
 
  useEffect(() => {
    var har=[{
      "log": {
        "version": "1.2",
        "creator": {
          "name": "WebInspector",
          "version": "537.36"
        },
        "pages": [
          {
            "startedDateTime": "2022-10-25T08:17:12.633Z",
            "id": "page_1",
            "title": "https://www.connell-consulting.com/deals/",
            "pageTimings": {
              "onContentLoad": 1202.891000022646,
              "onLoad": 2768.0299999774434
            }
          }
        ],
        "entries": [
          {
            "_initiator": {
              "type": "other"
            },
            "_priority": "VeryHigh",
            "_resourceType": "document",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/deals/",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "document"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "navigate"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "Sec-Fetch-User",
                  "value": "?1"
                },
                {
                  "name": "Upgrade-Insecure-Requests",
                  "value": "1"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 770,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "31463"
                },
                {
                  "name": "Content-Type",
                  "value": "text/html; charset=UTF-8"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:29 GMT"
                },
                {
                  "name": "Link",
                  "value": "<https://www.connell-consulting.com/wp-json/>; rel=\"https://api.w.org/\""
                },
                {
                  "name": "Link",
                  "value": "<https://www.connell-consulting.com/wp-json/wp/v2/pages/674>; rel=\"alternate\"; type=\"application/json\""
                },
                {
                  "name": "Link",
                  "value": "<https://www.connell-consulting.com/?p=674>; rel=shortlink"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "Accept-Encoding,Cookie"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 273669,
                "mimeType": "text/html",
                "compression": 242206
              },
              "redirectURL": "",
              "headersSize": 562,
              "bodySize": 31463,
              "_transferSize": 32025,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.629Z",
            "time": 211.52000001166016,
            "timings": {
              "blocked": 9.210000004023314,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.16800000000000015,
              "wait": 199.23599999883027,
              "receive": 2.9060000088065863,
              "_blocked_queueing": 3.9450000040233135,
              "_blocked_proxy": 0.3550000000000004
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 41
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/feed-them-social/feeds/css/styles.css?ver=3.0.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.0.1"
                }
              ],
              "cookies": [],
              "headersSize": 665,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "18491"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"1aeb3-5e65bd56e01a2-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:36:20 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 110259,
                "mimeType": "text/css",
                "compression": 91768
              },
              "redirectURL": "",
              "headersSize": 375,
              "bodySize": 18491,
              "_transferSize": 18866,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.858Z",
            "time": 193.53600003523752,
            "timings": {
              "blocked": 36.33200002090633,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1869999999999994,
              "wait": 154.2539999884516,
              "receive": 2.7630000258795917,
              "_blocked_queueing": 20.67300002090633,
              "_blocked_proxy": 0.4710000000000001
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 42
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/post-carousel-for-dv-builder//assets/css/owl.carousel.min.css?ver=6.0.3",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "6.0.3"
                }
              ],
              "cookies": [],
              "headersSize": 689,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "1068"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"d17-5b8253ba0b11a-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 05 Jan 2021 11:08:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 3351,
                "mimeType": "text/css",
                "compression": 2283
              },
              "redirectURL": "",
              "headersSize": 372,
              "bodySize": 1068,
              "_transferSize": 1440,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.858Z",
            "time": 291.462000051979,
            "timings": {
              "blocked": 193.4610000075847,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.0800000000000125,
              "wait": 96.29899997550248,
              "receive": 1.6220000688917935,
              "_blocked_queueing": 25.31900000758469,
              "_blocked_proxy": 0.6290000000000013
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 43
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/post-carousel-for-dv-builder//assets/css/fh-carousel.css?ver=1666685661",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "1666685661"
                }
              ],
              "cookies": [],
              "headersSize": 689,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "634"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"780-5b8253ba0b11a-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 05 Jan 2021 11:08:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 1920,
                "mimeType": "text/css",
                "compression": 1286
              },
              "redirectURL": "",
              "headersSize": 371,
              "bodySize": 634,
              "_transferSize": 1005,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.858Z",
            "time": 387.1170000056736,
            "timings": {
              "blocked": 36.46700002297014,
              "dns": 0,
              "ssl": 99.554,
              "connect": 251.68200000000002,
              "send": 1.136000000000024,
              "wait": 95.52399998716635,
              "receive": 2.3079999955371022,
              "_blocked_queueing": 25.21400002297014,
              "_blocked_proxy": 0.5400000000000009
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 79
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/et-cache/674/et-divi-dynamic-674-late.css?ver=1666640161",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "1666640161"
                }
              ],
              "cookies": [],
              "headersSize": 666,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "4537"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7072-5ebcce6c4a1ec-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Mon, 24 Oct 2022 19:36:01 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 28786,
                "mimeType": "text/css",
                "compression": 24249
              },
              "redirectURL": "",
              "headersSize": 373,
              "bodySize": 4537,
              "_transferSize": 4910,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.859Z",
            "time": 387.5209999735691,
            "timings": {
              "blocked": 39.07099998234585,
              "dns": 0.0259999999999998,
              "ssl": 99.28099999999998,
              "connect": 249.487,
              "send": 0.5339999999999918,
              "wait": 95.4649999715835,
              "receive": 2.9380000196397305,
              "_blocked_queueing": 25.09399998234585,
              "_blocked_proxy": 0.34499999999999886
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 80
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/booster-pack-for-divi/styles/style.min.css?ver=1.0.0",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "1.0.0"
                }
              ],
              "cookies": [],
              "headersSize": 670,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "1157"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"13db-5964904fd0566-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 01 Nov 2019 13:34:04 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 5083,
                "mimeType": "text/css",
                "compression": 3926
              },
              "redirectURL": "",
              "headersSize": 373,
              "bodySize": 1157,
              "_transferSize": 1530,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.859Z",
            "time": 386.2119999830611,
            "timings": {
              "blocked": 39.35700002175197,
              "dns": 0,
              "ssl": 100.656,
              "connect": 248.99600000000004,
              "send": 0.5279999999999632,
              "wait": 95.27899999422954,
              "receive": 2.0519999670796096,
              "_blocked_queueing": 24.93100002175197,
              "_blocked_proxy": 0.7270000000000003
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 81
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/themes/nettl-divi-child-theme/style.css?ver=21",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "21"
                }
              ],
              "cookies": [],
              "headersSize": 656,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "183"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"107-5990a92bbbb60-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 06 Dec 2019 15:19:34 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 263,
                "mimeType": "text/css",
                "compression": 80
              },
              "redirectURL": "",
              "headersSize": 371,
              "bodySize": 183,
              "_transferSize": 554,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.859Z",
            "time": 387.5760000082664,
            "timings": {
              "blocked": 290.57700000059606,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.06399999999996453,
              "wait": 93.41800000302123,
              "receive": 3.5170000046491623,
              "_blocked_queueing": 24.890000000596046,
              "_blocked_proxy": 0.4690000000000012
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 83
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919622",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.6.0"
                }
              ],
              "cookies": [],
              "headersSize": 630,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "30908"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"15db1-5cadb916db50c-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 31 Aug 2021 14:14:30 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 89521,
                "mimeType": "application/javascript",
                "compression": 58613
              },
              "redirectURL": "",
              "headersSize": 390,
              "bodySize": 30908,
              "_transferSize": 31298,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.860Z",
            "time": 633.8090000208467,
            "timings": {
              "blocked": 42.89600000024214,
              "dns": 0,
              "ssl": 194.42,
              "connect": 339.75899999999996,
              "send": 0.8550000000000182,
              "wait": 246.64099999004975,
              "receive": 3.658000030554831,
              "_blocked_queueing": 24.760000000242144,
              "_blocked_proxy": 0.21599999999999753
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 84
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.3.2"
                }
              ],
              "cookies": [],
              "headersSize": 638,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "4169"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"2bd8-5b6065e40b89f-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Wed, 09 Dec 2020 11:29:10 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 11224,
                "mimeType": "application/javascript",
                "compression": 7055
              },
              "redirectURL": "",
              "headersSize": 388,
              "bodySize": 4169,
              "_transferSize": 4557,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.860Z",
            "time": 500.5830000154674,
            "timings": {
              "blocked": 43.40500004439801,
              "dns": 0,
              "ssl": 195.241,
              "connect": 339.139,
              "send": 0.7860000000000014,
              "wait": 111.42099997578936,
              "receive": 5.831999995280057,
              "_blocked_queueing": 24.69700004439801,
              "_blocked_proxy": 0.11599999999999966
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 94
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/feed-them-social/admin/js/admin.js?ver=3.0.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.0.1"
                }
              ],
              "cookies": [],
              "headersSize": 648,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "335"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"25b-5e65bd56df201-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:36:20 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 603,
                "mimeType": "application/javascript",
                "compression": 268
              },
              "redirectURL": "",
              "headersSize": 386,
              "bodySize": 335,
              "_transferSize": 721,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.860Z",
            "time": 499.04899997636676,
            "timings": {
              "blocked": 386.366000010211,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.11200000000002319,
              "wait": 108.31499998053908,
              "receive": 4.255999985616654,
              "_blocked_queueing": 24.63900001021102,
              "_blocked_proxy": 0.13599999999999923
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 101
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/feed-them-social/admin/js/encrypt.js?ver=3.0.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.0.1"
                }
              ],
              "cookies": [],
              "headersSize": 650,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "1005"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"120b-5e65bd56df201-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:36:20 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 4619,
                "mimeType": "application/javascript",
                "compression": 3614
              },
              "redirectURL": "",
              "headersSize": 388,
              "bodySize": 1005,
              "_transferSize": 1393,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.860Z",
            "time": 498.49600001471117,
            "timings": {
              "blocked": 386.40000005099176,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09800000000001319,
              "wait": 108.04199999235198,
              "receive": 3.9559999713674188,
              "_blocked_queueing": 24.652000050991774,
              "_blocked_proxy": 0.21499999999999986
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 102
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/feed-them-social/feeds/js/powered-by.js?ver=3.0.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.0.1"
                }
              ],
              "cookies": [],
              "headersSize": 653,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "237"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"13c-5e65bd56e1142-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:36:20 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 316,
                "mimeType": "application/javascript",
                "compression": 79
              },
              "redirectURL": "",
              "headersSize": 386,
              "bodySize": 237,
              "_transferSize": 623,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.860Z",
            "time": 499.22500003594905,
            "timings": {
              "blocked": 386.7899999932945,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.07799999999997453,
              "wait": 107.73600001350792,
              "receive": 4.621000029146671,
              "_blocked_queueing": 24.674999993294477,
              "_blocked_proxy": 0.14300000000000068
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 109
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/feed-them-social/feeds/js/fts-global.js?ver=3.0.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.0.1"
                }
              ],
              "cookies": [],
              "headersSize": 653,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "4259"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"5789-5e65bd56e1142-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:36:20 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 22409,
                "mimeType": "application/javascript",
                "compression": 18150
              },
              "redirectURL": "",
              "headersSize": 388,
              "bodySize": 4259,
              "_transferSize": 4647,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.861Z",
            "time": 505.89999998919666,
            "timings": {
              "blocked": 386.6539999848157,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09399999999999409,
              "wait": 107.88600001759085,
              "receive": 11.26599998679012,
              "_blocked_queueing": 24.520999984815717,
              "_blocked_proxy": 0.23699999999999832
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 110
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/post-carousel-for-dv-builder//assets/js/owl.carousel.min.js?ver=6.0.3",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "6.0.3"
                }
              ],
              "cookies": [],
              "headersSize": 673,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "11412"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"ad36-5b8253ba0b11a-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 05 Jan 2021 11:08:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 44342,
                "mimeType": "application/javascript",
                "compression": 32930
              },
              "redirectURL": "",
              "headersSize": 389,
              "bodySize": 11412,
              "_transferSize": 11801,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.862Z",
            "time": 632.7990000136197,
            "timings": {
              "blocked": 499.2480000217855,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.30299999999999727,
              "wait": 130.07900001768394,
              "receive": 3.1689999741502106,
              "_blocked_queueing": 23.792000021785498,
              "_blocked_proxy": 0.1839999999999975
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 111
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/post-carousel-for-dv-builder//assets/js/fh-carousel.js?ver=1666685661",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "1666685661"
                }
              ],
              "cookies": [],
              "headersSize": 673,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "602"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"967-5b8253ba0b11a-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 05 Jan 2021 11:08:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 2407,
                "mimeType": "application/javascript",
                "compression": 1805
              },
              "redirectURL": "",
              "headersSize": 386,
              "bodySize": 602,
              "_transferSize": 988,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.863Z",
            "time": 631.5600000089034,
            "timings": {
              "blocked": 498.82600004081803,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1069999999999709,
              "wait": 130.28899997694418,
              "receive": 2.3379999911412597,
              "_blocked_queueing": 23.053000040818006,
              "_blocked_proxy": 0.21300000000000097
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 1258
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/themes/Divi/js/scripts.min.js?ver=4.18.0",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "4.18.0"
                }
              ],
              "cookies": [],
              "headersSize": 636,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "206"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "70295"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"42e58-5e65bd4082606-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:35:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 274008,
                "mimeType": "application/javascript",
                "compression": 203713
              },
              "redirectURL": "",
              "headersSize": 390,
              "bodySize": 70295,
              "_transferSize": 70685,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.863Z",
            "time": 896.5929999831133,
            "timings": {
              "blocked": 498.74099996043367,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.07300000000003593,
              "wait": 298.6729999848157,
              "receive": 99.10600003786385,
              "_blocked_queueing": 22.96599996043369,
              "_blocked_proxy": 0.26699999999999946
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 1259
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/booster-pack-for-divi/scripts/frontend-bundle.min.js?ver=1.0.0",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "1.0.0"
                }
              ],
              "cookies": [],
              "headersSize": 666,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "205"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "337"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"292-5964904fd0566-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 01 Nov 2019 13:34:04 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 658,
                "mimeType": "application/javascript",
                "compression": 321
              },
              "redirectURL": "",
              "headersSize": 386,
              "bodySize": 337,
              "_transferSize": 723,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.863Z",
            "time": 629.3709999881685,
            "timings": {
              "blocked": 498.6150000013709,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.11299999999999955,
              "wait": 128.7050000146553,
              "receive": 1.9379999721422791,
              "_blocked_queueing": 22.872000001370907,
              "_blocked_proxy": 0.26200000000000045
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 1260
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/themes/Divi/core/admin/js/common.js?ver=4.18.0",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "4.18.0"
                }
              ],
              "cookies": [],
              "headersSize": 642,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "205"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "566"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"53f-5e65bd4044da0-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:35:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 1343,
                "mimeType": "application/javascript",
                "compression": 777
              },
              "redirectURL": "",
              "headersSize": 386,
              "bodySize": 566,
              "_transferSize": 952,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.863Z",
            "time": 634.4939999980852,
            "timings": {
              "blocked": 503.71600002048535,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09200000000004138,
              "wait": 126.88400001471115,
              "receive": 3.801999962888658,
              "_blocked_queueing": 22.82100002048537,
              "_blocked_proxy": 0.254999999999999
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 1261
            },
            "_priority": "High",
            "_resourceType": "script",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "script"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "3.11.1"
                }
              ],
              "cookies": [],
              "headersSize": 664,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "205"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "3684"
                },
                {
                  "name": "Content-Type",
                  "value": "application/javascript"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"1eee-5ea3657de8f81-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 04 Oct 2022 14:33:26 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 7918,
                "mimeType": "application/javascript",
                "compression": 4234
              },
              "redirectURL": "",
              "headersSize": 388,
              "bodySize": 3684,
              "_transferSize": 4072,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:12.864Z",
            "time": 799.2910000029951,
            "timings": {
              "blocked": 630.2459999705591,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.08799999999996544,
              "wait": 166.3800000258684,
              "receive": 2.577000006567687,
              "_blocked_queueing": 22.73799997055903,
              "_blocked_proxy": 0.2680000000000007
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 251
            },
            "_priority": "VeryHigh",
            "_resourceType": "font",
            "cache": {},
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://fonts.gstatic.com/s/prata/v18/6xKhdSpbNNCT-sWPCm4.woff2",
              "httpVersion": "h3",
              "headers": [
                {
                  "name": ":authority",
                  "value": "fonts.gstatic.com"
                },
                {
                  "name": ":method",
                  "value": "GET"
                },
                {
                  "name": ":path",
                  "value": "/s/prata/v18/6xKhdSpbNNCT-sWPCm4.woff2"
                },
                {
                  "name": ":scheme",
                  "value": "https"
                },
                {
                  "name": "accept",
                  "value": "*/*"
                },
                {
                  "name": "accept-encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "accept-language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "cache-control",
                  "value": "no-cache"
                },
                {
                  "name": "origin",
                  "value": "https://www.connell-consulting.com"
                },
                {
                  "name": "pragma",
                  "value": "no-cache"
                },
                {
                  "name": "referer",
                  "value": "https://www.connell-consulting.com/"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                },
                {
                  "name": "sec-fetch-dest",
                  "value": "font"
                },
                {
                  "name": "sec-fetch-mode",
                  "value": "cors"
                },
                {
                  "name": "sec-fetch-site",
                  "value": "cross-site"
                },
                {
                  "name": "user-agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "x-client-data",
                  "value": "CI+2yQEIorbJAQjEtskBCKmdygEIlaHLAQi8vMwBCOO8zAEIxuHMAQ=="
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": -1,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "",
              "httpVersion": "h3",
              "headers": [
                {
                  "name": "accept-ranges",
                  "value": "bytes"
                },
                {
                  "name": "access-control-allow-origin",
                  "value": "*"
                },
                {
                  "name": "age",
                  "value": "462927"
                },
                {
                  "name": "alt-svc",
                  "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000,h3-Q050=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000,quic=\":443\"; ma=2592000; v=\"46,43\""
                },
                {
                  "name": "cache-control",
                  "value": "public, max-age=31536000"
                },
                {
                  "name": "content-length",
                  "value": "18396"
                },
                {
                  "name": "content-security-policy-report-only",
                  "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/apps-themes"
                },
                {
                  "name": "content-type",
                  "value": "font/woff2"
                },
                {
                  "name": "cross-origin-opener-policy",
                  "value": "same-origin; report-to=\"apps-themes\""
                },
                {
                  "name": "cross-origin-resource-policy",
                  "value": "cross-origin"
                },
                {
                  "name": "date",
                  "value": "Wed, 19 Oct 2022 23:42:03 GMT"
                },
                {
                  "name": "expires",
                  "value": "Thu, 19 Oct 2023 23:42:03 GMT"
                },
                {
                  "name": "last-modified",
                  "value": "Wed, 27 Apr 2022 15:41:47 GMT"
                },
                {
                  "name": "report-to",
                  "value": "{\"group\":\"apps-themes\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/apps-themes\"}]}"
                },
                {
                  "name": "server",
                  "value": "sffe"
                },
                {
                  "name": "timing-allow-origin",
                  "value": "*"
                },
                {
                  "name": "x-content-type-options",
                  "value": "nosniff"
                },
                {
                  "name": "x-xss-protection",
                  "value": "0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 18396,
                "mimeType": "font/woff2"
              },
              "redirectURL": "",
              "headersSize": -1,
              "bodySize": -1,
              "_transferSize": 18425,
              "_error": null
            },
            "serverIPAddress": "142.250.74.67",
            "startedDateTime": "2022-10-25T08:17:13.528Z",
            "time": 138.3620000560768,
            "timings": {
              "blocked": 5.2400000526830555,
              "dns": 0,
              "ssl": 0,
              "connect": 0,
              "send": 0.5529999999999999,
              "wait": 131.10400002403185,
              "receive": 1.4649999793618917,
              "_blocked_queueing": 1.9180000526830554,
              "_blocked_proxy": 0.2570000000000001
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/wp-content/et-cache/674/et-divi-dynamic-674-late.css?ver=1666640161"
            },
            "_priority": "VeryHigh",
            "_resourceType": "font",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/themes/Divi/core/admin/fonts/modules/social/modules.ttf",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "*/*"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Origin",
                  "value": "https://www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/wp-content/et-cache/674/et-divi-dynamic-674-late.css?ver=1666640161"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "font"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 751,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Content-Length",
                  "value": "10396"
                },
                {
                  "name": "Content-Type",
                  "value": "application/font-ttf"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"289c-5e65bd4043e00\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 16 Aug 2022 13:35:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 10396,
                "mimeType": "application/font-ttf",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 311,
              "bodySize": 10396,
              "_transferSize": 10707,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.528Z",
            "time": 141.6660000104457,
            "timings": {
              "blocked": 5.712000022891909,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.10199999999999987,
              "wait": 134.37499997502564,
              "receive": 1.4770000125281513,
              "_blocked_queueing": 1.8300000228919089,
              "_blocked_proxy": 0.7770000000000001
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [
                  {
                    "functionName": "",
                    "scriptId": "103",
                    "url": "https://www.connell-consulting.com/deals/",
                    "lineNumber": 1241,
                    "columnNumber": 14
                  },
                  {
                    "functionName": "",
                    "scriptId": "103",
                    "url": "https://www.connell-consulting.com/deals/",
                    "lineNumber": 1243,
                    "columnNumber": 5
                  }
                ]
              }
            },
            "_priority": "VeryHigh",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/et-cache/674/et-divi-dynamic-674-late.css",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 651,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "4537"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7072-5ebcce6c4a1ec-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Mon, 24 Oct 2022 19:36:01 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 28786,
                "mimeType": "text/css",
                "compression": 24249
              },
              "redirectURL": "",
              "headersSize": 373,
              "bodySize": 4537,
              "_transferSize": 4910,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.562Z",
            "time": 110.22699996829033,
            "timings": {
              "blocked": 5.610999947536737,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.19899999999999984,
              "wait": 102.72199997808039,
              "receive": 1.6950000426732004,
              "_blocked_queueing": 2.7679999475367367,
              "_blocked_proxy": 0.6059999999999999
            }
          },
          {
            "_initiator": {
              "type": "parser",
              "url": "https://www.connell-consulting.com/deals/",
              "lineNumber": 1248
            },
            "_priority": "VeryLow",
            "_resourceType": "stylesheet",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-includes/css/dist/block-library/style.min.css?ver=6.0.3",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "text/css,*/*;q=0.1"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "style"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [
                {
                  "name": "ver",
                  "value": "6.0.3"
                }
              ],
              "cookies": [],
              "headersSize": 657,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "200"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=600"
                },
                {
                  "name": "Content-Encoding",
                  "value": "gzip"
                },
                {
                  "name": "Content-Length",
                  "value": "11681"
                },
                {
                  "name": "Content-Type",
                  "value": "text/css"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:30 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"15b64-5e4153e96c46c-gzip\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Mon, 18 Jul 2022 14:32:59 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent,Accept-Encoding"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 88932,
                "mimeType": "text/css",
                "compression": 77251
              },
              "redirectURL": "",
              "headersSize": 375,
              "bodySize": 11681,
              "_transferSize": 12056,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.563Z",
            "time": 109.9889999604784,
            "timings": {
              "blocked": 5.2289999471418565,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.08400000000000007,
              "wait": 102.53600001646578,
              "receive": 2.139999996870756,
              "_blocked_queueing": 2.293999947141856,
              "_blocked_proxy": 0.9500000000000002
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/11/Tombstone-Investor-CDD-Heathcotes-by-Civitas.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 720,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "166731"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"28b4b-5b450a890a136\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 17 Nov 2020 17:16:41 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 166731,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 166731,
              "_transferSize": 167064,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.801Z",
            "time": 459.7969999886118,
            "timings": {
              "blocked": 9.816999992754312,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.17899999999999938,
              "wait": 163.0539999902956,
              "receive": 286.74700000556186,
              "_blocked_queueing": 3.0949999927543104,
              "_blocked_proxy": 0.36400000000000077
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/11/Tombstone-Investor-CDD-Pathway-Healthcare-by-Civitas.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 728,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "193845"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"2f535-5b3e5e5969efa\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Nov 2020 09:54:24 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 193845,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 193845,
              "_transferSize": 194178,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.801Z",
            "time": 486.2449999782257,
            "timings": {
              "blocked": 9.812999963004142,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09100000000000019,
              "wait": 162.4130000265576,
              "receive": 313.92799998866394,
              "_blocked_queueing": 3.350999963004142,
              "_blocked_proxy": 0.7729999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/New-Directions-Envivo-Group-Tombstone.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 713,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "134355"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"20cd3-5a37b4a2957fe\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 12:00:04 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 134355,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 134355,
              "_transferSize": 134688,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.801Z",
            "time": 467.4280000035651,
            "timings": {
              "blocked": 10.42499998573214,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.11000000000000032,
              "wait": 164.27799997569994,
              "receive": 292.61500004213303,
              "_blocked_queueing": 3.804999985732138,
              "_blocked_proxy": 0.17499999999999982
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/VMH-Envivo-Group-Tombstone.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 702,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "127586"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"1f262-5a37b4af3eb5e\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 12:00:17 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 127586,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 127586,
              "_transferSize": 127919,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.802Z",
            "time": 475.07399995811284,
            "timings": {
              "blocked": 11.41900000571087,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.07700000000000085,
              "wait": 257.5720000175424,
              "receive": 206.00599993485957,
              "_blocked_queueing": 3.90700000571087,
              "_blocked_proxy": 0.18299999999999983
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919622",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/Spaghetti-Bridge-Downing-Tombstone.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 710,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "157483"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"2672b-5a37a6ba68b57\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 10:57:50 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 157483,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 157483,
              "_transferSize": 157816,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.802Z",
            "time": 612.031000026036,
            "timings": {
              "blocked": 11.396000023845584,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.07800000000000029,
              "wait": 166.31199999090285,
              "receive": 434.24500001128763,
              "_blocked_queueing": 4.154000023845583,
              "_blocked_proxy": 0.29100000000000037
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated-18-12.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 707,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "124383"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"1e5df-599fbddf413ec\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Wed, 18 Dec 2019 15:12:03 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 124383,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 124383,
              "_transferSize": 124716,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.802Z",
            "time": 369.61700004758313,
            "timings": {
              "blocked": 107.02299999189749,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.13500000000000512,
              "wait": 153.18799997447803,
              "receive": 109.2710000812076,
              "_blocked_queueing": 4.424999991897494,
              "_blocked_proxy": 0.2809999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated-18-12-b.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 709,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "143071"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"22edf-599fbe0ecce40\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Wed, 18 Dec 2019 15:12:53 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 143071,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 143071,
              "_transferSize": 143404,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.802Z",
            "time": 625.0149999978021,
            "timings": {
              "blocked": 372.7429999858439,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09399999999999986,
              "wait": 103.26999998000636,
              "receive": 148.90800003195181,
              "_blocked_queueing": 369.7999999858439,
              "_blocked_proxy": 0.31599999999999984
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 710,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "513450"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7d5aa-59981789996aa\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:10:36 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 513450,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 513450,
              "_transferSize": 513783,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.803Z",
            "time": 946.8099999940023,
            "timings": {
              "blocked": 461.6010000322908,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.12300000000000022,
              "wait": 134.66100000846387,
              "receive": 350.4249999532476,
              "_blocked_queueing": 458.5720000322908,
              "_blocked_proxy": 0.30699999999999994
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    },
                    {
                      "functionName": "_",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 6359
                    },
                    {
                      "functionName": "S",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7061
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7857
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7864
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 7867
                    }
                  ]
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919555",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated2-2-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "182"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "475901"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"742fd-5998176507e38\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:09:58 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 475901,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 475901,
              "_transferSize": 476234,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:13.803Z",
            "time": 1272.7559999912046,
            "timings": {
              "blocked": 469.48200004171207,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.10600000000000032,
              "wait": 144.26899997675793,
              "receive": 658.8989999727346,
              "_blocked_queueing": 466.6380000417121,
              "_blocked_proxy": 0.33399999999999963
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2021/06/Tombstone-vendor-CDD-for-the-sale-of-Routes-Healthcare-by-Key-Capital-Partners.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 754,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "149891"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"24983-5c5570ab47ba8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 22 Jun 2021 09:01:55 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 149891,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 149891,
              "_transferSize": 150224,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.572Z",
            "time": 250.538999971468,
            "timings": {
              "blocked": 15.213000012774021,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.21099999999999852,
              "wait": 134.83000002373754,
              "receive": 100.28499993495643,
              "_blocked_queueing": 3.5410000127740204,
              "_blocked_proxy": 0.8509999999999991
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919622",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2021/05/Tombstone-Investor-CDD-Crusader-Medical-Care-by-Envivo-1.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 732,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "133538"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"209a2-5c1b95b731009\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 07 May 2021 08:38:50 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 133538,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 133538,
              "_transferSize": 133871,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.572Z",
            "time": 247.58999998448417,
            "timings": {
              "blocked": 15.428999986004085,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1609999999999996,
              "wait": 124.5889999939762,
              "receive": 107.41100000450388,
              "_blocked_queueing": 3.2469999860040843,
              "_blocked_proxy": 1.552999999999999
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2021/03/Tombstone-Investor-CDD-Berkley-Care-Group-by-Korian.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 727,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "135950"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"2130e-5bca39efe7e47\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Wed, 03 Mar 2021 15:36:56 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 135950,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 135950,
              "_transferSize": 136283,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.572Z",
            "time": 236.9330000365153,
            "timings": {
              "blocked": 15.335999986670911,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.07699999999999996,
              "wait": 119.14400002546608,
              "receive": 102.3760000243783,
              "_blocked_queueing": 3.1629999866709113,
              "_blocked_proxy": 1.5579999999999998
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2022/01/Tombstone-vendor-CDD-for-the-sale-of-consensus-by-stirling-square.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 741,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "153360"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:31 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"25710-5d5de44bc4033\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 18 Jan 2022 17:04:56 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 153360,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 153360,
              "_transferSize": 153693,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.573Z",
            "time": 229.92399998474866,
            "timings": {
              "blocked": 15.17300001077354,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.0519999999999996,
              "wait": 109.56799998463318,
              "receive": 105.13099998934194,
              "_blocked_queueing": 3.7930000107735395,
              "_blocked_proxy": 1.5679999999999996
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919603",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/11/Tombstone-vendor-CDD-for-the-sale-of-Exemplar-by-Agilitas.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 733,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "132645"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"20625-5b450a9d42d56\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 17 Nov 2020 17:17:03 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 132645,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 132645,
              "_transferSize": 132978,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.573Z",
            "time": 314.71999996574596,
            "timings": {
              "blocked": 183.38099995257332,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.23099999999999987,
              "wait": 118.8560000272803,
              "receive": 12.251999985892326,
              "_blocked_queueing": 177.15099995257333,
              "_blocked_proxy": 0.44399999999999995
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919617",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/11/Tombstone-Investor-CDD-Cream-Care-Group-by-Civitas.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 726,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "203129"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"31979-5b450aa707cf5\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 17 Nov 2020 17:17:13 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 203129,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 203129,
              "_transferSize": 203462,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.573Z",
            "time": 502.8150000143796,
            "timings": {
              "blocked": 234.3019999876544,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1280000000000001,
              "wait": 91.21100001543388,
              "receive": 177.17400001129135,
              "_blocked_queueing": 230.1689999876544,
              "_blocked_proxy": 0.41800000000000015
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919600",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated3-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "464485"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"71665-5998175cfe530\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:09:49 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 464485,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 464485,
              "_transferSize": 464818,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.574Z",
            "time": 618.4919999795966,
            "timings": {
              "blocked": 239.97999998854846,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.16199999999999992,
              "wait": 97.54299998822435,
              "receive": 280.80700000282377,
              "_blocked_queueing": 236.25399998854846,
              "_blocked_proxy": 0.7349999999999999
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/Leonard-Cheshire-Tombstone.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 702,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "122770"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"1df92-5a37a6c371357\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 10:58:00 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 122770,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 122770,
              "_transferSize": 123103,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.574Z",
            "time": 356.6669999854639,
            "timings": {
              "blocked": 252.56099998840318,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.23299999999999965,
              "wait": 94.51299997157976,
              "receive": 9.360000025480986,
              "_blocked_queueing": 246.39799998840317,
              "_blocked_proxy": 0.4870000000000001
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated5-2-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "183"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "532510"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"8201e-5998171eaa706\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:08:44 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 532510,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 532510,
              "_transferSize": 532843,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:14.978Z",
            "time": 417.7409999538213,
            "timings": {
              "blocked": 6.170999998994171,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.11800000000000033,
              "wait": 95.58299997117743,
              "receive": 315.8689999836497,
              "_blocked_queueing": 2.9199999989941716,
              "_blocked_proxy": 0.31000000000000005
            }
          },
          {
            "_initiator": {
              "type": "other"
            },
            "_priority": "High",
            "_resourceType": "other",
            "cache": {},
            "connection": "919613",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2021/08/cropped-CC-favicon-32x32.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 700,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "369"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:32 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"171-5c95a347bb8a6\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Aug 2021 10:29:08 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 369,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 326,
              "bodySize": 369,
              "_transferSize": 695,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:15.447Z",
            "time": 142.05099997343495,
            "timings": {
              "blocked": 12.735999976418913,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.16199999999999992,
              "wait": 127.712000025779,
              "receive": 1.4409999712370336,
              "_blocked_queueing": 9.429999976418912,
              "_blocked_proxy": 0.3200000000000003
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/Fieldbay-Envivo-Group-Tombstone.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 707,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "143819"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"231cb-5a37b4b7f145e\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 12:00:26 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 143819,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 143819,
              "_transferSize": 144152,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:20.882Z",
            "time": 712.3960000224188,
            "timings": {
              "blocked": 9.887999997701495,
              "dns": 0.04899999999999949,
              "ssl": 197.457,
              "connect": 289.546,
              "send": 0.3499999999999659,
              "wait": 202.33199999104443,
              "receive": 210.2310000336729,
              "_blocked_queueing": 3.431999997701496,
              "_blocked_proxy": 0.6440000000000001
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919844",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated6-2-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "507811"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7bfa3-59981702c28d4\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:08:15 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 507811,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 507811,
              "_transferSize": 508144,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:20.882Z",
            "time": 2550.349000016149,
            "timings": {
              "blocked": 10.32300001681596,
              "dns": 0.008999999999999453,
              "ssl": 197.215,
              "connect": 288.739,
              "send": 0.3580000000000041,
              "wait": 207.42199998569117,
              "receive": 2043.498000013642,
              "_blocked_queueing": 3.3810000168159604,
              "_blocked_proxy": 1.4619999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919847",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated7-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "455706"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6f41a-599816edadd66\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:07:53 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 455706,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 455706,
              "_transferSize": 456039,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:20.883Z",
            "time": 1525.7930000254064,
            "timings": {
              "blocked": 10.2820000022538,
              "dns": 0.0129999999999999,
              "ssl": 197.10399999999998,
              "connect": 288.52,
              "send": 0.39400000000000546,
              "wait": 204.10900001793726,
              "receive": 1022.4750000052154,
              "_blocked_queueing": 3.2950000022538006,
              "_blocked_proxy": 1.6260000000000003
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated8-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "479899"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7529b-599816d862768\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:07:30 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 479899,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 479899,
              "_transferSize": 480232,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.152Z",
            "time": 972.7859999778047,
            "timings": {
              "blocked": 8.17299996747449,
              "dns": 0.017999999999999794,
              "ssl": 98.32600000000002,
              "connect": 223.358,
              "send": 0.42500000000001137,
              "wait": 213.1400000138022,
              "receive": 527.671999996528,
              "_blocked_queueing": 2.5259999674744904,
              "_blocked_proxy": 0.25400000000000045
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919868",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated9-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 711,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "526189"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"8076d-599816bc4002e\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:07:01 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 526189,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 526189,
              "_transferSize": 526522,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.152Z",
            "time": 4414.621000008441,
            "timings": {
              "blocked": 8.23900000166148,
              "dns": 0.006999999999999673,
              "ssl": 222.98600000000002,
              "connect": 347.85,
              "send": 0.2909999999999968,
              "wait": 553.0150000225715,
              "receive": 3505.2189999842085,
              "_blocked_queueing": 2.5840000016614795,
              "_blocked_proxy": 0.6559999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919871",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated11-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "509032"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7c468-5998168a9992a\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:06:09 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 509032,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 509032,
              "_transferSize": 509365,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.152Z",
            "time": 4222.018999991421,
            "timings": {
              "blocked": 8.221999964963643,
              "dns": 0.006000000000000227,
              "ssl": 223.21300000000002,
              "connect": 348.03700000000003,
              "send": 0.18799999999998818,
              "wait": 552.7849999822602,
              "receive": 3312.781000044197,
              "_blocked_queueing": 2.7549999649636447,
              "_blocked_proxy": 0.8049999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated10-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "548803"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:38 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"85fc3-599816a346b9a\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:06:35 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 548803,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 548803,
              "_transferSize": 549136,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.153Z",
            "time": 1173.6220000311732,
            "timings": {
              "blocked": 445.9990000266358,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1349999999999998,
              "wait": 155.93900001885743,
              "receive": 571.54899998568,
              "_blocked_queueing": 442.3500000266358,
              "_blocked_proxy": 0.32899999999999974
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated12-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "187947"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:39 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"2de2b-599816707a7d0\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:05:41 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 187947,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 187947,
              "_transferSize": 188280,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.153Z",
            "time": 1262.0020000031218,
            "timings": {
              "blocked": 977.3260000070036,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.12300000000000022,
              "wait": 185.00200000405684,
              "receive": 99.5509999920614,
              "_blocked_queueing": 972.1450000070035,
              "_blocked_proxy": 0.5659999999999998
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated14-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "489232"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:39 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"77710-599816456cff8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:04:56 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 489232,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 489232,
              "_transferSize": 489565,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:21.153Z",
            "time": 1695.2159999636933,
            "timings": {
              "blocked": 1176.8079999856427,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09799999999999986,
              "wait": 89.07700000458583,
              "receive": 429.23299997346476,
              "_blocked_queueing": 1173.5089999856427,
              "_blocked_proxy": 0.33499999999999996
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919847",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated15-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "243471"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:39 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"3b70f-599816205eab8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:04:17 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 243471,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 243471,
              "_transferSize": 243804,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.181Z",
            "time": 627.7289999998175,
            "timings": {
              "blocked": 233.719999976065,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.15500000000000025,
              "wait": 91.47599997250363,
              "receive": 302.3780000512488,
              "_blocked_queueing": 228.049999976065,
              "_blocked_proxy": 0.5149999999999997
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated16-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "491405"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:39 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"77f8d-599816149edb8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:04:05 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 491405,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 331,
              "bodySize": 491405,
              "_transferSize": 491736,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.182Z",
            "time": 677.7340000262484,
            "timings": {
              "blocked": 235.84300002040715,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1599999999999997,
              "wait": 108.24599999572709,
              "receive": 333.48500001011416,
              "_blocked_queueing": 233.81200002040714,
              "_blocked_proxy": 0.32199999999999984
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ],
                          "parent": {
                            "description": "load",
                            "callFrames": [
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6235
                              },
                              {
                                "functionName": "_",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 6210
                              },
                              {
                                "functionName": "S",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7061
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7857
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7864
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 7867
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919847",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated17-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "519565"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7ed8d-5998160c1f138\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:03:56 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 519565,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 331,
              "bodySize": 519565,
              "_transferSize": 519896,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.182Z",
            "time": 1779.6300000045449,
            "timings": {
              "blocked": 632.2489999941624,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.23500000000000032,
              "wait": 127.69699999639019,
              "receive": 1019.4490000139922,
              "_blocked_queueing": 627.1319999941625,
              "_blocked_proxy": 0.40300000000000047
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2063
                          },
                          {
                            "functionName": "le",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 4080
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1280
                            },
                            {
                              "functionName": "C",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1255
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 4723
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2079
                            },
                            {
                              "functionName": "be",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1865
                            }
                          ],
                          "parent": {
                            "description": "requestAnimationFrame",
                            "callFrames": [
                              {
                                "functionName": "Ae",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 1960
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2063
                              },
                              {
                                "functionName": "fe",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 5410
                              },
                              {
                                "functionName": "ie",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 3741
                              },
                              {
                                "functionName": "s",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2180
                              }
                            ],
                            "parent": {
                              "description": "setTimeout",
                              "callFrames": [
                                {
                                  "functionName": "",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 2273
                                },
                                {
                                  "functionName": "be",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 1865
                                }
                              ],
                              "parent": {
                                "description": "requestAnimationFrame",
                                "callFrames": [
                                  {
                                    "functionName": "Ae",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 1960
                                  },
                                  {
                                    "functionName": "",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 2023
                                  }
                                ],
                                "parent": {
                                  "description": "setTimeout",
                                  "callFrames": [
                                    {
                                      "functionName": "",
                                      "scriptId": "106",
                                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                      "lineNumber": 0,
                                      "columnNumber": 2375
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated18-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "186"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "491535"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7800f-599815f0f0178\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:03:28 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 491535,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 491535,
              "_transferSize": 491868,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.485Z",
            "time": 1156.4829999697395,
            "timings": {
              "blocked": 367.3059999721162,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1459999999999999,
              "wait": 105.90799997327105,
              "receive": 683.1230000243522,
              "_blocked_queueing": 363.9349999721162,
              "_blocked_proxy": 0.3540000000000001
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2063
                          },
                          {
                            "functionName": "le",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 4080
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1280
                            },
                            {
                              "functionName": "C",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1255
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 4723
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2079
                            },
                            {
                              "functionName": "be",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1865
                            }
                          ],
                          "parent": {
                            "description": "requestAnimationFrame",
                            "callFrames": [
                              {
                                "functionName": "Ae",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 1960
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2063
                              },
                              {
                                "functionName": "fe",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 5410
                              },
                              {
                                "functionName": "ie",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 3741
                              },
                              {
                                "functionName": "s",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2180
                              }
                            ],
                            "parent": {
                              "description": "setTimeout",
                              "callFrames": [
                                {
                                  "functionName": "",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 2273
                                },
                                {
                                  "functionName": "be",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 1865
                                }
                              ],
                              "parent": {
                                "description": "requestAnimationFrame",
                                "callFrames": [
                                  {
                                    "functionName": "Ae",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 1960
                                  },
                                  {
                                    "functionName": "",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 2023
                                  }
                                ],
                                "parent": {
                                  "description": "setTimeout",
                                  "callFrames": [
                                    {
                                      "functionName": "",
                                      "scriptId": "106",
                                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                      "lineNumber": 0,
                                      "columnNumber": 2375
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated19-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "452500"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6e794-599815ae93cf8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:02:18 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 452500,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 452500,
              "_transferSize": 452833,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.486Z",
            "time": 695.9939999505877,
            "timings": {
              "blocked": 379.65599999336524,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.13100000000000023,
              "wait": 107.00899998949468,
              "receive": 209.1979999677278,
              "_blocked_queueing": 374.70099999336526,
              "_blocked_proxy": 0.34499999999999975
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2063
                          },
                          {
                            "functionName": "le",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 4080
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1280
                            },
                            {
                              "functionName": "C",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1255
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 4723
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2079
                            },
                            {
                              "functionName": "be",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 1865
                            }
                          ],
                          "parent": {
                            "description": "requestAnimationFrame",
                            "callFrames": [
                              {
                                "functionName": "Ae",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 1960
                              },
                              {
                                "functionName": "",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2063
                              },
                              {
                                "functionName": "fe",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 5410
                              },
                              {
                                "functionName": "ie",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 3741
                              },
                              {
                                "functionName": "s",
                                "scriptId": "106",
                                "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                "lineNumber": 0,
                                "columnNumber": 2180
                              }
                            ],
                            "parent": {
                              "description": "setTimeout",
                              "callFrames": [
                                {
                                  "functionName": "",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 2273
                                },
                                {
                                  "functionName": "be",
                                  "scriptId": "106",
                                  "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                  "lineNumber": 0,
                                  "columnNumber": 1865
                                }
                              ],
                              "parent": {
                                "description": "requestAnimationFrame",
                                "callFrames": [
                                  {
                                    "functionName": "Ae",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 1960
                                  },
                                  {
                                    "functionName": "",
                                    "scriptId": "106",
                                    "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                    "lineNumber": 0,
                                    "columnNumber": 2023
                                  }
                                ],
                                "parent": {
                                  "description": "setTimeout",
                                  "callFrames": [
                                    {
                                      "functionName": "",
                                      "scriptId": "106",
                                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                                      "lineNumber": 0,
                                      "columnNumber": 2375
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated20-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "516973"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7e36d-599815a3a20d8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:02:07 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 516973,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 331,
              "bodySize": 516973,
              "_transferSize": 517304,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:22.487Z",
            "time": 1679.318999988027,
            "timings": {
              "blocked": 698.3130000399947,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.16000000000000014,
              "wait": 350.59999999106304,
              "receive": 630.2459999569692,
              "_blocked_queueing": 695.1190000399947,
              "_blocked_proxy": 0.371
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2371
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6235
                            },
                            {
                              "functionName": "_",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6210
                            },
                            {
                              "functionName": "S",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7061
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7857
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7864
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7867
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919844",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated21-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "273389"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"42bed-5998157c84618\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:01:26 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 273389,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 273389,
              "_transferSize": 273722,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:23.461Z",
            "time": 712.3790000332519,
            "timings": {
              "blocked": 5.8220000033900146,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.2749999999999999,
              "wait": 178.85100000578166,
              "receive": 527.4310000240803,
              "_blocked_queueing": 2.890000003390014,
              "_blocked_proxy": 0.3219999999999996
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2371
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6235
                            },
                            {
                              "functionName": "_",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6210
                            },
                            {
                              "functionName": "S",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7061
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7857
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7864
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7867
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated22-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "185"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "487591"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:40 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"770a7-599815617d6f8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:00:57 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 487591,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 487591,
              "_transferSize": 487924,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:23.461Z",
            "time": 1600.2410000073723,
            "timings": {
              "blocked": 184.8850000015758,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.2320000000000002,
              "wait": 196.9429999728687,
              "receive": 1218.1810000329278,
              "_blocked_queueing": 180.8420000015758,
              "_blocked_proxy": 0.5710000000000002
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2371
                          }
                        ],
                        "parent": {
                          "description": "load",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6235
                            },
                            {
                              "functionName": "_",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 6210
                            },
                            {
                              "functionName": "S",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7061
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7857
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7864
                            },
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 7867
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919847",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated25-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "186"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "457226"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:41 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6fa0a-59981507ac458\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:59:23 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 457226,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 457226,
              "_transferSize": 457559,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:23.461Z",
            "time": 1660.6809999793768,
            "timings": {
              "blocked": 504.1520000063218,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.17500000000000027,
              "wait": 204.1280000081882,
              "receive": 952.2259999648668,
              "_blocked_queueing": 500.5130000063218,
              "_blocked_proxy": 0.2999999999999998
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919844",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated23-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "186"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "506517"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:41 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7ba95-599815324f4f8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 13:00:08 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 506517,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 506517,
              "_transferSize": 506850,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.362Z",
            "time": 825.5950000020675,
            "timings": {
              "blocked": 7.217000037617981,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1299999999999999,
              "wait": 136.92099999513476,
              "receive": 681.3269999693148,
              "_blocked_queueing": 3.2920000376179814,
              "_blocked_proxy": 0.22999999999999998
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919865",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated24-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "445444"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:41 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6cc04-5998151447cf8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:59:36 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 445444,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 331,
              "bodySize": 445444,
              "_transferSize": 445775,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.363Z",
            "time": 1118.6869999510236,
            "timings": {
              "blocked": 7.025999981608242,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.05699999999999994,
              "wait": 194.77300001807137,
              "receive": 916.830999951344,
              "_blocked_queueing": 3.276999981608242,
              "_blocked_proxy": 0.4370000000000003
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated26-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "0"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "539951"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:42 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"83d2f-599814f520398\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:59:04 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 0"
                }
              ],
              "cookies": [],
              "content": {
                "size": 539951,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 331,
              "bodySize": 539951,
              "_transferSize": 540282,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.363Z",
            "time": 1515.5099999974482,
            "timings": {
              "blocked": 702.536999981612,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1499999999999999,
              "wait": 104.61400001184643,
              "receive": 708.2090000039898,
              "_blocked_queueing": 699.330999981612,
              "_blocked_proxy": 0.30400000000000027
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919847",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated27-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "184"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "454899"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:42 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6f0f3-599814d334a18\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:58:28 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 454899,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 454899,
              "_transferSize": 455232,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.363Z",
            "time": 1406.7229999927804,
            "timings": {
              "blocked": 766.9020000175535,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.2010000000000005,
              "wait": 125.1899999941513,
              "receive": 514.4299999810755,
              "_blocked_queueing": 759.5730000175536,
              "_blocked_proxy": 0.4280000000000008
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919844",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated28-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "184"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "491167"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:42 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"77e9f-599814b1cfcd8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:57:53 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 491167,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 491167,
              "_transferSize": 491500,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.364Z",
            "time": 1364.8379999794997,
            "timings": {
              "blocked": 831.4099999962151,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.21300000000000008,
              "wait": 97.07200001339615,
              "receive": 436.1429999698885,
              "_blocked_queueing": 824.7609999962151,
              "_blocked_proxy": 0.3570000000000002
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919871",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated29-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "184"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "213862"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:42 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"34366-5998148c4c498\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:57:14 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 213862,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 213862,
              "_transferSize": 214195,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:24.364Z",
            "time": 1810.2860000217333,
            "timings": {
              "blocked": 1016.8060000161864,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.20899999999999963,
              "wait": 93.40799998935312,
              "receive": 699.8630000161938,
              "_blocked_queueing": 1010.8800000161864,
              "_blocked_proxy": 0.33199999999999985
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919871",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated30-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "262873"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:44 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"402d9-5998146ae4878\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:56:39 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 262873,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 262873,
              "_transferSize": 263206,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.338Z",
            "time": 1002.7019999688491,
            "timings": {
              "blocked": 9.858999956920744,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.22299999999999986,
              "wait": 243.86700001935287,
              "receive": 748.7529999925755,
              "_blocked_queueing": 3.418999956920743,
              "_blocked_proxy": 0.5049999999999999
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/04/European-Care-Group-Tombstone-1.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 707,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "139377"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:44 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"22071-5a37a8f750ad1\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Fri, 17 Apr 2020 11:07:51 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 139377,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 139377,
              "_transferSize": 139710,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.339Z",
            "time": 458.1200000247918,
            "timings": {
              "blocked": 10.249999980587512,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09499999999999975,
              "wait": 241.84000000968948,
              "receive": 205.93500003451481,
              "_blocked_queueing": 3.2309999805875123,
              "_blocked_proxy": 0.8920000000000003
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919983",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated31-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "444812"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:44 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6c98c-5998145e67438\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:56:26 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 444812,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 444812,
              "_transferSize": 445145,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.339Z",
            "time": 974.4929999774993,
            "timings": {
              "blocked": 9.415999986670911,
              "dns": 0.02799999999999958,
              "ssl": 208.729,
              "connect": 351.072,
              "send": 0.27300000000002456,
              "wait": 199.18700002250074,
              "receive": 414.5169999683276,
              "_blocked_queueing": 3.1629999866709113,
              "_blocked_proxy": 0.8799999999999999
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated32-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "189"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "217575"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"351e7-5998143d9eaf8\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:55:51 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 217575,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 217575,
              "_transferSize": 217908,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.637Z",
            "time": 503.12000000849366,
            "timings": {
              "blocked": 160.46400001304596,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.09900000000001796,
              "wait": 101.65800002783536,
              "receive": 240.89899996761233,
              "_blocked_queueing": 2.9830000130459666,
              "_blocked_proxy": 0.43599999999999994
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "920005",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated33-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "189"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "460544"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"70700-5998142fd7578\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:55:37 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 460544,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 460544,
              "_transferSize": 460877,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.637Z",
            "time": 987.5329999937751,
            "timings": {
              "blocked": 8.06400002046302,
              "dns": 0.01699999999999946,
              "ssl": 85.816,
              "connect": 170.714,
              "send": 0.24899999999999523,
              "wait": 225.33900001112372,
              "receive": 583.1499999621883,
              "_blocked_queueing": 2.7470000204630196,
              "_blocked_proxy": 1.0570000000000004
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "920002",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated35-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "189"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "537943"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"83557-599813ff88278\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:54:46 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 537943,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 537943,
              "_transferSize": 538276,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.637Z",
            "time": 1100.338999996893,
            "timings": {
              "blocked": 8.005000013004988,
              "dns": 0,
              "ssl": 86.539,
              "connect": 172.44400000000002,
              "send": 0.18799999999998818,
              "wait": 227.13299997770042,
              "receive": 692.5690000061877,
              "_blocked_queueing": 2.6390000130049884,
              "_blocked_proxy": 1.186
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "920008",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated36-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 710,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "188"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "520921"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"7f2d9-599813dd99a18\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:54:11 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 520921,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 520921,
              "_transferSize": 521254,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.892Z",
            "time": 643.4519999893382,
            "timings": {
              "blocked": 7.118999963078648,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.13200000000000056,
              "wait": 234.6329999960214,
              "receive": 401.5680000302382,
              "_blocked_queueing": 2.555999963078648,
              "_blocked_proxy": 0.3250000000000002
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919841",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2019/12/Tombstone-mock-up-updated34-1-scaled.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 712,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "189"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "454553"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"6ef99-59981410b9858\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Thu, 12 Dec 2019 12:55:04 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 454553,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 454553,
              "_transferSize": 454886,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.892Z",
            "time": 920.8269999944605,
            "timings": {
              "blocked": 254.45099997993185,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.1479999999999997,
              "wait": 101.89200000415742,
              "receive": 564.3360000103712,
              "_blocked_queueing": 247.72699997993186,
              "_blocked_proxy": 0.5879999999999992
            }
          },
          {
            "_initiator": {
              "type": "script",
              "stack": {
                "callFrames": [],
                "parent": {
                  "description": "Image",
                  "callFrames": [
                    {
                      "functionName": "A",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1583
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 4866
                    },
                    {
                      "functionName": "",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 2079
                    },
                    {
                      "functionName": "be",
                      "scriptId": "106",
                      "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                      "lineNumber": 0,
                      "columnNumber": 1865
                    }
                  ],
                  "parent": {
                    "description": "requestAnimationFrame",
                    "callFrames": [
                      {
                        "functionName": "Ae",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 1960
                      },
                      {
                        "functionName": "",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2063
                      },
                      {
                        "functionName": "fe",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 5410
                      },
                      {
                        "functionName": "ie",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 3741
                      },
                      {
                        "functionName": "s",
                        "scriptId": "106",
                        "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                        "lineNumber": 0,
                        "columnNumber": 2180
                      }
                    ],
                    "parent": {
                      "description": "setTimeout",
                      "callFrames": [
                        {
                          "functionName": "",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 2273
                        },
                        {
                          "functionName": "be",
                          "scriptId": "106",
                          "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                          "lineNumber": 0,
                          "columnNumber": 1865
                        }
                      ],
                      "parent": {
                        "description": "requestAnimationFrame",
                        "callFrames": [
                          {
                            "functionName": "Ae",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 1960
                          },
                          {
                            "functionName": "",
                            "scriptId": "106",
                            "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                            "lineNumber": 0,
                            "columnNumber": 2023
                          }
                        ],
                        "parent": {
                          "description": "setTimeout",
                          "callFrames": [
                            {
                              "functionName": "",
                              "scriptId": "106",
                              "url": "https://www.connell-consulting.com/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.11.1",
                              "lineNumber": 0,
                              "columnNumber": 2375
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "_priority": "Low",
            "_resourceType": "image",
            "cache": {},
            "connection": "919983",
            "pageref": "page_1",
            "request": {
              "method": "GET",
              "url": "https://www.connell-consulting.com/wp-content/uploads/2020/08/Tombstone-Eden-Futures-by-Sovereign-3.png",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept",
                  "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
                },
                {
                  "name": "Accept-Encoding",
                  "value": "gzip, deflate, br"
                },
                {
                  "name": "Accept-Language",
                  "value": "en-US,en;q=0.9"
                },
                {
                  "name": "Cache-Control",
                  "value": "no-cache"
                },
                {
                  "name": "Connection",
                  "value": "keep-alive"
                },
                {
                  "name": "Host",
                  "value": "www.connell-consulting.com"
                },
                {
                  "name": "Pragma",
                  "value": "no-cache"
                },
                {
                  "name": "Referer",
                  "value": "https://www.connell-consulting.com/deals/"
                },
                {
                  "name": "Sec-Fetch-Dest",
                  "value": "image"
                },
                {
                  "name": "Sec-Fetch-Mode",
                  "value": "no-cors"
                },
                {
                  "name": "Sec-Fetch-Site",
                  "value": "same-origin"
                },
                {
                  "name": "User-Agent",
                  "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
                },
                {
                  "name": "sec-ch-ua",
                  "value": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\""
                },
                {
                  "name": "sec-ch-ua-mobile",
                  "value": "?0"
                },
                {
                  "name": "sec-ch-ua-platform",
                  "value": "\"Windows\""
                }
              ],
              "queryString": [],
              "cookies": [],
              "headersSize": 713,
              "bodySize": 0
            },
            "response": {
              "status": 200,
              "statusText": "OK",
              "httpVersion": "HTTP/1.1",
              "headers": [
                {
                  "name": "Accept-Ranges",
                  "value": "bytes"
                },
                {
                  "name": "Age",
                  "value": "189"
                },
                {
                  "name": "Cache-Control",
                  "value": "max-age=1800"
                },
                {
                  "name": "Content-Length",
                  "value": "148932"
                },
                {
                  "name": "Content-Type",
                  "value": "image/png"
                },
                {
                  "name": "Date",
                  "value": "Tue, 25 Oct 2022 08:17:45 GMT"
                },
                {
                  "name": "ETag",
                  "value": "\"245c4-5ac9a415cceb2\""
                },
                {
                  "name": "Last-Modified",
                  "value": "Tue, 11 Aug 2020 13:43:25 GMT"
                },
                {
                  "name": "Server",
                  "value": "w3pcloud"
                },
                {
                  "name": "Vary",
                  "value": "User-Agent"
                },
                {
                  "name": "X-Forwarded-For",
                  "value": "62.212.46.45"
                },
                {
                  "name": "X-Varnish-Hits",
                  "value": "Hit - 1"
                }
              ],
              "cookies": [],
              "content": {
                "size": 148932,
                "mimeType": "image/png",
                "compression": 0
              },
              "redirectURL": "",
              "headersSize": 333,
              "bodySize": 148932,
              "_transferSize": 149265,
              "_error": null
            },
            "serverIPAddress": "54.76.40.173",
            "startedDateTime": "2022-10-25T08:17:27.893Z",
            "time": 528.8230000296608,
            "timings": {
              "blocked": 424.8580000014491,
              "dns": -1,
              "ssl": -1,
              "connect": -1,
              "send": 0.125,
              "wait": 94.33099997411668,
              "receive": 9.50900005409494,
              "_blocked_queueing": 421.25600000144914,
              "_blocked_proxy": 0.31400000000000006
            }
          }
        ]
      }
    }]   
    // var imageUrls = [];
    // har[0].log.entries.forEach(function (entry) {
    //   // This step will filter out all URLs except images. If you just want e.g. just jpg's then check mimeType against "image/jpeg", etc.
    //   if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
    //   imageUrls.push(entry.request.url);
    // });
    //  console.log(imageUrls.join('\n'));
 
   //localStorage.getItem("userStatus") !== null && setUserStatus(true)
  }, [])

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      if(!location.pathname.includes("news") 
          || !location.pathname.includes("transactions") 
          || !location.pathname.includes("news") 
          || !location.pathname.includes("careers")
          || !location.pathname.includes("policy")
          || !location.pathname.includes("cookies")
          || !location.pathname.includes("terms_and_conditions"))
      {
        document.documentElement.scrollTo(0, 0);
      }
        
    }, [location.pathname]);
    
    return children
  } 




  


  

  const RequiresAuth = ({children}) => {
   let user_status_temp = localStorage.getItem("userStatus") == "true"
   return user_status_temp ? (children) : <Navigate to="/clare/login" />
  }
   
 
 

  
  return (
    <>
      <Authcontext.Provider value={{userStatus, setUserStatus}}>
        <div className="App">
          <Wrapper>
            <Navigation />
            <Routes>
              <Route path="/clare/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/clare/login" element={<Login />} />
              <Route path="/clare/dashboard" element={
                <RequiresAuth>
                  <Dashboard />
                </RequiresAuth>
              } />
              <Route path="/clare/services" element={<Services />} />
              <Route path="/clare/sectors" element={<Sectors />} />
              <Route path="/clare/sectors/*" element={<SectorsInside />} />
              <Route path="/clare/clients" element={<Clients />} />
              <Route path="/clare/news/*" element={<News />} />
              <Route path="/clare/news/blogs/*" element={<NewsInside />} />
              <Route path="/clare/contact" element={<Contact />} />
              <Route path="/clare/transactions/*" element={<Transactions />} />
              <Route path="/clare/careers" element={<Careers />} />
              <Route path="/clare/careers/*" element={<Candidates />} />
              <Route path="/clare/team" element={<Team />} />

              <Route path="/clare/policy" element={<MetaInfo 
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
              <Route path="/clare/cookies" element={<MetaInfo title={"Cookie Policy"} paragraphs1={[
                "Cookies are small text files that are placed on your computer by websites that you visit. They are often used to help make websites work, or work more efficiently, as well as to provide information to the owners of the site. We do not use cookies to identify you.",

                "You may delete and block all cookies from this site, but parts of the site may not work as a result. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org. To opt out of being tracked by Google Analytics across all websites visit http://tools.google.com/dlpage/gaoptout."
              ]}/>} />
              <Route path="/clare/terms_and_conditions" element={<MetaInfo title={"Terms & conditions"} 
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
