import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListeRestaurant({data, getData}) {
    useEffect(()=>{
        getData()
    }, [])
    
    return (
    <div className="col-xl-12 col-lg-12">
        <div className="row match-height">
            {data.map( (item, key) => <RestaurantCard line={item} key={key}/>)}
		</div>
    </div>
    );
}

function RestaurantCard({line}) {
    return (
    <div className="col-xl-3 col-md-6 col-sm-12">
        <div className="card">
            <div className="card-content">
                <div className="card-body">
                    <h4 className="card-title">{line.nom}</h4>
                </div>
                <Link to={`/restaurants/${line.id}/details`} >
                    <img className="img-fluid" src={line.image} alt={line.nom} style={{height:"158px", width:"30em"}}/>
                </Link>
                <div className="card-body">
                    <div class="form-group text-center">
                        <Link to={`/restaurants/${line.id}/details`} className="btn btn-float btn-square btn-secondary" title="Modifier le restaurant">
                            <i className="fa fa-pencil" />
                        </Link>
                        <Link to={`/restaurants/${line.id}/plats`} className="btn btn-float btn-square btn-primary" title="Ajouter des plats">
                            <i className="fa fa-cutlery" />
                        </Link>
                        <Link to={`/restaurants/${line.id}/emplacements`} className="btn btn-float btn-square btn-secondary" title="Les emplacements">
                            <i className="fa fa-map-marker" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default ListeRestaurant