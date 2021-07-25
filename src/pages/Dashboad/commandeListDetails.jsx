import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PaginateView from '../../component/pagination';
import {StatutCommande} from '../Commandes/liste'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CommandeListeDetails({getData, commandes}){

  const [nbColTbl, setNbColTbl] = useState(12)
  const [showDetails, setShowDetails] = useState(false)
  const [currentCommand, setCurrentCommand] = useState(null)
  
  let page = useQuery().get("page");

  if(page === undefined || page === null){
    page = 1
  }

  useEffect(()=>{
    if(nbColTbl === 8){
      setShowDetails(true)
    }else{
      setShowDetails(false)
    }
  }, [nbColTbl])

  useEffect(() => {
    getData(page)
  },[page])

  const handleClick = (item)=>{
    setNbColTbl(8)
    setCurrentCommand(item)
  }

  const closeDetails = () => {
    setNbColTbl(12)
  }
  
  return (
  <React.Fragment>
    <div className="row match-height">
      <div className={`col-xl-${nbColTbl} col-lg-${nbColTbl}`}>
        <div className="card active-users">
          <div className="card-header border-0">
            <h4 className="card-title">Commandes récentes</h4>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li className="abk-pointer"><span data-action="reload"><i className="feather icon-rotate-cw" onClick={getData}/></span></li>
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
                {commandes.data.map((item, k) => {
                  return (
                    <tr onClick={(e)=>{handleClick(item)}} key={k} className="abk-pointer">
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
                        <span>{item.adresse.client.nom} {item.adresse.client.prenoms}</span>
                      </td>
                      <td className="align-middle">
                        <StatutCommande statut={item.statut} />
                      </td>
                      <td className="align-middle">
                        <span className="text-truncate">{item.montant} F</span>
                      </td>
                      <td className="align-middle">
                        <span className="text-truncate">{item.emplacement.restaurant.nom}</span>
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
    </div>
    <PaginateView totalPage={commandes.nombrePage} actualPage={parseInt(page)}/>
  </React.Fragment>)
}

function DetailsCommande({display, close, commande}) {

    return (display &&
        <div className="col-xl-4 col-lg-4">
        <div className="card">
          <div className="card-header border-0">
            <h4 className="card-title">Détails #{commande.reference}</h4>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li className="abk-pointer"><span data-action="reload"><i className="feather icon-eye-off" onClick={close}></i></span></li>
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="widget-timeline">
                <ul>
                  <li className="timeline-items timeline-icon-success">
                    <p className="timeline-time">{new Intl.DateTimeFormat("fr-FR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                      }).format(Date.parse(commande.dateCommande))}</p>
                    <div className="timeline-title">Nouvelle commande</div>
                    <div className="timeline-subtitle">Restaurant : {commande.emplacement.restaurant.nom}</div>
                  </li>
                  <li className="timeline-items timeline-icon-danger">
                    <p className="timeline-time">{new Intl.DateTimeFormat("fr-FR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(Date.parse(commande.dateReception))}</p>
                    <div className="timeline-title">Commande acceptée</div>
                    <div className="timeline-subtitle">Emplacement :{commande.emplacement.adresse} </div>
                  </li>
                  <li className="timeline-items timeline-icon-warning">
                    <p className="timeline-time">{new Intl.DateTimeFormat("fr-FR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(Date.parse(commande.dateAffectation))}</p>
                    <div className="timeline-title">
                      <span>Commande récupérée</span>
                    </div>
                    <div className="timeline-subtitle">Livreur : {commande.emplacement.restaurant.nom}</div>
                  </li>
                  <li className="timeline-items timeline-icon-info">
                    <p className="timeline-time">{new Intl.DateTimeFormat("fr-FR", {
                          year  : "numeric",
                          month : "2-digit",
                          day   : "2-digit",
                          hour  : 'numeric',
                          minute: 'numeric',
                          second: 'numeric'
                        }).format(Date.parse(commande.dateLivraison))}</p>
                    <div className="timeline-title">Commande livrée</div>
                    <div className="timeline-subtitle">Adresse : </div>
                  </li>
                </ul>
              </div>

              <div className="chart-stats text-center">
                <Link to={``} className="btn btn-sm btn-primary mr-1">... plus détails sur la commande <i className="feather icon-eye"></i></Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}