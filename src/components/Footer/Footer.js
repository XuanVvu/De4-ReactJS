import React, {useRef, useState} from 'react'
import Logo from "../../assets/img/header/Logo.png";
import{Link} from "react-router-dom"
import "../../scss/style.scss";

const MY_CONTACT = [
  {
    display : "200 Lincoln Ave, Salinas, CA 93901",
    url:"#",
    icon:"fa-solid fa-location-dot"
  },

  {
    display : "023 32423 223",
    url:"tel:+842332423223",
    icon:"fa-solid fa-phone-flip"
  },

  {

    display : "gymax@example.com",
    url:"mailto:gymax@example.com",
    icon:"fa-solid fa-envelope"
  },

  {

    display : "9:00 - 20:00 All day",
    url:"#",
    icon:"fa-solid fa-clock"
  },
]

const MY_ACCOUNT = [
  {
    display:"My account",
    url:"#"
  },
  {
    display:"check out",
    url:"#"
  },
  {
    display:"register",
    url:"#"
  },
  {
    display:"Login",
    url:"#"
  },
]

const INFORMATION = [
  {
    display:"About us",
    url:"#"
  },

  {
    display:"Contact us",
    url:"#"
  },

  {
    display:"Team of user",
    url:"#"
  },

  {
    display:"Privacy Policy",
    url:"#"
  },
]

const QUICKLINK = [
  {
    display:"New user",
    url:"#"
  },

  {
    display:"Help center",
    url:"#"
  },

  {
    display:"Report spam",
    url:"#"
  },

  {
    display:"FAQs",
    url:"#"
  },
]

const Footer = () => {
  
  const [checkContact, setCheckContact] = useState(false)
  const footerContactRef = useRef(null);
  const [checkAccount, setcheckAccount] = useState(false)
  const accountRef = useRef(null);
  const [checkInfor, setcheckInfor] = useState(false)
  const infoRef = useRef(null);
  const [checkQuickLink, setcheckQuickLink] = useState(false)
  const quickLinkRef = useRef(null)

  const handleClick = () => {
    setCheckContact(!checkContact)
    if (checkContact) {
      footerContactRef.current.classList.add('active')
    } else {
      footerContactRef.current.classList.remove('active')
    }
  }

  return (
    <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-inner">
              <div className="footer-logo">
                <Link to='/home'>
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="footer-summary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </div>

              <div className="footer-social-networking">
               <a href=""><i className="fa-brands fa-facebook-f"></i></a> 
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom row">
            <div className="footer-bottom-item">
              <div className="contact-title" onClick={handleClick}>Contact Us</div>
              <ul ref={footerContactRef}>
              {MY_CONTACT.map((item, index) =>(
                  <li key={index}>
                    <i className={item.icon}></i> <a href={item.url}>{item.display}</a> 
                  </li>


            ))}
              </ul>  
            </div>

            <div className="footer-bottom-item">
              <div className="contact-title">My account</div>

              <ul >
              {MY_ACCOUNT.map((item, index) =>(
                  <li key={index}><a href={item.url}>{item.display}</a> </li>
                  ))}
              </ul>
            </div>

            <div className="footer-bottom-item">
              <div className="contact-title">Information</div>

              <ul >
              {INFORMATION.map((item, index) =>(
                  <li key={index}><a href={item.url}>{item.display}</a> </li>
                  ))}
              </ul>
    
            </div>

            <div className="footer-bottom-item">
              <div className="contact-title">Quick link</div>

              <ul>
              {QUICKLINK.map((item, index) =>(
                  <li key={index}><a href={item.url}>{item.display}</a> </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="copy-right">
          <p>
            Copyright © 2019 Gymax - Design by ArrowHitech - All Rights Reserved
          </p>
        </div>
      </footer>
  )
}

export default Footer