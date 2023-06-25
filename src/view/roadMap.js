import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from 'react-i18next'
import Header from "../components/header";
import Footer from "../components/footer";
import onBuildingImg from "../imgs/fire_building.webp"

function Roadmap(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload()
    };

    const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "English");
    const [isShowChooseLang, setIsShowChooseLang] = useState(false);
    const Roadmap = styled.div`
      width: 100%;
      overflow: hidden;
      background: #000;
      color: #fff;

      .content {
        min-height: 60vh;
        text-align: center;

        background: #000;
        padding: 100px 10px;
        h1 {
          font-size: 40px;
          margin: 3em 0 2em;
          line-height: 50px;
          font-family: "Times New Roman";
        }

        img {
          width: 300px;
        }

        .title {
          padding-bottom: 100px;
        }
        .table-content{
          width: 100%;
          overflow: auto;
        }
        .table-box {
          width: 80vw;
          margin: 2em auto;
          min-width: 800px;
          background: #000;
          overflow: auto;
          .index-id {
            font-size: 22px;
            background: linear-gradient(270deg, #FFB301 0%, #d50224 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border: 1px solid #ffb301;
            padding: 4px 20px;
            border-radius: 20px;
            margin-bottom: 1em;
          }

          .col-box {
            background: none !important;
            border: none !important;

            .col-row {
              width: 100%;
              padding: 20px 0;
              margin-bottom: 6px;
              border: 1px solid #333;
              background: rgba(255, 255, 255, 0.1);
              height: 70px;

              &:last-child {
                margin-bottom: 0;
              }
            }

            .h-90 {
              height: 90px;
            }
          }

          .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #333;
            margin-right: 1%;
            line-height: 26px;

            &:nth-child(1) {
              width: 19%;
            }

            &:nth-child(2) {
              width: 40%;
            }

            &:nth-child(3) {
              width: 19%;
            }

            &:nth-child(4) {
              width: 19%;
              margin-right: 0%;
            }


            .c-p {
              color: #d07390;
            }

            .c-g {
              color: #79ca85;
            }

            .c-b {
              color: #84affb;
            }
          }

          .table-header {
            display: flex;
            padding-bottom: 10px;

            .col {
              padding: 20px 0;
            }

            .col:nth-child(1) {
              border-radius: 20px 0 0 0;
            }

            .col:nth-child(4) {
              border-radius: 0 20px 0 0;
            }
          }

          .row {
          
            padding-bottom: 10px;
            display: flex;
            &:last-child{
              .col:nth-child(1) {
                border-radius:  0 0  0 20px;
              }
            }
          }
        }
      }

    `

    return (
        <Roadmap>
            <Header></Header>
            <div className="content">
                <h1>
                    The seven-step roadmap<br/>
                    ofFireDAO cold start introduction
                </h1>
                <div className="table-content">
                    <div className="table-box">
                        <div className="table-header">
                            <div className="col">
                                Stage
                            </div>
                            <div className="col">
                                Milestone
                            </div>
                            <div className="col">
                                Progress
                            </div>
                            <div className="col">
                                Date
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step One
                                    </div>
                                    FireDAO <br/>official launch
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.PID launches on Arbitrum mainnet
                                </div>
                                <div className="col-row">
                                    2.FireDAO Ecology Forum officially starts
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-p">
                                    Complete
                                </div>
                                <div className="col-row c-p">
                                    Complete
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    February 2023
                                </div>
                                <div className="col-row">
                                    February 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step Two
                                    </div>
                                    FireDAO<br/>
                                    community<br/>
                                    build-up<br/>
                                    launch
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.FireDAO starts to build a"Genesis Firearmy"
                                </div>
                                <div className="col-row">
                                    2.FireDAO white paper starts serialization
                                </div>
                                <div className="col-row">
                                    3.Start to promote in Bitcointalk forum
                                </div>
                                <div className="col-row">
                                    4.Global Twitter starts operations
                                </div>
                                <div className="col-row">
                                    5.Global multilingual communitystarts operations
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                                <div className="col-row c-p">
                                    Complete
                                </div>
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    March 2023
                                </div>
                                <div className="col-row">
                                    March 2023
                                </div>
                                <div className="col-row">
                                    March 2023
                                </div>
                                <div className="col-row">
                                    March 2023
                                </div>
                                <div className="col-row">
                                    March 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step Three
                                    </div>
                                    FireDAO OG<br/>
                                    rounds<br/>
                                    overall<br/>
                                    initiation
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.Internal OG round tests
                                </div>
                                <div className="col-row">
                                    2.Seed-group OG round tests
                                </div>
                                <div className="col-row">
                                    3.Chinese Twitter community
                                    OG round tests
                                </div>
                                <div className="col-row">
                                    4.Bitcointalk Forum OG round tests
                                </div>
                                <div className="col-row">
                                    5.Twitter OG round tests
                                </div>
                                <div className="col-row">
                                    6.Arbitrum Ecology 0G round fully starts
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                                <div className="col-row c-g">
                                    Ongoing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step Four
                                    </div>
                                    FireDAO core <br/>
                                    products'<br/>
                                    launch online
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.FireSeed launches on mainnet
                                </div>
                                <div className="col-row">
                                    2.FireSeed starts to pass globally
                                </div>
                                <div className="col-row">
                                    3.FireSoul launches on mainnet
                                </div>
                                <div className="col-row">
                                    4.FID launches on mainnet
                                </div>
                                <div className="col-row">
                                    5.SBTs launch on mainnet continuously
                                </div>
                                <div className="col-row">
                                    6.On-chain reputation starts operationson mainnet
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                                <div className="col-row">
                                    April 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step Five
                                    </div>
                                    FireDAO<br/>
                                    seed-round<br/>
                                    initiation
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.Seed round exchange contract starts
                                </div>
                                <div className="col-row h-90">
                                    2.The income distribution contract ofthe RainbowCity Ministry of Financelaunches
                                </div>
                                <div className="col-row">
                                    3.FDT initiates secondary market
                                    transactions
                                </div>
                                <div className="col-row">
                                    4.FLM initiates secondary markettransactions
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row  h-90 c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    May 2023
                                </div>
                                <div className="col-row  h-90">
                                    May 2023
                                </div>
                                <div className="col-row">
                                    May 2023
                                </div>
                                <div className="col-row">
                                    May 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id ">
                                        Step Six
                                    </div>
                                    FireDAO<br/>
                                    consensus<br/>
                                    mining<br/>
                                    initiation
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.FDT initiates 1000 rounds consensusmining.
                                </div>
                                <div className="col-row">
                                    2.FDT initiates local currency lock-upmining.
                                </div>
                                <div className="col-row">
                                    3.FDT initiates LP liquidity mining
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    June 2023
                                </div>
                                <div className="col-row">
                                    June 2023
                                </div>
                                <div className="col-row">
                                    June 2023
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="col-row">
                                    <div className="index-id">
                                        Step Seven
                                    </div>
                                    FireDAO<br/>
                                    comprehensive<br/>
                                    and specific<br/>
                                    opertions start
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    1.12 guilds start operations
                                </div>
                                <div className="col-row">
                                    2.Global city-nodes start operations
                                </div>
                                <div className="col-row">
                                    3.Global community managementsystem starts operations
                                </div>
                                <div className="col-row">
                                    4.Community governance DAO startspilot phase
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                                <div className="col-row c-b">
                                    Preparing
                                </div>
                            </div>
                            <div className="col-box col">
                                <div className="col-row">
                                    July 2023
                                </div>
                                <div className="col-row">
                                    July 2023
                                </div>
                                <div className="col-row">
                                    July 2023
                                </div>
                                <div className="col-row">
                                    July 2023
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Roadmap>
    )
}

export default Roadmap
