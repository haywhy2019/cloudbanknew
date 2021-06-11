import React from 'react'
import styles from "./layout.module.scss";
import SideBar from "../SideBar/Sidebar"
import SearchBar from "../SearchBar/SearchBar"
import NotificationBar from "../NotificationBar/NotificationBar"
import Main from "../../views/Dashboard/Dashboard"

function Layout({ main }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`col-sm-12 col-md-3 ${styles.sideContain}`}>
                    <SideBar />
                </div>
                <div className="col-sm-12 col-md-9">
                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-9 mt-2">
                                <SearchBar />
                            </div>
                            <div className="col-sm-12 col-md-3 mt-2">
                                <NotificationBar />
                            </div>
                        </div>
                    </div>
                   {main}
                </div>
            </div>
        </div>


    )
}

export default Layout;
