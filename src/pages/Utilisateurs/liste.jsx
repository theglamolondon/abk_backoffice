import React, { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import UtilisateurForm from './form/utilisateurFrom';

function UtilisateursListe({getData, data, title, addUser}){

  useEffect(() => {
    getData()
  }, [])

  const defaultUser = {id: 0, nom: "", prenoms:"", login: "", password: "", status: 0, role: ""}
  const [user, setUser] = useState(defaultUser);
  const [showUser, setShowUser] = useState(false);

  const createUser = () => {
    setShowUser(true);
    setUser(defaultUser)
  }

  const updateUser = (user) => {
    setShowUser(true);
    setUser(user)
  }

  return (
    <React.Fragment>      
      <div className="col-xl-12 col-lg-12">
      <div className="card active-users">
        <div className="card-header border-0">
          <h4 className="card-title">{title}</h4>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li className="abk-pointer">
                <span data-action="reload" onClick={getData}>
                  <i className="feather icon-rotate-cw" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content">
          <div id="audience-list-scroll" className="col-md-12 table-responsive position-relative">
            <div className="mb-2">
              <Button variant="primary" onClick={()=>{createUser()}}> Créer un utilisateur </Button>

              <UtilisateurForm
                show={showUser} 
                title= {user.id === 0 ? "Nouvel utilisateur" : "Modification utilisateur"}
                handleClose={()=> setShowUser(false)}
                submitAction={addUser}
                user={user}
              />

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
              {data.map( (item, key) => <LigneUtilisateur line={item} key={key} update={updateUser} />)}   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

function LigneUtilisateur({line, update}){
  return (
    <tr>
      <td>{line.nom}</td>
      <td>{line.prenoms}</td>
      <td><StatutText statut={line.statut} /></td>
      <td>{line.role}</td>
      <td>
      <div className="btn-group" role="group" aria-label="First Group">
        <button onClick={() => update(line)} type="button" className="btn btn-icon btn-success" title="Modififer l'utilisateur"><i className="fa fa-edit"></i></button>
        <button onClick={() => {}} type="button" className="btn btn-icon btn-warning" title="Changer de mot de passe"><i className="fa fa-lock"></i></button>
        <button onClick={() => {}} type="button" className="btn btn-icon btn-danger"  title="Supprimer l'utilisateur"><i className="fa fa-trash"></i></button>
      </div>
      </td>
    </tr>
  )
}

function StatutText({statut}){
  let statutText;

  if(statut === 1){
    statutText = "Actif"
  }else if(statut === 0){
    statutText = "Inactif"
  }

  return (<span>{statutText}</span>)
}

export default UtilisateursListe