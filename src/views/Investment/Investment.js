import React from 'react'
import Layout from "../../components/Layout/Layout"
import Button from "../../components/Button/Button"
import styles from "./investment.module.scss"

function Investment() {
    return (
        <div>
           <Layout main={<Aside/>}/>
        </div>
    )
}

export default Investment

const data = [
    {total: "TOTAL", bal: "SAVINGS BALANCE N", amt: 0},
    {total: "TOTAL", bal: "SAVINGS ACCOUNT N", amt: 0},
    {total: "NUM OF CLIENTS WITH", bal: "SAVINGS ACCOUNT", amt: 0},
    {total: "TOTAL", bal: "DEPOSITS N", amt: 0},
    {total: "TOTAL", bal: "TRANSFER IN N", amt: 0},
    {total: "TOTAL", bal: "DIVIDENDS N", amt: 0},
    {total: "TOTAL", bal: "INTEREST N", amt: 0},
    {total: "TOTAL", bal: "WITHDRAWALS N", amt: 0},
    {total: "TOTAL", bal: "TRANSFER OUT N", amt: 0},
    {total: "TOTAL", bal: "FEES N", amt: 0},
    {total: "TOTAL", bal: "COMMISSIONS", amt: 0},
]


function Aside() {
    return (
        <div className="container-fluid">
           <h4 className="mt-4">Investment Chart</h4>
           <p className="mt-4 text-center">This page was <span className={`${styles.textBold}`}>last updated on 29th Sep at 7:20:29AM.</span></p>
          <div className="text-center mt-2">
           <Button className={`btn btn btn-primary ${styles.button}`}>Click here to Update</Button>
          </div>

        
         <section className={`d-flex flex-wrap`}>
          {data.map(data => 
              <div className={styles.component}> 
                <div className={`d-flex align-items-center ${styles.contain}`}>
                <div className={`${styles.avatar}`}></div>
                <div>
                <p className="ms-2 mb-2">{data.total}</p>
                 <p className="ms-2 mb-2">{data.bal}</p> 
                 <p className="ms-2 fw-bold">{data.amt}</p> </div>
                
                </div>
                  
                  </div>
          )}
          </section>

          <div className="container-fluid">
<div className="d-flex justify-content-center align-items-center">
    <p className="me-2">Generate Below Charts</p>
   <div className={`${styles.select}`}>
   <select name="monthly" id="monthly">
  <option value="monthly">Monthly</option>
  <option value="weekly">Weekly</option>
  <option value="daily">Daily</option>

</select>
   </div>
    <Button  className={`ms-2 btn btn btn-primary ${styles.button}`}>Submit</Button>
</div>

          </div>

         </div>
        
        
          
       
    )
}


