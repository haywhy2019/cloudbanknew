import React from 'react'
import Icon from "../../assets/icons/sprite.svg"
import styles from "./notificationbar.module.scss"
import avatar from "../../assets/images/user.png"

function NotificationBar() {
    return (
        <div className={`container ${styles.searchBar}`}>
        <div className="d-flex justify-content-center align-items-center pt-3">
        <svg className={`me-4 ${styles.icon}`}>
          <use href={Icon + "#bell"} />
        </svg>
        <p className="ms-2 fw-light">John Camp</p>
        <img className={`ms-3 me-3 ${styles.avatar}`} src={avatar} alt="" height="35"></img>
        <svg className={`${styles.icon}`}>
          <use href={Icon + "#dot"} />
        </svg>
        </div> 
        </div>
    )
}

export default NotificationBar