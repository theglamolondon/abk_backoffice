import React from "react";
import CommandeListeDetails from "./commandeListDetails";
import BoxStatistics from "./boxStatistics";
import CourbeCommande from "./graphe";
import HistoriqueCard from "./historique";
import DashboardRx from "../../reducer/dashboard";
import { connect } from "react-redux";
import { AUTH_ROLE } from "../../reducer/auth";

function DashboardPage(props) {
  const {user} = props

  return (
    <React.Fragment>
      {user.role === AUTH_ROLE.ADMIN &&     
      <React.Fragment>   
        <BoxStatistics data={props.data.statistics}/>
        <div className="row match-height">
          <div className="col-xl-8 col-lg-8">
            <CourbeCommande />
          </div>
          <div className="col-xl-4 col-lg-4">
            <HistoriqueCard data={props.data.historique} />
          </div>
        </div> 
        <br/>
      </React.Fragment>}

      <CommandeListeDetails getData={props.getCmdRecentes} commandes={props.data.commandes}/> 
    </React.Fragment>
  )
}

const getCmdRecentes = DashboardRx.getRecents

const mapDispatchToProps = {
  getCmdRecentes, 
}

const mapStateToProps = store => {
  return {
    data: store.context.dashboard,
    user: store.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage)