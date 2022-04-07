import React, { useState } from "react";
import CommandeListeDetails from "./commandeListDetails";
import BoxStatistics from "./boxStatistics";
import CourbeCommande from "./graphe";
import HistoriqueCard from "./historique";
import DashboardRx from "../../reducer/dashboard";
import { connect } from "react-redux";
import { AUTH_ROLE } from "../../reducer/auth";
import SearchBox from "../Restaurants/forms/searchBox";

function DashboardPage(props) {
  const {user} = props

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [status, setStatus] = useState(0);

  const searchData = (statut) => {
    let startDate = dateRange[0].toISOString().split('T')[0];
    let endDate   = dateRange[1].toISOString().split('T')[0];
    setStatus(statut)

    const data = {
      dateDebut : `${startDate} 00:00:00`, 
      dateFin   : `${endDate} 23:59:59`, 
      statut: statut, 
      page: 1
    }
    
    props.getStatistiques(data)
    props.getCmdRecentes(data)
  }

  return (
    <React.Fragment>
      {user.role === AUTH_ROLE.ADMIN &&     
      <React.Fragment>
        <SearchBox 
          range={dateRange} 
          setRange={setDateRange} 
          handleClick={searchData}
        />   
        <BoxStatistics data={props.data.statistics}/>
        <div className="row match-height">
          <div className="col-xl-12 col-lg-12">
            <CourbeCommande data={props.data.statistics.graphe} />
          </div>
          {/*<div className="col-xl-4 col-lg-4">
            <HistoriqueCard data={props.data.historique} />
          </div> */}
        </div> 
        <br/>
      </React.Fragment>}

      <CommandeListeDetails commandes={props.data.commandes}/> 
    </React.Fragment>
  )
}

const getCmdRecentes = DashboardRx.getRecents
const getStatistiques = DashboardRx.getStatistics

const mapDispatchToProps = {
  getCmdRecentes, getStatistiques
}

const mapStateToProps = store => {
  return {
    data: store.context.dashboard,
    user: store.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage)