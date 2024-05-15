import { NavLink,Link } from "react-router-dom";
import './Header.css'

function Header(){
  window.addEventListener('scroll',function(){
    const menu=document.getElementById('menu')
    const navbar=document.getElementById('navbar')
    if(window.scrollY>100 ){
      menu.style.background="#512da8"
      navbar.style.display="none"
  }
  else{
    menu.style.background="#0092C8"
    if(this.outerWidth>=768){
      navbar.style.display="flex"
    }
    else{
      navbar.style.display="none"

    }
  }
   
  })
  function btnOpen(){
    const Aside=document.getElementById('aside')
    Aside.classList.add('show-aside')
  }

  function btnClose(){
    const Aside=document.getElementById('aside')
    Aside.classList.remove('show-aside')

  }

  function removeMenu(){
    const aside=document.getElementById('aside')
    aside.classList.remove('show-aside')

 }
    return(
        <>
          <div className="header">
            <div className="navbar" id="navbar">
               <span>ورود | عضویت</span>
            </div>
            <div className="menu" id="menu">
              <div className="logo">
                  <img src="./image/logo.png" width={'200rem'}></img>
              </div>
              <ul className="ul-menu">
                <li className="li-menu"><NavLink to='/'>صفحه اصلی</NavLink></li>
                <li className="li-menu"><NavLink to='/eropa'>تور اروپا</NavLink></li>
                <li className="li-menu"><NavLink to='/asia'>تور آسیا</NavLink></li>
                <li className="li-menu"><NavLink to='/iran'>تور داخلی</NavLink></li>
                <li className="li-menu"><a href="#">مقالات</a></li>
                <li className="li-menu"><a href="#">درباره ما</a></li>
              </ul>
              <div className="call">
                 <span>تماس با ما | 021-8493232</span>
              </div>
            </div>

            <div className="menu-mobile">
               <i onClick={btnOpen} id="btnOpen" className="bi bi-list"></i>

               <div className="logo2">
                  <img src="./image/logo3.png" width={'60rem'}></img>
               </div>

               <div className="call">
                 <span>ارتباط با ما</span>
              </div>
            </div>
          </div>

          <aside className="aside" id="aside">
            <div className="item">
              <img src="./image/logo.png" width={'200rem'}></img>
              <i onClick={btnClose} className="bi bi-x"></i>
            </div>
          <ul className="ul-aside">
                <li className="li-aside"><Link to='/' onClick={removeMenu}>صفحه اصلی</Link></li>
                <li className="li-aside"><Link to='/eropa' onClick={removeMenu}>تور اروپا</Link></li>
                <li className="li-aside"><Link to='/asia' onClick={removeMenu} >تور آسیا</Link></li>
                <li className="li-aside"><Link to='/iran' onClick={removeMenu}>تور داخلی</Link></li>
                <li className="li-aside"><a href="">مقالات</a></li>
                <li className="li-aside"><a href="">درباره ما</a></li>
                <li className="li-aside"><a href="">عضویت | ثبت نام</a></li>

              </ul>

               <span>تماس با ما | 021-8493232</span>
          </aside>

        
        </>
    )
}

export default Header;