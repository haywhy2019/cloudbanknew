import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Icon from "../../assets/icons/sprite.svg"
import styles from "./sidebar.module.scss"
import logo from "../../assets/images/logo.png"
function Sidebar() {

  const[show, setShow] = useState(styles.hide);
  const[show1, setShow1] = useState(styles.hide);

  const submenu = () => {
    if(show == styles.subnav){
      setShow(styles.hide)
    }else{
      setShow(styles.subnav)
    }
  }

  const submenu1 = () => {
    if(show == styles.subnav){
      setShow1(styles.hide)
    }else{
      setShow1(styles.subnav)
    }
  }



    return (
<nav className= {`navbar navbar-expand-lg navbar-dark bg-dark ${styles.sideContain}`}>
  <div className={`container-fluid ${styles.desktop}`}>
  <Link className={`navbar-brand ${styles.desktop}`}> 
        
        <img src={logo} alt="" height="35"></img>
       
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className={`navbar-nav d-block ${styles.nav}`}>
        <li className="nav-item ">
        <Link className="" to="/"> 
        <div className="d-flex">
        <svg className={`${styles.icon} ${styles.noStroke}`}>
          <use href={Icon + "#dashboard"} />
        </svg>
        <p className="ms-2">Dashboard</p>
        </div> 
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#borrowers"} />
        </svg>
        <p className="ms-2">Borrowers</p>
        </div> 
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#transaction"} />
        </svg>
        <p className="ms-2">Transaction</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#load"} />
        </svg>
        <p className="ms-2">Loans</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#repayment"} />
        </svg>
        <p className="ms-2">Repayment</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#collatera"} />
        </svg>
        <p className="ms-2">Collateral register</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#calendar"} />
        </svg>
        <p className="ms-2">Weekly / Monthly Calendars</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#collection"} />
        </svg>
        <p className="ms-2">Collection sheets</p>
        </div>
        </Link>
        </li>
        <li className="nav-item " onClick={()=> submenu()}>
        <Link className="nav-link " id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#repayment"} />
        </svg>
        <p className="ms-2 text-white">Savings</p>
        </div>
        </Link>
        <ul className={`${show}`}>

            <li><Link className="dropdown-item" >
             
              <div className="d-flex">
        <p className="ms-2 text-white"> View Savings Account</p>
        </div>
              </Link></li>
            <li><Link className="dropdown-item" >
             
              <div className="d-flex">
        <p className="ms-2 text-white">  Add Investment / <br/> Bulk Savingd transaction <br/>/ Account</p>
        </div>
              
              </Link></li>
            <li><Link className="dropdown-item" to="/invest" >
             
              <div className="d-flex">
        <p className="ms-2 text-white">  Investment Chart</p>
        </div>
              
              </Link></li>
            <li><Link className="dropdown-item" >
           
              <div className="d-flex">
        <p className="ms-2 text-white">    Investment Report</p>
        </div>
              
              </Link></li>
            <li><Link className="dropdown-item" >
              
              <div className="d-flex">
        <p className="ms-2 text-white"> Cash Safe</p>
        </div>
              </Link></li>
            <li><Link className="dropdown-item" >
             
              <div className="d-flex">
        <p className="ms-2 text-white">  Staff Transaction</p>
        </div>
              
              
              </Link></li>
            <li><Link className="dropdown-item" >
             
              <div className="d-flex">
        <p className="ms-2 text-white">  Approved report</p>
        </div>
              </Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#investor"} />
        </svg>
        <p className="ms-2">Investors</p>
        </div>
        </Link>
        </li>
        <li className="nav-item">
        <Link > 
        <div className="d-flex">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#account"} />
        </svg>
        <p className="ms-2">Account Managers</p>
        </div>
        </Link>
        </li>
        <li className="nav-item ">
        <Link onClick={()=> submenu1()} > 
        <div className="d-flex mb-2">
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#verification"} />
        </svg>
        <p className="ms-2 " >Verification Managers</p>
        </div>
        </Link>

 <ul className={`${show1}`}>

<li><Link className="dropdown-item" to="/validation">
 
<p className="ms-2 text-white">  Approved report</p>
  </Link></li>
</ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 
 
    )
}

export default Sidebar

