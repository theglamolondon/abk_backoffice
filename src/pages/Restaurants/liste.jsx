import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AbkImage from '../../component/image';
import { URL_BASE_API } from '../../enabler/Axios';
import PlatForm from './forms/platForm';
import RestaurantForm from './forms/restaurantForm';

function ListeRestaurant({data, accompagnements, getData, addNewResto, updateResto, addNewPlat, getAccompagnements}) {
    useEffect(()=>{
      getData()
    }, [])
    
    const defaultResto = {id: 0, nom: "", image:"", duree: 0, prixLivraison: 100, ranking: "", actif: true}
    const [resto, setResto] = useState(defaultResto);
    
    const defaultPlat = {id: 0, titre: "", image:"", description: 0, prix: 0, actif: true}
    const [plat, setPlat] = useState(defaultPlat);

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
    const createNewPlat = (arg) => {
      getAccompagnements()
      setResto(arg);
      setPlat(defaultPlat)
      setShowPlat(true);
    }

    const platControls = {
      show: showPlat,
      handleClose: handleClosePlat,
      createNewPlat: createNewPlat
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
      </div>

      <div className="row match-height">
        {data.map( (item, key) => <RestaurantCard 
          line={item} 
          key={key} 
          platActions={platControls} 
          restoEdit={editRestoHandle}
        />)}
		</div>
    </div>
    );
}

function RestaurantCard({line, platActions, restoEdit}) {
    const clickPlatHandle = () =>{
      platActions.createNewPlat(line)
    }
    const clickRestoHandle = () =>{
      restoEdit(line)
    }

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
              <Link to="#editResto" className="btn btn-float btn-square btn-secondary" title="Modifier le restaurant" onClick={clickRestoHandle}>
                <i className="fa fa-pencil" />
              </Link>
              <Link to="#addPlat" className="btn btn-float btn-square btn-primary" title="Ajouter des plats" onClick={clickPlatHandle} >
                <i className="fa fa-cutlery" />
              </Link>
              <Link to={`/restaurants/${line.id}/emplacements`} className="btn btn-float btn-square btn-secondary" title="Les emplacements">
                <i className="fa fa-map-marker" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  export default ListeRestaurant