import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Loading from '../../component/Loading'
import VilleForm from './form/villeForm'

function VilleListe({getData, data, ajouter, modifier}){

  const {isLoading} = useQuery("villes", getData)

  const defaulVille = {id: 0, libelle: ""}
  const [ville, setVille] = useState(defaulVille);
  const [showForm, setShowForm] = useState(false);

  const createVille = () => {
    setVille(defaulVille)
    setShowForm(true);
  }

  const updateVille = (ville) => {
    setVille(ville)
    setShowForm(true);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card active-users">
            <div className="card-header border-0">
              <h4 className="card-title">Liste des villes</h4>
              <div className='mt-1'>
                <Button onClick={createVille}>Ajouter une ville</Button>
                <VilleForm
                  show={showForm} 
                  title= {ville.id === 0 ? "Nouvelle ville" : "Modification ville"}
                  handleClose={()=> setShowForm(false)}
                  addHandler={ajouter}
                  updateHandler={modifier}
                  refresh={getData}
                  ville={ville}
                />
              </div>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <span style={{cursor: "pointer"}} data-action="reload" href="#reload" onClick={() => {getData()}}>
                      <i className="feather icon-rotate-cw" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-content">
            <div id="audience-list-scroll" className="table-responsive position-relative">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nom de la ville</th>
                      <th width="25">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  { isLoading && <tr><td colSpan={2}><Loading /></td></tr>}
                  {!isLoading && data.liste.map( (item, key) => 
                    <tr key={key}>
                      <td>-</td>
                      <td>{item.libelle}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="First Group">
                          <button onClick={() => {updateVille(item)}} type="button" className="btn btn-icon btn-success"><i className="fa fa-edit"></i></button>
                        </div>
                      </td>
                    </tr>)}   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default VilleListe