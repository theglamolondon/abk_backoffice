import React from 'react';
import { useParams } from 'react-router';

function PlatPage(props) {
    let { id } = useParams();
    return  (
        <React.Fragment>
            <h4>Plat page - id {id}</h4>
        </React.Fragment>
    )
}

export default PlatPage