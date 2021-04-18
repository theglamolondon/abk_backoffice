import React from "react";
import CommandeListeDetails from "./commandeListDetails";
import BoxStatistics from "./boxStatistics";

export default function Dashboard(props) {
    
    return (
        <React.Fragment>
            <BoxStatistics />
            <CommandeListeDetails /> 
        </React.Fragment>
    )
}