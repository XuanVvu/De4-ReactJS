import React, { useEffect, useRef } from 'react' 
import "../../scss/style.scss";
import Logo from "../../assets/img/header/Logo.png";


const Header = () => {

  const headerRef = useRef(null)
  const navBar = useRef(null)

  const handleCLickMenu = () =>{
      navBar.current.classList.add('active');
  }

  const handleClickXBtn = () => {
    navBar.current.classList.remove('active');
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');

      } else {
        headerRef.current.classList.remove('header__shrink');
      }
      return ()=> {
        window.removeEventListener('scroll')
      }
    })
  }, [])

  return (
    <header ref={headerRef}>    
        <div className="container"> 
          <div className="logo">
            <img src={Logo}alt="" />
          </div>

          <nav>
            <ul className="nav-bar" ref={navBar}>
              <div className="nav-x" onClick={handleClickXBtn}><i className="fa-solid fa-xmark"></i></div>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>

          <div className="right-header">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-basket-shopping"></i>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="menu-mobile" onClick={handleCLickMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          
        </div>
      </header>
  )
}

export default Header