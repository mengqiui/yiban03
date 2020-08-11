module.exports = {
  navbar: {
    navname: [{
      text: 'ABOUT US',
      path: '/about',
      maolink: [{
        text: 'Company Overview'
      }, {
        text: 'Vision & Mission'
      }, {
        text: 'Milestones'
      }, {
        text: 'Leadership'
      }, {
        text: 'Corporate Culture'
      }, {
        text: 'Contact Us'
      }]
    }, {
      text: 'BUSINESS',
      path: '/tech',
      maolink: [{
        text: 'Miner Business'
      }, {
        text: 'Miner Hosting Service'
      }, {
        text: 'Communication Business'
      }, {
        text: 'IC Design'
      }, {
        text: 'Mining Pool'
      }, {
        text: 'Digital financial trading platform'
      }, {
        text: 'Fintech'
      }]
    }, {
      text: 'JOIN US',
      path: '/talents',
      maolink: [{
        text: 'Talent Development'
      }, {
        text: 'Working Environment'
      }, {
        text: 'Employee Activity'
      }, {
        text: 'Join Us'
      }]
    }, {
      text: 'INVESTOR',
      path: 'https://ir.ebang.com.cn/'
    }, {
      text: 'NEWS',
      path: '/news',
      maolink: [{
        text: 'Corporate News'
      }, {
        text: 'Media Library'
      }]
    }]
  },
  leader: {
    about: [{
      text: 'Company Overview'
    }, {
      text: 'Vision & Mission'
    }, {
      text: 'Milestones'
    }, {
      text: 'Leadership'
    }, {
      text: 'Corporate Culture'
    }, {
      text: 'Contact Us'
    }],
    tech: [{
      text: 'Miner Business'
    }, {
      text: 'Miner Hosting Service'
    }, {
      text: 'Communication Business'
    }, {
      text: 'IC Design'
    }, {
      text: 'Mining Pool'
    }, {
      text: 'Digital Financial Trading Platform'
    }, {
      text: 'Fintech'
    }],
    talents: [{
      text: 'Talent Development'
    }, {
      text: 'Working Environment'
    }, {
      text: 'Employee Activity'
    }, {
      text: 'Join Us'
    }],
    news: [{
      text: 'Corporate News'
    }, {
      text: 'Media Library'
    }]
  },
  content: {
    about: {
      companyIntro: {
        titleLeft: 'Company',
        titleRight: 'Overview',
        infotext: 'We are a pioneer in the development of <i class="text-blue">ASIC</i> chip technology for blockchain applications in China.<br />We are also one of the earliest bitcoin miner contract manufacturers in China, with proprietary<i class="text-blue">ASIC</i> chips developed by ourselves.'
      },
      mission: {
        titleLeft: 'Vision &',
        titleRight: 'Mission',
        infotext: 'Become a world-renowned blockchain company through technological innovation.'
      },
      timeline: {
        timelist: [{
          time: require('../img/2010.png'),
          info: '<span>Mr. Hu Dong</span> founded Ebang for development & sales of communications network access devices'
        }, {
          time: require('../img/2014.png'),
          info: 'Conducted <span>R&D</span> into blockchain computing equipment'
        }, {
          time: require('../img/2015.png'),
          info: 'Listed on National Equities Exchange and Quotations <span>(NEEQ)</span>'
        }, {
          time: require('../img/2016.png'),
          info: 'Released <span>BPU product E9</span> series'
        }, {
          time: require('../img/2017.png'),
          info: 'Released <span>Ebit E10</span>, the first commercially available mining machine to use <span>10nm ASIC</span> chips <br>Began to provide mining machine hosting services '
        }, {
          time: require('../img/2018.png'),
          info: 'Delisted from <span>NEEQ</span><br>Release <span>Ebit 9.2</span> and <span>Ebit 9.3</span>'
        }, {
          time: require('../img/2019.png'),
          info: 'Released <span>Ebit E12</span> <br>Completed the design of <span>8nm</span> and <span>7nm</span> ASIC chips '
        }, {
          time: require('../img/2020.png'),
          info: 'Listed on <span>Nasdaq Global Market</span> on 26 June 2020 <br><span>（Nasdaq：EBON）</span>'
        }]
      },
      team: {
        titleLeft: 'Leader',
        titleRight: 'ship',
        teamlist: [{
            name: "Mr. Hu Dong",
            pic: require("../../assets/img/people1.jpg"),
            post: "Chairman of the Board and Chief Executive Officer",
            info: "Mr. Hu is our founder and has served as chairman of the board of directors and our chief executive officer since May 2018. He has also served as chairman of the board of directors and chief executive officer of Zhejiang Ebang since January 2010. Mr. Hu has over 20 years of experience in the network communication and computing industry. Between August 1998 and August 2009, he was a teacher of the College of Information Engineering at Zhejiang University of Technology. From August 2009, he worked as a teacher of the College of Computer Science and Technology at the same university until October 2017. He is also an executive director of each of Ebang IT, Hangzhou Dewang, Ebang Hongfa, Ebang Jusheng and Ebang Hongling, and a director of HK Bite, HK Ebang Technology and HK Ebang Information. Mr. Hu is primarily responsible for overseeing the sales and marketing, research and development, business strategy and overall management of our Company. Mr. Hu graduated from Zhejiang University of Technology with an undergraduate degree in industrial automation in July 1998. In September 2008, Mr. Hu obtained a master of business administration (MBA) degree from Zhejiang University.",
            intro: "<p>Mr. Hu is our founder and has served as chairman of the board of directors and our chief executive officer since May 2018. He has also served...</p>",
            exp: [{
              expli: "Chair of the Compensation Committee."
            }],
            un: require("../../assets/img/un1.png")
          },
          {
            name: "Ms. Peng Chunjuan",
            pic: require("../../assets/img/people7.jpg"),
            post: "Director and Deputy General Manager",
            info: "Ms. Peng is our deputy general manager and has served as a director since May 2018. She has also served as a deputy general manager and as a director of Zhejiang Ebang since January 2010. Ms. Peng has over 15 years of experience in the areas of business operation and production and supply chain management. From September 2003 to January 2010, Ms. Peng was a deputy general manager at Hangzhou Ebang Communication Technology Co., Ltd., where she was responsible for assisting in managing the daily operation of the company. Ms. Peng is mainly responsible for our production and supply chain management, which includes overseeing the procurement of raw materials and production and quality control. Ms. Peng graduated from Jiangxi Normal University with a self-taught associate degree in tourism management in June 1997.",
            intro: "<p>1.Ms. Peng is our deputy general manager and has served as a director since May 2018.</p><p>2.She has also served as a deputy general manager...</p>",
            exp: [{
              expli: "Chair of the Nominating and Corporate Governance Committee."
            }]
          },
          {
            name: "Ms. Wang Sufeng",
            pic: require("../../assets/img/people4.jpg"),
            post: "Director and Deputy General Manager",
            info: "Ms. Wang is our deputy general manager and has served as a director since May 2018. She has also served as deputy general manager and as a director of Zhejiang Ebang since July 2013. Ms. Wang has over 19 years of management-related experience and has ample knowledge of corporate governance. Between October 2001 and April 2003, Ms. Wang was an assistant to the general manager at Shenzhen East Sunshine Chemical Foil Co., Ltd. From May 2003 to December 2011, she was the secretary to the board of directors of Zhejiang Tianyuan Bio-pharmaceutical Co., Ltd. From December 2011 to March 2013, Ms. Wang was an assistant to the general manager at Hangzhou Hexing Electrical Co., Ltd. Ms. Wang is mainly responsible for providing advice on our corporate governance, connected transactions, compliance and risk management matters. Ms. Wang obtained a self-taught undergraduate degree in management and engineering from the School of Economics of People’s Liberation Army in June 2008. Ms. Wang was granted the qualification for secretary of board of directors issued by the Shenzhen Stock Exchange and the National Equities Exchange and Quotations on June 18, 2016 and April 21, 2017 respectively. Ms. Wang completed a Growth Industry Leading Enterprise Executive Training course conducted by Tsinghua University School of Continuing Education in May 2018.",
            intro: "<p>Ms. Wang is our deputy general manager and has served as a director since May 2018.She has also served as deputy general manager...</p>",
            exp: [{
              expli: "Member of the Audit Committee."
            }]
          },
          {
            name: "Mr. Chen Lei",
            pic: require("../../assets/img/people2.jpg"),
            post: "CFO",
            info: "● Around 17 years of experience in the financial and accounting field.<br>● A Chinese CPA designation holder.<br>● Former CFO of Hailiang Education Group (NASDAQ: HLG).<br>● Former Auditing Manager at KPMG and Senior Auditor at PwC.<br>● Obtained a bachelor’s degree in International Business and Accounting from Guangdong University of Foreign Studies.",
            intro: "<p>1.Around 17 years of experience in the financial and accounting field.</p><p>2. A Chinese CPA designation holder.</p>",
            un: require("../../assets/img/un2.png")
          },
          {
            name: "Mr. Lyu Tingjie",
            pic: require("../../assets/img/people5.jpg"),
            post: "Independent Director Appointee",
            info: "Mr. Lyu will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of which this prospectus is a part. He has served as an independent director of China United Telecommunications Co. Ltd., Shenzhen Aisidi Co., Ltd., China Communications Services Corporation Limited and Beijing Digital Telecom Co., Ltd. since May 2016, June 2014, June 2015 and May 2013, respectively. Mr. Lyu has over 35 years of experience in the telecommunications industry. Since June 1985, Mr. Lyu successively served as a teacher, an associate professor and a professor at Beijing University of Posts and Telecommunications, College of Economic Management. Mr. Lyu is also an executive director and an executive vice president of International Telecommunication Association and China Information Economy Society, respectively. Mr. Lyu is the director of each Modern Management Committee of China Communications Society and Communication Technology and Economics Committee of China Association of Technology and Economics and the deputy director of E-commerce Teaching Steering Committee of the Ministry of Education. Mr. Lyu holds a bachelor’s degree in radio engineering and a master’s degree in management engineering from Beijing University of Posts and Telecommunications and a doctor’s degree in engineering from Kyoto University.",
            intro: "<p>Mr. Lyu will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of...</p>",
            exp: [{
                expli: "Member of the Audit Committee."
              },
              {
                expli: "Member of the Compensation Committee."
              },
              {
                expli: "Member of the Nominating and Corporate Governance Committee."
              }
            ],
            un: require("../../assets/img/un3.png")
          },
          {
            name: "Mr. Ken He",
            pic: require("../../assets/img/people6.jpg"),
            post: "Independent Director Appointee",
            info: "Mr. He will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of which this prospectus is a part. He has served as an independent director of Hailiang Education Group Inc. since 2015. Mr. He has over 15 years of experience in accounting and finance. Between 2003 and 2009, Mr. He successively served in the audit and assurance department at PricewaterhouseCoopers China and Australia. From 2009 and 2011, he was the investment director of Wealthcharm Investments Limited. From 2011 and 2015, Mr. He was the chief financial officer of China Shengda Packaging Group Inc. Since 2015, Mr. He served as a director, the vice president and the responsible officer of Racing Capital Management (HK) Limited. Mr. He holds a bachelor’s degree in accounting from Sun Yat-sen University and a master’s degree in applied finance from Macquarie University. Mr. He is a U.S. Certified Public Accountant, and he also holds a Certified Public Accountant designation from the Chinese Institute of CPA, a Certified Public Accountant designation from the Hong Kong Institute of CPA, a Certified Practicing Accountant designation from the CPA Australia and a Chartered Financial Analyst designation from the CFA Institute.",
            intro: "<p>Mr. He will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of which...</p>",
            exp: [{
                expli: "Chair of the Audit Committee."
              },
              {
                expli: "Member of the Compensation Committee."
              },
              {
                expli: "Member of the Nominating and Corporate Governance Committee."
              }
            ],
            un: require("../../assets/img/un4.png")
          }
        ]
      },
      culture: {
        titleLeft: 'CORPORATE',
        titleRight: 'CULTURE',
        culturelist: [{
          background: require("../../assets/img/1.jpg"),
          img: require("../../assets/img/logo1.png"),
          text: 'INNOVATION'
        }, {
          background: require("../../assets/img/2.jpg"),
          img: require("../../assets/img/logo2.png"),
          text: 'MARKET'
        }, {
          background: require("../../assets/img/3.jpg"),
          img: require("../../assets/img/logo3.png"),
          text: 'QUALITY'
        }, {
          background: require("../../assets/img/4.jpg"),
          img: require("../../assets/img/logo4.png"),
          text: 'UNITY'
        }]
      },
      contact: {
        text: 'Sales：+86-0571-88179077',
        title: 'CONTACT US'
      }
    },
    tech:{
      minerBus:{
        title: 'MINER BUSINESS',
        content01:{first:'In',text:'terms of hashrate sales in 2019, we were the leading Bitcoin miner manufacturer in the global market. We are a pioneer in researching and developing ASIC chip technology used for blockchain applications in China. We are also one of the earliest bitcoin miner foundries in China with proprietary ASIC chips developed independently.'},
        content02:{first:'Our',text:'Ebit E10 model launched in December 2017, was the first commercially bitcoin miner to use 10 nm ASIC chips among major miner producers. Our latest commercial EbitE12+ series miner, which contains the latest iteration of our proprietary 10nm ASIC chip,can achieve a hash rate of 50TH/s and a hashrate efficiency of 50W/TH.'},
        content03:{first:'We',text:'have completed the design of our 8 nm ASIC chip and 7 nm ASIC chip, and are ready to mass-produce our proprietary 8 nm ASIC chip and new high performance miners under the appropriate market conditions. We also focus on miners for non-Bitcoin cryptocurrencies such as Litecoin and Monero. We will continue to invest a lot of resources in applying new innovations in blockchain technology.'},
        url:'http://miner.ebang.com.cn/',
        more:'SEE MORE'
      },
      minerHost:{
        title: ['MINER HOSTING','SERVICE'],
        content01:{first:'We',text:'began our mining machine hosting services in 2017 to diversify our offerings. Our mining machine hosting services enable customers to operate their mining machines remotely in a cost-effective manner. We help customers set up and configurate their mining machines and monitor the daily operation of these mining machines on our hosting site where the utility cost is relatively low. We also provide routine maintenance services to our customers. We currently provide our mining machine hosting services only to those who have purchased mining machines from us.'},
        content02:{first:'We',text:'typically enter into separate service agreements with buyers of our mining machines for the hosting services. We charge customers a hosting services fee, which is negotiated case by case and usually in proportion to the utility consumption of each customer’s mining machines we host.'},
        advantage:{
          title:'Our advantage',
          item:[
            {title:'Low cost',info:'low electricity cost, lower electricity cost'},
            {title:'Cost transparency',info:'visualization of asset trajectories'},
            {title:'One-stop service',info:'independent mine, one-stop trusteeship, 24 hours online service of IDC-level professional maintenance team'},
            {title:'Visualization service',info:'7*24 online display, daily report is clear'},
            {title:'One-to-one service',info:'VIP exclusive one-to-one service'},
          ]
        }
      },
      comBus:{
        title:['COMMUNICATION','BUSINESS'],
        content01:{first:'Ebang',text:'has been devoted to the research of the operator\'s optical broadband access network for a long time. In the era of 4G communications, Ebang has laid three R&D frameworks based on optical transmission communication, data fusion communication, and industrial information IoT.'},
        content02:{first:'In',text:'the 5G era, Ebang relied on the foundation of 4G communications and adjusted its product line to the structure of 5G basic business services. Ebang is a high-tech comprehensive enterprise integrating R&D, production, sales and service.'},
        content03:{first:'Ebang',text:'is committed to the development of independent and innovative company brand image, adhering to the "customer-centric" market development concept, providing customers with a full range of services from three directions: product, technology and sales.'},
        productName:['Transmission network products','Converged communication products','Industrial Information IoT products'],
        product: [
          {
            classify: "Transmission network products",
            intro:
              "It adopts mainstream communication technologies of telecommunication operators such as SDH/MPLS/OTN/PON to provide integrated access solutions for enterprise customers and home broadband customers. The functions of the transmission network equipment mainly reflect the support of using standard Ethernet, SDH, OTN, IP/MPLS and other optical link protocols to connect multiple broadband data of enterprises and households to the operator's computer room, and can be adopted according to the SLA service level of enterprise customers. The differentiated access solution meets the demand for dedicated line network access.",
            prod: [
              {
                subClass: "IPRAN packet transmission network",
                name: "ETN5000",
                img: require("../../assets/img/pro1-1.png")
              },
              {
                subClass: "Intelligent Terminal",
                name: "ETN200",
                img: require("../../assets/img/pro1-2.png")
              },
              {
                subClass: "Intelligent Terminal",
                name: "ETN200-E",
                img: require("../../assets/img/pro1-3.png")
              },
              {
                subClass: "Intelligent Terminal",
                name: "ETN204G",
                img: require("../../assets/img/pro1-4.png")
              },
              {
                subClass: "Multi-service access platform",
                name: "EB-MSAP",
                img: require("../../assets/img/pro1-5.png")
              }
            ]
          },
          {
            classify: "Converged communication products",
            intro:
              "In the era of network convergence, the demand for SMEs' integrated communications is growing rapidly, including broadband, voice, VPN, WIFI, security, cloud office, etc. For this, Yibang is tailored for operators' SME customers from two perspectives of network integration and service integration Build a variety of multi-service integrated enterprise intelligent terminal products. The network side interface of this product supports general GPON, 10G PON ports, LAN and 4G wireless ports. The LAN side interface supports 4-32 routing voice and 4-8 Gigabit Ethernet. , At the same time provide 2.4G/5.8G single and dual frequency WiFi access capabilities, fully meet the needs of SMEs for integrated communications.",
            prod: [
              {
                subClass: "Gigabit Convergence Gateway",
                name: "EB-MIG",
                img: require("../../assets/img/pro2-1.png")
              },
              {
                subClass: "10G PON Convergence Gateway",
                name: "EB-MIG-XG",
                img: require("../../assets/img/pro2-2.png")
              },
              {
                subClass: "IPPBX/UCS",
                name: "EB-MIG-UCS",
                img: require("../../assets/img/pro3-3.png")
              }
            ]
          },
          {
            classify: "Industrial Information IoT Products",
            intro:
              "In the era of rapid development of the Industrial Internet of Things, the demand for information access to the Internet of Things in the industrial scene is growing rapidly. The company combined with the years of accumulated experience in the field of 4G/5G cellular technology, has created a 4G/5G Internet of Things information connection for the industrial scene. Into the product line. This type of equipment is mainly used for the information edge access side of the Internet of Things. The network side uses the mainstream 4G/5G wireless network as the main access method. It has RJ45/RS232/RS485/CAN/IO/USB/WIFI and other interfaces on the Internet of Things side. , At the same time, it is compatible with various industrial protocols such as Modbus, Profinet, CAN, TCP/IP, and the edge computing and analysis capabilities are introduced to achieve efficient access to the information information of the Internet of Things. Using industrial-grade circuit board design, built-in lightning protection, anti-static design, etc., has good shock resistance, can be used in harsh industrial environments.",
            prod: [
              {
                subClass: "Industrial 4G router",
                name: "EB-MIG-LTE",
                img: require("../../assets/img/pro1-1.png")
              },
              {
                subClass: "Industrial version 5G gateway",
                name: "EB-MIG-5GNR",
                img: require("../../assets/img/pro1-2.png")
              },
              {
                subClass: "Industrial version IoT gateway",
                name: "EB-MIG-FSU",
                img: require("../../assets/img/pro1-3.png")
              }
            ]
          }
        ],
        url:'http://www.ebang.cn/',
        more:'SEE MORE'
      },
      icDesign:{
        title:['INTEGRATED CIRCUIT','DESIGN'],
        content01:{first:'We',text:'are a leading application specific integrated circuit, ASIC, chip design company and a leading manufacturer of high performance bitcoin miner.'},
        content02:{text:'We have strong ASIC chip design capabilities and support nearly ten years of industry experience and expertise in the telecommunications business.'},
        content03:{first:'We',text:'are one of the few design companies for non-functional integrated circuits and IC. We have advanced technology for independently designing ASIC chips, established channels for obtaining third-party wafer casting capabilities, and demonstrated our internal capabilities for producing blockchain products.'},
        content04:{first:'We',text:'have completed the design of our 8 nm ASIC chip and 7 nm ASIC chip, and are ready to mass-produce our proprietary 8 nm ASIC chip and new high performance miners under the appropriate market conditions.'},
        content05:{text:'We currently focus on developing our proprietary 5 nm ASIC chips. We are currently focusing on developing our proprietary 5nm ASIC chip.'},
      }
    },
    talents:{
      text:'Not only the qualifications<br />but the ability<br />The qualifications<br />and performance',
      title:'WORKING <span>ENVIROMENT</span>',
      title1:'EMPLOYEE <span>ACTIVITY</span>',
      title2:'RECRU <span>ITMENT</span>',
      text1:'Achieve the pinnacle<br />of your career'
    },
    news:{
      more:'see more',
      titleLeft: 'Media',
      titleRight: 'Library'
    }
  },
  footbar: {
    wen: 'Concern Wechat',
    company: 'Ebang International Holdings Inc.',
    address: 'Detailed address：26st Floor, 3rd Building, Longchuanwu Road, Yuhang Economic and Technological Development Zone, Hangzhou',
    copyright: '@Copyright reservations of all rights'
  },
  meta:{base:'EBON INTERNATIONAL',about:'ABOUT US',tech:'BUSINESS',tal:'JOIN US',news:'NEWS',allNews:'NEWSLIST',detail:'detail'
  },
  detail:{
    text:'EBang News'
  }
};

