import React from 'react';
import {StatutCommande, StatutCommandeEnum} from './liste'
import AbkImage from '../../component/image';
import DateFormat from '../../component/dateFormat';

function DetailsCommandeItem({commande}){
    return (commande.data.emplacement !== undefined &&
    <div className="row match-height">
        <br/>
        <RestoCardDetails emplacement={commande.data.emplacement} statut={commande.data.statut} />
        <CommandeCardDetails commande={commande.data}/>
    </div>
    )
}

function RestoCardDetails({emplacement, statut}){

    const emplacementDetails = (
        <React.Fragment>
            <h5>Emplacement</h5>
            <p className="card-text">{emplacement.adresse}</p>
            <p className="card-text">Téléphone : {emplacement.telephone1} / {emplacement.telephone2}</p>
        </React.Fragment>
    )

    return (
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-content">
                    <div className="card-body pt-3">
                        <AbkImage source={emplacement.restaurant.image} alt={emplacement.restaurant.nom} width="190" className="card-img-top img-fluid" />
                        <h4 className="card-title mt-3">{emplacement.restaurant.nom}</h4>
                        <hr/>
                        {parseInt(statut) > StatutCommandeEnum.PAYEE && emplacementDetails}
                    </div>
                </div>
            </div>
        </div>
    )
}

function CommandeCardDetails({commande}){

    return (commande.reference !== undefined &&
        <div className="col-md-8 col-sm-12">
			<div className="card">
				<div className="card-content">
					<div className="card-body">
                    <h4 className="card-title">Commande #{commande.reference}</h4>
                        <div className="row">
                            <div className="col-md-2 text-right">Client :</div>
                            <div className="col-md-4"><b>{commande.adresse.client.nom} {commande.adresse.client.prenoms}</b></div>
                            <div className="col-md-2 text-right">Adresse :</div>
                            <div className="col-md-4"><b>{commande.adresse.ligne1} {commande.adresse.ligne2}</b></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 text-right">Téléphone :</div>
                            <div className="col-md-4"><b>{commande.adresse.client.telephone}</b></div>
                            <div className="col-md-2 text-right">Montant :</div>
                            <div className="col-md-4"><b>{commande.montant + commande.prixLivraison} F</b></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-2 text-right">Etat :</div>
                            <div className="col-md-4"><b><StatutCommande statut={commande.statut} /></b></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-2 text-right">Commandé à :</div>
                            <div className="col-md-4"><b><DateFormat date={commande.dateCommande}/></b></div>
                            <div className="col-md-2 text-right">Préparé à :</div>
                            <div className="col-md-4">
                                {parseInt(commande.statut) >= StatutCommandeEnum.PREPARATION && <b><DateFormat date={commande.dateAffectation}/></b>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 text-right">Récupéré à :</div>
                            <div className="col-md-4">
                                {parseInt(commande.statut) >= StatutCommandeEnum.RECUPEREE && <b><DateFormat date={commande.dateReception}/></b>}
                            </div>
                            <div className="col-md-2 text-right">Livré à :</div>
                            <div className="col-md-4">
                                {parseInt(commande.statut) >= StatutCommandeEnum.LIVREE && <b><DateFormat date={commande.dateLivraison}/></b>}
                            </div>
                        </div>
					</div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="bg-primary">
                                <tr>
                                    <th width="15">#</th>
                                    <th>Plats</th>
                                    <th width="20">Qté</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commande.lignesCommande.map((ligne, k) => {
                                    return (
                                    <tr key={k}>
                                        <th scope="row">{k+1}</th>
                                        <td>
                                            {ligne.plat.titre} 
                                            {ligne.accompagnement !== null ? ` - ${ligne.accompagnement.nom}` : null}
                                        </td>
                                        <td className="text-center">x{ligne.quantite}</td>
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
    )
}

export default DetailsCommandeItem