import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import MapIcon from '../../component/Map/icons';
import OpenMap from '../../component/Map/OpenMap';
import PlatForm from './forms/platForm';

function DetailsCommande({data, getData, accompagnements, getAccompagnements, addNewPlat}) {
    
    let { id } = useParams();
    
    const defaultPlat = {id: 0, titre: "", image:"", description: 0, prix: 0, actif: true}
    const [plat, setPlat] = useState(defaultPlat);

    useEffect(()=>{
       getData(id) 
    },[])

    //Plat actions
    const [showPlat, setShowPlat] = useState(false);
    const handleClosePlat = () => setShowPlat(false);

    const createNewPlat = (arg) => {
        getAccompagnements()
        setPlat(defaultPlat)
        setShowPlat(true);
    }

    const clickPlatHandle = () =>{
        createNewPlat(data)
    }

    return (
    <React.Fragment>
        <RestaurantBanner resto={data}/>        
        <div className="row" >
            <CarteEmplacements emplacements={data.emplacements} />
            <StatisticsBox id={id} clickPlatHandle={clickPlatHandle}/>
        </div>
        <br />
        <ListePlat plats={data.plats} />

        <PlatForm
            show={showPlat} 
            handleClose={handleClosePlat} 
            title="Ajouter un plat"
            resto={data} 
            plat={plat}
            accompagnements={accompagnements}
            submitAction={plat.id === 0 ? addNewPlat : ()=>{}}
            />
    </React.Fragment>
    )
}

function StatisticsBox({id, clickPlatHandle}){
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h1>{id}</h1>
                    <Link to="#addPlat" className="btn btn-float btn-square btn-primary" title="Ajouter des plats" onClick={clickPlatHandle} >
                            <i className="fa fa-cutlery" /> </Link>
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

    return ( emplacements !== undefined &&
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
        <div className="card-img-top img-fluid bg-cover height-200" style={{background: `url('${resto.image}') 50%`}} >
        <h1 style={{position: "relative", width: "400px", margin: "0px auto", textAlign: "center", color: "white", fontSize: "3.2em", fontWeight: "bold", top: "40%"}}>
                {resto.nom}
            </h1>
        </div>
    </div> )
}

function ListePlat({plats}) {

    return( plats !== undefined &&
        <div className="card">
            <div className="card-header">
                <h4>Liste des plats</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom du plat</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>Accompagnements</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plats.map((plat, k) => {
                            return (<tr key={k}>
                                <td>
                                    <div className="avatar avatar-xl">
                                        <img src={plat.image} alt="Card" />
                                    </div>
                                </td>
                                <td>{plat.titre}</td>
                                <td>{plat.description}</td>
                                <td>{plat.prix}</td>
                                <td>{plat.accompagnements.map((accmp, j) => {
                                    return <span key={j}> {accmp.nom}, </span>
                                })}</td>
                            </tr>)
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetailsCommande