import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CommandeListe({title, data, getData}) {

    useEffect(() => getData(), [title])

    return (
    <div className="col-xl-12 col-lg-12">
    <div className="card active-users">
      <div className="card-header border-0">
        <h4 className="card-title">{title}</h4>
        <a className="heading-elements-toggle" href="#aaaaaaaaaaa">
          <i className="fa fa-ellipsis-v font-medium-3"></i>
        </a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            <li>
              <a data-action="reload" href="#reload">
                <i className="feather icon-rotate-cw" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <div id="audience-list-scroll" className="table-responsive position-relative">
          <table className="table">
            <thead>
              <tr>
                <th>Commande</th>
                <th>Date commande</th>
                <th>Client</th>
                <th>Montant</th>
                <th>Satut</th>
                <th>Restaurant</th>
              </tr>
            </thead>
            <tbody>
            {data.map( (item, key) => <LigneCommande line={item} key={key}/>)}   
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    )
}

function LigneCommande({line}) {
  
  let link;
  switch(line.statut){
    case StatutCommandeEnum.PAYEE :
      link = <Link to={`/commandes/affecter/${line.reference}`}> {`#${line.reference}`}</Link>
      break;
    case StatutCommandeEnum.PRETE :
    case StatutCommandeEnum.PREPARATION :
      link = <Link to={`/commandes/recuperer/${line.reference}`}> {`#${line.reference}`}</Link>
      break;
    default :
      link = <Link to={`/commandes/details/${line.reference}`}> {`#${line.reference}`}</Link> 
  }

  return (
    <tr>
      <td className="text-truncate">
        <span className="text-truncate">{link}</span>
      </td>        
      <td className="text-truncate">
        <span className="text-truncate">
        {new Intl.DateTimeFormat("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }).format(Date.parse(line.dateCommande))}
        </span>
      </td>
      <td className="align-middle">
        <span>{line.client.nom} {line.client.prenoms}</span>
      </td>
      <td className="align-middle">
        <span>{line.montant}</span>
      </td>
      <td className="align-middle">
        <StatutCommande statut={line.statut} />
      </td>
      <td className="align-middle">
        <span>{line.restaurant.nom}</span>
      </td>                
    </tr>
  )
}

export const StatutCommandeEnum = {
  INITIEE : 0, 
  PAYEE: 1, 
  ANNULEE: 2,
  AFFECTEE: 3,
  PREPARATION: 4,
  PRETE: 5,
  RECUPEREE: 6, 
  LIVREE: 7
}

export function StatutCommande({statut}) {
  
  switch(statut){
    case StatutCommandeEnum.INITIEE :
      return <span className="badge badge-primary">Initiée</span>
    case StatutCommandeEnum.PAYEE :
      return <span className="badge badge-primary">Payée</span>
    case StatutCommandeEnum.ANNULEE :
      return <span className="badge badge-error">Annulée</span>
    case StatutCommandeEnum.AFFECTEE :
      return <span className="badge badge-info">Envoyée au restaurant</span>
    case StatutCommandeEnum.PREPARATION :
      return <span className="badge badge-warning">En cours de préparation</span>
    case StatutCommandeEnum.PRETE :
      return <span className="badge badge-warning">Commande prête</span>
    case StatutCommandeEnum.RECUPEREE :
      return <span className="badge badge-warning">En cours de livraison</span>
    case StatutCommandeEnum.LIVREE :
        return <span className="badge badge-success">Livrée</span>
    default:
      return <span className="badge">Inconnu</span>
  }
}

StatutCommande.prototype = {
  statut : PropTypes.number
}

CommandeListe.propTypes = {
  getData : PropTypes.func,
  //data : PropTypes.array.isRequired
}

export default CommandeListe