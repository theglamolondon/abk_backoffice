import React, { useEffect, useState }  from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Link, useParams } from 'react-router-dom'
import PaginateView from '../../component/pagination'
import useQuery from '../../enabler/useQuery'
import { StatutCommande, SelectStatutCommande } from '../Commandes/liste'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { URL_BASE_API } from '../../enabler/Axios'

export default function CommandeRestoPage({data, getData}){
  let { id } = useParams();
  let page = useQuery().get("page");
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [status, setStatus] = useState(0);

  if(page === undefined || page === null){
    page = 1
  }

  const searchData = (statut) => {
    let startDate = dateRange[0].toISOString().split('T')[0];
    let endDate   = dateRange[1].toISOString().split('T')[0];
    setStatus(statut)

    getData(id, {
      params :{
        dateDebut : `${startDate} 00:00:00`, 
        dateFin   : `${endDate} 23:59:59`, 
        statut: statut, page: page-1
      }
    })
  }

  return <React.Fragment>
    <h3>Liste commande par restaurant</h3>
    <section className="row">
      <SearchBox 
        range={dateRange} 
        setRange={setDateRange} 
        handleClick={searchData}
        />
      <GrapheBox />
    </section>
    <section className='row'>
      <div className='col-md-12'>
        <CommandeTab 
          commandes={data} 
          page={page} 
          range={dateRange} 
          resto={id} 
          status={status}
          />
      </div>
    </section>

  </React.Fragment>
}

function SearchBox({range, setRange, handleClick}){

  const [startDate, endDate] = range;
  const [statut, setStatut] = useState(0);

  return <div className="col-xl-6 col-lg-12 col-md-12">
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
              dateFormat="yyyy-MM-dd"                                                                                 
              startDate={startDate}
              endDate={endDate}
              className="form-control"
              monthsShown={2}
              onChange={(update) => { setRange(update); console.log(update) }}
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
    </div>
  </div>
}

function GrapheBox({}){
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
        text: 'Répartition des commandes'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.0f} commandes</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.0f} cmdes'
        }
      }
    },
    series: [
      {
        name: 'Total',
        colorByPoint: true,
        data: [
          {
            name: 'Livrées',
            y: 61,
            sliced: true,
            selected: true
          }, {
            name: 'Affectées',
            y: 11
          }, {
            name: 'En cours de préparation',
            y: 10
          }, {
            name: 'Recupérées',
            y: 8
          }
        ]
      }
    ]
  }
  return (
    <div className="col-xl-6 col-lg-12 col-md-12">
      <div className="card">
        <div className="card-content">
          <div className="card-body">
            <div id="task-pie-chart" className="">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              callback={()=>{}}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CommandeTab({commandes, page, range, resto, status}){
  return(
    <div className="card">
      <div className="card-header">
        <div className='heading-elements'>
          <ul className='list-inline mb-0'>
            <li>
              <a href={`${URL_BASE_API}/backoffice//export/restaurant/commandes?dateDebut=${range[0]}&dateFin=${range[1]}&idRestaurant=${resto}&statut=${status}`} 
                 target='_blank' rel='noreferrer' title='Télécharger le document'>
                <i className='feather icon-download' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <div id="audience-list-scroll" className="table-responsive position-relative">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date commande</th>
                  <th>Référence</th>
                  <th>Satut</th>
                  <th>Montant</th>
                  <th>Restaurant</th>
                </tr>
              </thead>
              <tbody>
              {commandes.data.map((item, k) => { 
                return (
                <tr key={k}>
                  <td>
                    {new Intl.DateTimeFormat("fr-FR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric'
                    }).format(Date.parse(item.dateCommande))}
                  </td>
                  <td><Link to={`/commandes/details/${item.reference}`}>{item.reference}</Link></td>
                  <td><StatutCommande statut={item.statut} /></td>
                  <td>{item.montant}</td>
                  <td>{item.emplacement.nomEmplacement}</td>
                </tr>)
              })}
              </tbody>
            </table>
            <PaginateView totalPage={commandes.nombrePage} actualPage={parseInt(page)}/>
          </div>
        </div>
      </div>
    </div>
  )
}