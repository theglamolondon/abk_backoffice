import React, { useEffect, useState }  from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useParams } from 'react-router-dom'
import PaginateView from '../../component/pagination'
import useQuery from '../../enabler/useQuery'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function CommandeRestoPage({data, getData}){
  let { id } = useParams();
  let page = useQuery().get("page");

  if(page === undefined || page === null){
    page = 1
  }

  useEffect(()=>{
    getData(id, {params :{dateDebut: '2021-01-01 00:00:00', dateFin: '2022-01-23 23:59:59', statut: 'PAYEE', page: page-1}})
  }, [page])

  console.log(data)

  return <React.Fragment>
    <h3>Liste commande par restaurant</h3>
    <section className="row">
      <SearchBox />
      <GrapheBox />
    </section>
    <section className='row'>
      <div className='col-md-12'>
        <CommandeTab commandes={data} page={page}/>
      </div>
    </section>

  </React.Fragment>
}

function SearchBox({}){

  const [dateValue, setDateValue] = useState([new Date(2022,0,1), new Date()])

  return <div className="col-xl-6 col-lg-12 col-md-12">
    <div className="card">
      <div className="card-head">
          <div className="card-header">
            <h4 className="card-title">Période</h4>
          </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <Calendar
            onChange={setDateValue}
            value={dateValue}
            locale="FR-fr"
            selectRange={true}
          />
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

function CommandeTab({commandes,page}){
  return(
    <div className="card">
      <div className="card-content">
        <div className="card-body">
          <div id="audience-list-scroll" className="table-responsive position-relative">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Commande</th>
                  <th>Satut</th>
                  <th>Montant</th>
                  <th>Restaurant</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {commandes.data.map((item, k) => { 
                return (
                <tr>
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
                  <td>{item.reference}</td>
                  <td></td>
                  <td>{item.montant}</td>
                  <td>Emplacement</td>
                  <td></td>
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