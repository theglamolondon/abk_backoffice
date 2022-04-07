import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import DateFormat from '../../component/dateFormat';
import RapportRx from "../../reducer/rapport";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DateObject from 'react-date-object';


const RapportPage = ({title, getRapport, report}) => {
  let today = new DateObject();
  let first = new DateObject();
  first.day = 1;

  const [dateRange, setDateRange] = useState([first.toDate(), today.toDate()]);
  const [startDate, endDate] = dateRange;

  useEffect(()=>{

    getRapport({
      dateDebut: `${today.format("YYYY-MM-DD")} 00:00:00`,
      dateFin: `${first.format("YYYY-MM-DD")} 23:59:59`,
      page: 0
    })
  }, [])

  const searchData = () => {
    let data = {
      dateDebut : `${startDate.toISOString().split('T')[0]} 00:00:00`, 
      dateFin   : `${endDate.toISOString().split('T')[0]} 23:59:59`, 
      page: 0
    }
    getRapport(data)
  }

  return (
  <React.Fragment>      
    <div className="col-xl-12 col-lg-12">
      <div className="card active-users" style={{minHeight: "400px"}}>
        <div className="card-header border-0">
          <h4 className="card-title">{title}</h4>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li className="abk-pointer">
                <span data-action="reload" onClick={getRapport}>
                  <i className="feather icon-rotate-cw" />
                </span>
              </li>
            </ul>
          </div>
          <div className='row'>
            <div className="col-md-6">            
              <label>Période</label>
              <ReactDatePicker
                selectsRange={true}
                dateFormat="dd/MM/yyyy"                                                                                 
                startDate={startDate}
                endDate={endDate}
                className="form-control"
                monthsShown={2}
                onChange={(update) => { setDateRange(update); }}
                isClearable={true}
              />
            </div>
            <div className='col-md-2'>
              <br/>
              <button className='btn btn-primary' onClick={() => {searchData()}}>Rechercher</button>  
            </div>    
          </div> 
        </div>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Date début</th>
                <th>Date fin</th>
                <th>Montant</th>
                <th width="50">Actions</th>
              </tr>
            </thead>
            <tbody>
              {report.data.map( (item, key) => <LigneRapport start={startDate} end={endDate} data={item} key={key} />)}   
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </React.Fragment>)
}

const LigneRapport = ({data, start, end}) => {
  return <React.Fragment>
    <tr>
      <td>{data.resto}</td>
      <td>{new DateObject(start).format('DD/MM/YYYY')}</td>
      <td>{new DateObject(end).format('DD/MM/YYYY')}</td>
      <td>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(data.montant)}</td>
      <td><a href='https://google.com' target='_blank'><i className='fa fa-print'> </i></a></td>
    </tr>
  </React.Fragment>
}

const getRapport = RapportRx.getReport
const mapDispatchToProps = { getRapport }

const mapStateToProps = store => {
  return {
    report: store.context.rapport,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RapportPage)