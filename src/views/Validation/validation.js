import React from 'react'
import Layout from "../../components/Layout/Layout"
import Button from "../../components/Button/Button"
import styles from "./validation.module.scss"
import Icon from "../../assets/icons/sprite.svg"


function validation() {
    return (
        <div>
             <Layout main={<Aside/>}/> 
        </div>
    )
}

export default validation


const data = [
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Progress"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Progress"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Rejected"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Rejected"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Approved"},
  {user: "Ogunsola Segun",  act: "Personal KYC", submit: "29 Sep, 2020 07:20 AM", status: "Progress"},

]

function Aside() {
    return (
        <div className="container-fluid mt-3">
         <h4>KYC Application</h4>
         <Button className="btn btn-light mt-4">Export Data</Button>
         <div className={`${styles.bg}`}>
<div className="container-fluid">
<div>
<Button className="btn btn-light mx-3">Pending</Button>
<Button className="btn btn-light mx-3">Missing</Button>
<Button className="btn btn-light mx-3">Approved</Button>
<Button className="btn btn-light mx-3">All</Button>
</div>
<div className="container mt-4">
  <div className="row">
    <div className="col-sm-12 col-md-3">
    <div>
        <label>ADVANCED SEARCH</label>
        <input type="text" placeholder="Search by name/id" className={styles.input}/>
    </div>
    </div>
    <div className="col-sm-12 col-md-3">
    <div>
        <label>STATUS</label>
        <input type="text" placeholder="Any Status" className={styles.input}/>
    </div>
    </div>
    <div className="col-sm-12 col-md-3">
    <div>
        <label>DOC TYPE</label>
        <input type="text" placeholder="Any Type" className={styles.input}/>
    </div>
    </div>
    <div className="col-sm-12 col-md-3">
    <div> 
        
        <Button className={`d-flex align-items-center btn text-white btn-primary ${styles.btnCol}`}> 
        <svg className={`me-2 ${styles.icon}`}>
          <use href={Icon + "#search1"} />
        </svg>
          Search
            </Button>
    </div>
    </div>
  </div>
    
    
   
 
    <div>

    </div>
</div>
<div className="table-responsive mt-3">
<table class="table">
  <thead>
    <tr>
      <th scope="col">USER</th>
      <th scope="col">ACCOUNT TYPE</th>
      <th scope="col">DOCUMENTS</th>
      <th scope="col">SUBMITTED</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>

    {data.map((data, index= +1) => 
       <tbody key={index}>
       <tr>
       <td className={`py-4 text-muted`}>{data.user}</td>
         <td className={`py-4 text-muted`}>{data.act}</td>
         <td className={`py-4 text-muted`}><div className="d-flex">
           <p className="me-2 text-muted">Utility bill</p>
           <svg className={`${styles.download}`}>
          <use href={Icon + "#download"} />
        </svg>
           </div></td>
         <td className={`py-4 text-muted`}>{data.submit}</td>
         <td className={`pt-3`}>{data.status == "Approved" ? (<div className="btn btn-outline-success text-dark px-3"> Approved </div>) : data.status == "Rejected" ? (<div className="btn btn-outline-danger text-dark px-4">Rejected</div>): <div className="btn btn-outline-primary text-dark px-4">Progress</div>}</td>
       </tr> 
     </tbody>
     )}
   
</table>
</div>

</div>
         </div>
        </div>
    )
}

