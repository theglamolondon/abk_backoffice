import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import EmplacementForm from './forms/emplacementForm'
import { useEffect } from 'react';

function EmplacementPage({getData, data, addNewEmpl, updtEmpl}) {
    let { id } = useParams();

    useEffect( () =>{
        getData(id)
    }, [])

    const defaultEmplacement = {id: 0, adresse: "", longitude:"", lattitude: "", telephone1: "", telephone2: "", idRestaurant: 0}
    const [emplacement, setEmplacement] = useState(defaultEmplacement);

    //Emplacements actions
    const [showEmpl, setShowEmpl] = useState(false);
    const handleCloseEmpl = () => setShowEmpl(false);
    const handleShowEmpl = (arg) => {
        setShowEmpl(true);
        setEmplacement(arg)
    }

    return  (data.restaurant !== undefined &&
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-content collapse show">
                        <div className="card-body">                            
                            <div className="mb-2">
                                <Button variant="primary" onClick={()=> handleShowEmpl(defaultEmplacement)}> Ajouter un emplacement </Button>
                            </div>
                            
                            <h4>Liste des emplacements - restaurant {data.restaurant.nom}</h4>

                            <EmplacementForm
                                handleClose={handleCloseEmpl}
                                handleShow={handleShowEmpl}
                                show={showEmpl}
                                title={emplacement.id === 0 ? "Ajouter un emplacement" : "Modifier un emplacement"}
                                resto={data.restaurant}
                                submitAction={emplacement.id === 0 ? addNewEmpl : updtEmpl}
                                />

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="9">#</th>
                                            <th>Adresses</th>
                                            <th width="230">Téléphone</th>
                                            <th width="250">Username</th>
                                            <th width="50">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.emplacements.map( (item, k) => {
                                        return (<tr key={k}>
                                                    <th scope="row">{k+1}</th>
                                                    <td>{item.adresse}</td>
                                                    <td>{item.telephone1} / {item.telephone2}</td>
                                                    <td>@mdo</td>
                                                    <td>
                                                        <div className="btn-group" role="group" aria-label="First Group">
                                                            <button onClick={() => {handleShowEmpl({})}} type="button" className="btn btn-icon btn-success"><i className="fa fa-edit"></i></button>
                                                            <button onClick={() => {handleShowEmpl({})}} type="button" className="btn btn-icon btn-danger"><i className="fa fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default EmplacementPage