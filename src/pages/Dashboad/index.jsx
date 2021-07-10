import React from "react";
import CommandeListeDetails from "./commandeListDetails";
import BoxStatistics from "./boxStatistics";
import CourbeCommande from "./graphe";
import HistoriqueCard from "./historique";
import DashboardRx from "../../reducer/dashboard";
import { connect } from "react-redux";

function DashboardPage(props) {
    
  return (
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
      <CommandeListeDetails getData={props.getCmdRecentes} data={props.data.commandes}/> 
    </React.Fragment>
  )
}

const getCmdRecentes = DashboardRx.getRecents

const mapDispatchToProps = {
  getCmdRecentes, 
}

const mapStateToProps = state => {
    return {
        data: state.context.dashboard,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage)