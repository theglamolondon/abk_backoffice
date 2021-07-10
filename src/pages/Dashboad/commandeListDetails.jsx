import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {StatutCommande} from '../Commandes/liste'

export default function CommandeListeDetails({getData, data}){

  const [nbColTbl, setNbColTbl] = useState(12)
  const [showDetails, setShowDetails] = useState(false)
  const [currentCommand, setCurrentCommand] = useState(null)
  

  useEffect(()=>{
    if(nbColTbl === 8){
      setShowDetails(true)
    }else{
      setShowDetails(false)
    }
  }, [nbColTbl])

  useEffect(() => {
    getData()
  },[])

  const handleClick = (item)=>{
    setNbColTbl(8)
    setCurrentCommand(item)
  }

  const closeDetails = () => {
    setNbColTbl(12)
  }
  
  return (
  <div className="row match-height">
    <div className={`col-xl-${nbColTbl} col-lg-${nbColTbl}`}>
      <div className="card active-users">
        <div className="card-header border-0">
          <h4 className="card-title">Commandes récentes</h4>
          <a className="heading-elements-toggle" href="#1"><i className="fa fa-ellipsis-v font-medium-3"></i></a>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li><span data-action="reload"><i className="feather icon-rotate-cw"></i></span></li>
            </ul>
          </div>
        </div>
        <div className="card-content">
          <div id="audience-list-scroll" className="table-responsive position-relative">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Commande</th>
                  <th>Client</th>
                  <th>Satut</th>
                  <th>Montant</th>
                  <th>Restaurant</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, k) => {
                  return (
                    <tr onClick={(e)=>{handleClick(item)}}>
                      <td className="text-truncate">
                        <span className="text-truncate">
                        {new Intl.DateTimeFormat("fr-FR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(Date.parse(item.dateCommande))}
                        </span>
                      </td>
                      <td className="text-truncate">
                        <span className="text-truncate">{item.reference}</span>
                      </td>
                      <td className="align-middle">
                        <span>shwellFlint@gmail.com</span>
                      </td>
                      <td className="align-middle">
                        <StatutCommande statut={item.statut} />
                      </td>
                      <td className="align-middle">
                        <span className="text-truncate">{item.montant} F</span>
                      </td>
                      <td className="align-middle">
                        <span className="text-truncate">{item.restaurant.nom}</span>
                      </td>                
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <DetailsCommande display={showDetails} close={closeDetails} commande={currentCommand}/>
  </div>)
}

function DetailsCommande({display, close, commande}) {

    return (display &&
        <div className="col-xl-4 col-lg-4">
        <div className="card">
          <div className="card-header border-0">
            <h4 className="card-title">Détails #{commande.reference}</h4>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li><span data-action="reload"><i className="feather icon-eye-off" onClick={close}></i></span></li>
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="widget-timeline">
                <ul>
                  <li className="timeline-items timeline-icon-success">
                    <p className="timeline-time">Monday 12:12pm</p>
                    <div className="timeline-title">Nouvelle commande</div>
                    <div className="timeline-subtitle">Restaurant : {commande.restaurant.nom}</div>
                  </li>
                  <li className="timeline-items timeline-icon-danger">
                    <p className="timeline-time">2 days ago</p>
                    <div className="timeline-title">Commande acceptée</div>
                    <div className="timeline-subtitle">Emplacement : </div>
                  </li>
                  <li className="timeline-items timeline-icon-warning">
                    <p className="timeline-time">Yesterday</p>
                    <div className="timeline-title">
                      <span>Commande récupérée</span>
                    </div>
                    <div className="timeline-subtitle">Livreur : </div>
                  </li>
                  <li className="timeline-items timeline-icon-info">
                    <p className="timeline-time">5 hours ago</p>
                    <div className="timeline-title">Commande livrée</div>
                    <div className="timeline-subtitle">Adresse : </div>
                  </li>
                </ul>
              </div>

              <div class="chart-stats text-center">
                <Link to={``} class="btn btn-sm btn-primary mr-1">... plus détails sur la commande <i class="feather icon-eye"></i></Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

//   /commandes/details/:reference