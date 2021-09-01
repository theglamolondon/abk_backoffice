import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import LivreurForm, { LivreurFormMode } from './forms/LivreurForm';

function LivreursListe({getData, data, title, addLivreur, changeMdp, handleUpdate, refresh}){

  useEffect(() => {
    getData()
  }, [])

  const defaultLivreur = {id: 0, nom: "", prenoms:"", email: "", telephone: "", typePiece: "", numeroPiece: "", validitePiece: "", password: "", statut: 0}
  const [livreur, setLivreur] = useState(defaultLivreur);
  const [showLivreur, setShowLivreur] = useState(false);
  const [modeForm, setModeForm] = useState(LivreurFormMode.EDIT_INFO);

  const createLivreur = () => {    
    setLivreur(defaultLivreur)
    setModeForm(LivreurFormMode.EDIT_INFO)
    setShowLivreur(true);
  }

  const updateLivreur = (livreur) => {    
    setLivreur(livreur)
    setModeForm(LivreurFormMode.EDIT_INFO)
    setShowLivreur(true);
  }

  const changePassword = (livreur) => {
    setLivreur(livreur);
    setModeForm(LivreurFormMode.EDIT_PASSWORD)
    setShowLivreur(true)
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
              <Button variant="primary" onClick={()=>{createLivreur()}}> Ajouter un livreur</Button>

              <LivreurForm
                show={showLivreur} 
                title= {livreur.id === 0 ? "Nouveau livreur" : "Modification livreur"}
                handleClose={()=> setShowLivreur(false)}
                add={addLivreur}
                update={handleUpdate}
                changeMdp={changeMdp}
                livreur={livreur}
                refresh={refresh}
                mode={modeForm}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénoms</th>
                  <th>Statut</th>
                  <th width="50">Actions</th>
                </tr>
              </thead>
              <tbody>
              {data.map( (item, key) => <LigneUtilisateur line={item} key={key} update={updateLivreur} changePassword={changePassword}/>)}   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

function LigneUtilisateur({line, update, changePassword}){
  return (
    <tr>
      <td>{line.nom}</td>
      <td>{line.prenoms}</td>
      <td><StatutText statut={line.statut} /></td>
      <td>
      <div className="btn-group" role="group" aria-label="First Group">
        <button onClick={() => update(line)} type="button" className="btn btn-icon btn-success" title="Modififer le livreur"><i className="fa fa-edit"></i></button>
        <button onClick={() => changePassword(line)} type="button" className="btn btn-icon btn-warning" title="Changer de mot de passe"><i className="fa fa-lock"></i></button>
        <button onClick={() => {}} type="button" className="btn btn-icon btn-danger"  title="Supprimer le livreur"><i className="fa fa-trash"></i></button>
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

export default LivreursListe