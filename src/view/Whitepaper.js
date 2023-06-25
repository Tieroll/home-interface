import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import Header from "../components/header";
import Footer from "../components/footer";
import PDF from 'react-pdf';
function Whitepaper(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };

    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");

    const WhitepaperBox = styled.div`
      overflow: hidden;
      background: #000;
      color: #fff;

      .content {
        min-height: 60vh;
        padding-top: 100px;
        text-align: center;
        font-size: 30px;

        .nav-list {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          cursor: pointer;

          .nav-item {
            font-size: 20px;
            margin-left: 20px;
            color: #FFFFFF;
            line-height: 33px;

            &.active {
              font-size: 22px;
              background: linear-gradient(270deg, #FFB301 0%, #d50224 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              border-bottom: 1px solid #D50224;
            }
          }
        }
      }

      iframe {
        margin-top: 3em;
        width: 100%;
        height: 100vh;
      }
    `
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <WhitepaperBox>
            <Header/>
            <div className="content">
                <div className="nav-list">
                    <div
                         className={["nav-item",activeIndex==0?"active":"" ].join(' ')}
                         onClick={() => {
                             setActiveIndex(0)
                         }}
                    >

                        FireDAO White Paper
                    </div>
                    <div   className={["nav-item",activeIndex==1?"active":"" ].join(' ')}
                         onClick={() => {
                             setActiveIndex(1)
                         }}
                    >
                        FireDAO 白皮书
                    </div>
                </div>
                <div className="pdf-content">
                    {
                        activeIndex == 0 &&
                        <iframe    type="application/pdf"  src="https://firedao.co/FireDAO_White_Paper.pdf" frameBorder="0"></iframe>
                    }
                    {
                        activeIndex == 1 && <iframe
                            type="application/pdf"
                            src="https://firedao.co/FireDAO%E7%94%9F%E6%80%81%E4%B8%AD%E6%96%87%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf"
                            frameBorder="0"></iframe>
                    }

                </div>
            </div>
            <Footer/>
        </WhitepaperBox>
    )
}

export default Whitepaper
