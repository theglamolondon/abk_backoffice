import React from 'react';
import { useParams } from 'react-router';

function EmplacementPage(props) {
    let { id } = useParams();

    return  (
        <React.Fragment>
            <h4>Emplacement page - id {id}</h4>
        </React.Fragment>
    )
}

export default EmplacementPage