import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import AbkImage from '../../component/image';
import MapIcon from '../../component/Map/icons';
import OpenMap from '../../component/Map/OpenMap';
import { URL_BASE_API } from '../../enabler/Axios';
import BoissonForm from './forms/boissonForm';
import PlatForm from './forms/platForm';
import SupplementForm from './forms/supplementForm';

function DetailsRestaurant({data, getData, accompagnements, getAccompagnements, addNewPlat, updatePlat, 
                            addNewBoisson, addNewSupplement, updateBoisson, updateSupplement}) 
{
    
  let { id } = useParams();
  
  const defaultPlat = {id: 0, titre: "", image:"", description: "", prix: 0, actif: true, accompagnements: []}
  const [plat, setPlat] = useState(defaultPlat);
  
  const defaultBoisson = {id: 0, libele: "", prix: 0, actif: true}
  const [boisson, setBoisson] = useState(defaultBoisson);

  const defaultSupplement = {id: 0, libelle: "", image:"", prix: 0, actif: true}
  const [supplement, setSupplement] = useState(defaultSupplement);

  useEffect(()=>{ getData(id) },[])

  //Plat actions
  const [showPlat, setShowPlat] = useState(false);
  const handleClosePlat = () => setShowPlat(false);

  const createNewPlat = (arg) => {
    getAccompagnements(data.id)
    setPlat(defaultPlat)
    setShowPlat(true);
  }
  
  const modifiyPlat = (plat) => {
    getAccompagnements(data.id)
    setPlat(plat)
    setShowPlat(true);
  }

  //Boisson actions
  const [showBoisson, setShowBoisson] = useState(false);
  const handleCloseBoisson = () => setShowBoisson(false);
  const boissonControls = {
    handleClose: handleCloseBoisson,
    createBoisson: (boisson) => {
      setBoisson(boisson)
      setShowBoisson(true);
    }
  }

  //Supplement actions
  const [showSupplement, setShowSupplement] = useState(false);
  const handleCloseSupplement = () => setShowSupplement(false);
  const supplementControls = {
    handleClose: handleCloseSupplement,
    createSupplement: (supplement) => {
      setSupplement(supplement)
      setShowSupplement(true);
    }
  }

  return ( data !== undefined &&
  <React.Fragment>
    <RestaurantBanner resto={data}/>        
    <div className="row" >
      <CarteEmplacements emplacements={data.emplacements} />
      <StatisticsBox 
        id={id} 
        clickPlatHandle={() => createNewPlat(data)}
        supplementActions={supplementControls}
        boissonActions={boissonControls}
        boisson={defaultBoisson}
        supplement={defaultSupplement}
        />
    </div>
    <br />
    <ListeOffre 
      boissons={data.boissons} 
      supplements={data.supplements} 
      plats={data.plats} 
      updatePlatHandler={modifiyPlat}
      updateSupplementHandler={supplementControls.createSupplement}
      updateBoissonHandler={boissonControls.createBoisson}
      supplementActions={supplementControls}
      boissonActions={boissonControls}
      />

    <PlatForm
      show={showPlat} 
      handleClose={handleClosePlat} 
      title={plat.id == 0 ? "Ajouter un plat" : "Modifier un plat"}
      resto={data} 
      plat={plat}
      accompagnements={accompagnements}
      submitAction={plat.id === 0 ? addNewPlat : updatePlat}
      />

      <BoissonForm
        title={boisson.id === 0 ? "Ajouter une boisson" : "Modifier une boisson"}
        show={showBoisson} 
        handleClose={boissonControls.handleClose} 
        resto={data} 
        boisson={boisson}
        submitAction={boisson.id === 0 ? addNewBoisson : updateBoisson}
        />

      <SupplementForm
        show={showSupplement} 
        handleClose={supplementControls.handleClose} 
        title={supplement.id === 0 ? "Ajouter un supplément" : "Modifier un supplément"} 
        resto={data} 
        supplement={supplement}
        submitAction={supplement.id === 0 ? addNewSupplement : updateSupplement}
        />
  </React.Fragment>
  )
}

function StatisticsBox({id, boisson, supplement, clickPlatHandle, supplementActions, boissonActions}){
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <Link to="#addPlat" className="btn btn-float btn-square btn-primary" title="Ajouter des plats" onClick={clickPlatHandle} >
            <i className="fa fa-cutlery" />
          </Link>
          <Link to={`/restaurants/${id}/commandes`} className="btn btn-float btn-square btn-secondary" title="Liste des commandes du resto">
            <i className="fa fa-shopping-basket" />
          </Link>
          <Link to="#addSuppelement" className="btn btn-float btn-square btn-warning" title="Ajouter des suppléments" onClick={() => supplementActions.createSupplement(supplement)} >
            <i className="fa fa-spoon" />
          </Link>
          <Link to="#addBoisson" className="btn btn-float btn-square btn-grey-blue" title="Ajouter des boissons" onClick={() => boissonActions.createBoisson(boisson)} >
            <i className="fa fa-beer" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function CarteEmplacements({emplacements}){
  let points = [];

  //Les emplacements du restaurant
  if(emplacements !== undefined){
    emplacements.map(emplacement => {
    points.push( { 
      position: [emplacement.lattitude, emplacement.longitude], 
      icon: MapIcon.resto, 
      type: 'R',
      id: emplacement.id,
      title: emplacement.adresse
    })
    return null
    })
  }    

  return (emplacements !== undefined &&
  <div className="col-md-9"> 
    <div style={{position: 'relative'}}>
      <div className="abk-details-resto">
        <OpenMap 
          data={points}
          handleMarkerClick={(icon) => {console.log(icon)}}
          />
      </div>
    </div>
  </div>)
}

function RestaurantBanner({resto}){
  return(
  <div className="card profile-with-cover">
    <div className="card-img-top img-fluid bg-cover height-200" style={{background: `url('${URL_BASE_API}/storage/${resto.image}') 50%`}} >
      <h1 style={{position: "relative", width: "400px", margin: "0px auto", textAlign: "center", color: "white", fontSize: "3.2em", fontWeight: "bold", top: "40%"}}>
        {resto.nom}
      </h1>
    </div>
  </div>)
}

function ListeOffre({plats, boissons, supplements, updatePlatHandler, updateSupplementHandler, updateBoissonHandler}) {
  return( 
    <div className="card">
      <div className="card-header">
        <h4>Liste des plats</h4>
      </div>
      <div className="card-body">
        <ul className='nav nav-tabs nav-top-border no-hover-bg nav-justified'>
          <li className="nav-item">
            <a className="nav-link active" id="tab-plats" data-toggle="tab" href="#plats" aria-controls="plats" role="tab" aria-selected="true">Plats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="tab-supplements" data-toggle="tab" href="#supplements" aria-controls="supplements" role="tab" aria-selected="false">Supplements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="tab-boissons" data-toggle="tab" href="#boissons" aria-controls="boissons">Boissons</a>
          </li>
        </ul>
        <div className='tab-content px-1 pt-1'>
          <div id='plats' className='tab-pane active in'>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                    <tr>
                      <th>Image</th>
                      <th>Nom du plat</th>
                      <th>Description</th>
                      <th>Prix</th>
                      <th>Accompagnements</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {plats.map((plat, k) => {return (
                  <tr key={k}>
                    <td>
                      <div className="avatar avatar-xl">
                        <AbkImage source={plat.image} alt="Card" />
                      </div>
                    </td>
                    <td>{plat.titre}</td>
                    <td>{plat.description}</td>
                    <td>{plat.prix}</td>
                    <td>{plat.accompagnements.map((accmp, j) => {return <span key={j}> {accmp.nom}, </span>})}</td>
                    <td>
                      <Link to="#editResto" className="btn btn-float btn-square btn-secondary" title="Modifier le restaurant" onClick={()=>{updatePlatHandler(plat)}}>
                        <i className="fa fa-pencil" />
                      </Link>
                    </td>
                  </tr>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div id='supplements' className='tab-pane'>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                    <tr>
                      <th>Image</th>
                      <th>Nom du supplément</th>
                      <th>Prix</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {supplements.map((supplement, k) => {return (
                  <tr key={k}>
                    <td>
                      <div className="avatar avatar-xl">
                        <AbkImage source={supplement.image} alt="Card" />
                      </div>
                    </td>
                    <td>{supplement.libelle}</td>
                    <td>{supplement.prix}</td>
                    <td>
                      <Link to="#editSupplement" className="btn btn-float btn-square btn-secondary" title="Modifier le supplément" onClick={()=>{updateSupplementHandler(supplement)}}>
                        <i className="fa fa-pencil" />
                      </Link>
                    </td>
                  </tr>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div id='boissons' className='tab-pane'>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                    <tr>
                      <th>Nom de la boisson</th>
                      <th>Prix</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {boissons.map((boisson, k) => {return (
                  <tr key={k}>
                    <td>{boisson.libelle}</td>
                    <td>{boisson.prix}</td>
                    <td>
                      <Link to="#editSupplement" className="btn btn-float btn-square btn-secondary" title="Modifier la boisson" onClick={()=>{updateBoissonHandler(boisson)}}>
                        <i className="fa fa-pencil" />
                      </Link>
                    </td>
                  </tr>)
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default DetailsRestaurant