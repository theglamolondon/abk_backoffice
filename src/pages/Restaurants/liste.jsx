import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import AbkImage from '../../component/image';
import Loading from '../../component/Loading';
import BoissonForm from './forms/boissonForm';
import PlatForm from './forms/platForm';
import RestaurantForm from './forms/restaurantForm';
import SupplementForm from './forms/supplementForm';

function ListeRestaurant({data, accompagnements, getData, addNewResto, updateResto, addNewPlat, getAccompagnements, addNewBoisson, addNewSupplement}) {
  const {isLoading} = useQuery("restos", getData)
  
  const defaultResto = {id: 0, nom: "", image:"", duree: 0, prixLivraison: 100, ranking: "", actif: true}
  const [resto, setResto] = useState(defaultResto);
  
  const defaultPlat = {id: 0, titre: "", image:"", description: "", prix: 0, actif: true, accompagnements:[]}
  const [plat, setPlat] = useState(defaultPlat);

  const defaultBoisson = {id: 0, libele: "", prix: 0, actif: true}
  const [boisson, setBoisson] = useState(defaultBoisson);

  const defaultSupplement = {id: 0, libelle: "", image:"", prix: 0, actif: true}
  const [supplement, setSupplement] = useState(defaultSupplement);

  //Restaurant actions
  const [showResto, setShowResto] = useState(false);
  const handleCloseResto = () => setShowResto(false);
  const handleShowResto = () => setShowResto(true);

  const createNewResto = () => {
    setResto(defaultResto)
    handleShowResto()
  }

  const editRestoHandle = (resto) => {
    setResto(resto)
    handleShowResto()
  }

  //Plat actions
  const [showPlat, setShowPlat] = useState(false);
  const handleClosePlat = () => setShowPlat(false);
  const platControls = {
    show: showPlat,
    handleClose: handleClosePlat,
    createNewPlat: (arg) => {
      getAccompagnements(arg.id)
      setResto(arg);
      setPlat(defaultPlat)
      setShowPlat(true);
    }
  }

  //Boisson actions
  const [showBoisson, setShowBoisson] = useState(false);
  const handleCloseBoisson = () => setShowBoisson(false);
  const boissonControls = {
    show: showBoisson,
    handleClose: handleCloseBoisson,
    createNewBoisson: (arg) => {
      setResto(arg);
      setBoisson(defaultBoisson)
      setShowBoisson(true);
    }
  }

  //Supplement actions
  const [showSupplement, setShowSupplement] = useState(false);
  const handleCloseSupplement = () => setShowSupplement(false);
  const supplementControls = {
    show: showSupplement,
    handleClose: handleCloseSupplement,
    createNewSupplement: (arg) => {
      setResto(arg);
      setSupplement(defaultBoisson)
      setShowSupplement(true);
    }
  }
  
  return (
  <div className="col-xl-12 col-lg-12">
    <div className="mb-2">
      <Button variant="primary" onClick={createNewResto}> Ajouter un restaurant </Button>

      <RestaurantForm
        handleClose={handleCloseResto}
        handleShow={handleShowResto}
        show={showResto}
        title={resto.id === 0 ? "Ajouter un restaurant" : "Modifier un restaurant"}
        resto={resto}
        submitAction={resto.id === 0 ? addNewResto : updateResto}
        />

      <PlatForm 
        show={platControls.show} 
        handleClose={platControls.handleClose} 
        title="Ajouter un plat" 
        resto={resto} 
        plat={plat}
        accompagnements={accompagnements}
        submitAction={plat.id === 0 ? addNewPlat : ()=>{}}
        />

      <BoissonForm 
        show={boissonControls.show} 
        handleClose={boissonControls.handleClose} 
        title="Ajouter une boisson" 
        resto={resto} 
        boisson={boisson}
        submitAction={boisson.id === 0 ? addNewBoisson : ()=>{}}
        />

        <SupplementForm
          show={supplementControls.show} 
          handleClose={supplementControls.handleClose} 
          title="Ajouter un supplément" 
          resto={resto} 
          supplement={supplement}
          submitAction={supplement.id === 0 ? addNewSupplement : ()=>{}}
          />
    </div>

    <div className="row match-height">
      {isLoading && <Loading />}
      {!isLoading && data.map( (item, key) => 
        <RestaurantCard 
          line={item} 
          key={key} 
          platActions={platControls} 
          boissonActions={boissonControls}
          supplementActions={supplementControls}
          restoEdit={editRestoHandle}
      />)}
  </div>
  </div>
  );
}

function RestaurantCard({line, platActions, restoEdit, boissonActions, supplementActions}) {   

    return (
    <div className="col-xl-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="card-content">
          <div className="card-body">
            <h4 className="card-title">{line.nom}</h4>
          </div>
          <Link to={`/restaurants/${line.id}/details`} >
            <AbkImage source={line.image} alt={line.nom} style={{height:"158px", width:"100%"}} />
          </Link>
          <div className="card-body">
            <div className="form-group text-center">
              <Link to="#editResto" className="btn btn-float btn-square btn-secondary" title="Modifier le restaurant" onClick={() => {restoEdit(line)}}>
                <i className="fa fa-pencil" />
              </Link>
              <Link to="#addPlat" className="btn btn-float btn-square btn-danger" title="Ajouter des plats" onClick={()=> platActions.createNewPlat(line)} >
                <i className="fa fa-cutlery" />
              </Link>
              <Link to={`/restaurants/${line.id}/emplacements`} className="btn btn-float btn-square btn-primary" title="Les emplacements">
                <i className="fa fa-map-marker" />
              </Link>
              <Link to="#addSuppelement" className="btn btn-float btn-square btn-warning" title="Ajouter des suppléments" onClick={() => supplementActions.createNewSupplement(line)} >
                <i className="fa fa-spoon" />
              </Link>
              <Link to="#addBoisson" className="btn btn-float btn-square btn-grey-blue" title="Ajouter des boissons" onClick={() => boissonActions.createNewBoisson(line)} >
                <i className="fa fa-beer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  export default ListeRestaurant