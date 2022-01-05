import React from 'react';
import PropTypes from 'prop-types';
import {URL_BASE_API} from '../enabler/Axios'


function AbkImage(props) {
    return (<img src={`${URL_BASE_API}/storage/${props.source}`} {...props} alt="image" />)
}

AbkImage.propTypes = {
    source: PropTypes.string.isRequired
}

export default AbkImage