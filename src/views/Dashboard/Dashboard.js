import React from 'react'
import Button from "../../components/Button/Button"
import buttonStyles from "../../components/Button/button.module.scss"
import styles from "./dashboard.module.scss"
import chart1 from "../../assets/images/chart1.png"
import chart2 from "../../assets/images/chart2.png"
import chart3 from "../../assets/images/chart3.png"
import Charts from 'react-apexcharts'
import Layout from "../../components/Layout/Layout"


function Dashboard() {
  return (
    <div>
      <Layout main={<Aside/>} />
    </div>
  )
}

export default Dashboard






function Aside() {
    return (
        <>
        <div className="container-fluid mt-4">
             <div className={`d-flex flex-row-reverse ${styles.padded}`}>
             <Button className={`btn btn-primary rounded-pill`}> Today </Button>
              <Button className={`btn btn-outline`}> Last 7 Days</Button>
              <Button className={`btn btn-outline`}>Last 30 Days</Button>
              <Button className={`btn btn-outline`}>All Time</Button>
              <Button className={`btn btn-outline`}>Custom </Button>
             </div>
            
{/*            
                </div>
            </div> */}
        </div>
        <div className="container-fluid mt-4">
            <div className="row">
             <div  className={`col-sm-12 col-md-4`}> 
             <div className={`d-flex justify-content-between p-4 ${styles.chart}`}>
                 <div>
                     <p >TOTAL REVENUE</p>
                     <p className="fw-bold pt-2">N0.00</p>
                 </div>
                 <img src={chart1} alt="" height="" className={`${styles.image}`}></img>
                 <div>

                 </div>
             </div>
           
                </div>
                <div  className={`col-sm-12 col-md-4`}> 
                <div className={`d-flex justify-content-between p-4 ${styles.chart}`}>
                 <div>
                     <p>TOTAL TRANSACTION</p>
                     <p className="fw-bold pt-2" >N0.00</p>
                 </div>
                 <img src={chart2} alt="" height="35"></img>
                 <div>

                 </div>
             </div>
           </div>
           <div  className={`col-sm-12 col-md-4`}> 
           <div className={`d-flex justify-content-between p-4 ${styles.chart}`}>
                 <div>
                     <p>PENDING SETTLEMENT</p>
                     <p className="fw-bold pt-2">N0.00</p>
                 </div>
                 <img src={chart3} alt="" height="35"></img>
                 <div>

                 </div>
             </div>
           </div>
            </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
            <div className="col-sm-12 col-md-8">
                <div className={`${styles.linechart}`}>

                <Charts
              options={{
                chart: {
                  id: "basic-line"
                },
                xaxis: {
                  categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
                }
              }}
              
              series={[
                {
                  name: "series-1",
                  data: [10,20,30, 40, 45, 50]
                }
              ]}
              type="line"
              width="400"
            />
                </div>

</div>
<div className="col-sm-12 col-md-3">
<div className={`${styles.profit}`}>
<p className="fw-bold p-4">profit</p>
</div>

</div>
                </div>

            </div>
            <div className={`container mt-5 ${styles.bg}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
<p className={`py-5 ${styles.pcolor}`}> Recent Transactions</p>
<div className="d-flex">
    <p class="px-2 text-muted">show</p>
    <form>
        <input type="text" className={`${styles.filter}`}/>
    </form>
    <p className="px-2 text-muted">entries</p>
</div>
<div className="table-responsive">
<table class="table mt-5 container-fluid">
  <thead>
    <tr>
      <th scope="col-sm-12" className={`py-3 ${styles.pcolor}`}>AMOUNT</th>
      <th scope="col-sm-12" className={`py-3 ${styles.pcolor}`}>TRANSACTION REFERENCE</th>
      <th scope="col-sm-12" className={`py-3 ${styles.pcolor}`}>PAYMENT METHOD</th>
      <th scope="col-sm-12" className={`py-3 ${styles.pcolor}`}>DATE/TIME</th>
      <th scope="col-sm-12" className={`py-3 ${styles.pcolor}`}>STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td className="py-3 text-muted">₦299,980.00</td>
      <td className="py-3 text-muted">MNFY|20200924165017|001810</td>
      <td className="py-3 text-muted">Account transfer</td>
      <td className="py-3 text-muted">September 23rd 2020,7:20:19 pm</td>
      <td className={`py-3`}><button className={`btn ${styles.button}`}>Paid</button></td>
    </tr>
    <tr>
     
      <td className="py-3 text-muted">₦299,980.00</td>
      <td className="py-3 text-muted">MNFY|20200924165017|001810</td>
      <td className="py-3 text-muted">Account transfer</td>
      <td className="py-3 text-muted">September 23rd 2020,7:20:19 pm</td>
      <td className={`py-3`}><button className={`btn ${styles.button}`}>Paid</button></td>
    </tr>
    <tr>
   
      <td className="py-3 text-muted">₦299,980.00</td>
      <td className="py-3 text-muted">MNFY|20200924165017|001810</td>
      <td className="py-3 text-muted">Account transfer</td>
      <td className="py-3 text-muted">September 23rd 2020,7:20:19 pm</td>
      <td className={`py-3 ${styles}`}><button className={`btn ${styles.button}`}>Paid</button></td>
    </tr>
  </tbody>
</table>
</div>


                    </div>
                </div>

            </div>
        </>
    )
}


