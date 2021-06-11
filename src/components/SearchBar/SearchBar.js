import React from 'react'
import Icon from "../../assets/icons/sprite.svg"
import styles from "./searchbar.module.scss"

function SearchBar() {
    return (
        <div className={`container ${styles.searchBar}`}>
        <div className="d-flex align-items-center pt-3">
        <svg className={`me-2 ${styles.icon}`}>
          <use href={Icon + "#search"} />
        </svg>
        <form>
        <input
        className={`${styles.input}`}
          type="text"
          placeholder="Search"
        />
      </form>
        </div> 
        </div>
    )
}

export default SearchBar
