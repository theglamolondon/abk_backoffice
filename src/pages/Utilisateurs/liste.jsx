import { Button } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';

function UtilisateursListe({getData, data, title}){

   useEffect(() => {
    getData()
   }, [])

  return (
    <React.Fragment>      
      <div className="col-xl-12 col-lg-12">
      <div className="card active-users">
        <div className="card-header border-0">
          <h4 className="card-title">Liste des utilisateurs</h4>
          <a className="heading-elements-toggle" href="#reload">
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
          <div id="audience-list-scroll" className="col-md-12 table-responsive position-relative">
            <div className="mb-2">
              <Button variant="primary" onClick={()=>{}}> Créer un utilisateur </Button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénoms</th>
                  <th>Statut</th>
                  <th width="150">Role</th>
                  <th width="50">Actions</th>
                </tr>
              </thead>
              <tbody>
              {data.map( (item, key) => <LigneUtilisateur line={item} key={key}/>)}   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

function LigneUtilisateur({line}){
  return (
    <tr>
      <td>{line.nom}</td>
      <td>{line.prenoms}</td>
      <td><StatutText statut={line.statut} /></td>
      <td>{line.role}</td>
      <td>###</td>
    </tr>
  )
}

function StatutText({statut}){
  if(statut == 1){
    return <span>Actif</span>
  }else if(statut == 0){
    return <span>Inactif</span>
  }
}

export default UtilisateursListe