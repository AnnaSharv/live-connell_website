import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Row, Col} from 'antd'
import { transactionsAll } from "../data/tabsTransactions";

function TabsCustom() {
  const location = useLocation();
  const param = useParams();
  const [routeName, setRouteName] = useState("all");
  useEffect(() => {
    setRouteName(Object.values(param)[0]);
  }, [param]);

  return (
    <>
      <Navbar expand="lg" className="p-0 chosen-year-menu">
        <div className="chosen-year">{routeName}</div>
        <Navbar.Brand href="#home" id="consulting" className="m-0">
          <span className="d-none title-in-mobileview m-0">{routeName} x</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav nav-bottom">
          <Nav className="nav-left">
            {transactionsAll?.map((transaction, i) => {
              return (
                <Link to={transaction.header} key={i}>
                  <li className={transaction.header.includes(routeName) ? 'active-link' : null}> {transaction.header}  </li>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {transactionsAll?.map((tr) => {
        if (
          location.pathname.includes(tr.header) ||
          location.pathname === "/transactions/"
        ) {
          return (
            <div title={tr.header} key={tr.id}>
              <Row className="transactions-image-container" gutter={20}>
                {tr.images?.map((image, i) => {
                  return (
                    <Col sm={12} md={6} key={i}>
                      <img src={image} loading="lazy" width="100%"/>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        }
      })}
    </>
  );
}

export default TabsCustom;
