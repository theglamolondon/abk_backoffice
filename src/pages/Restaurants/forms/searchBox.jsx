import React, { useEffect, useState }  from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { SelectStatutCommande } from '../../Commandes/liste';

export default function SearchBox({range, setRange, handleClick}){

  const [startDate, endDate] = range;
  const [statut, setStatut] = useState(0);

  return( 
    <div className="card">
      <div className="card-head">
        <div className="card-header">
          <h4 className="card-title">Recherche</h4>
        </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <div className='col-12'>
            <label>Période</label>
            <ReactDatePicker
              selectsRange={true}
              dateFormat="dd/MM/yyyy"                                                                                 
              startDate={startDate}
              endDate={endDate}
              className="form-control"
              monthsShown={2}
              onChange={(update) => { setRange(update); }}
              isClearable={true}
            />
          </div>
          <div className='col-12'>
            <label>Statut</label>
            <SelectStatutCommande onChangeTrigger={(_statut) => {setStatut(_statut)}}/>
          </div>  
          <div className='col-12'>
            <br/>
            <button className='btn btn-primary' onClick={() => {handleClick(statut)}}>Rechercher</button>
          </div>          
        </div>
      </div>
  </div>)
}