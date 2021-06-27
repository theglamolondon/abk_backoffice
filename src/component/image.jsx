import React from 'react';
import PropTypes from 'prop-types';

function AbkImage(props) {
    return (<img src={`http://localhost:8080/${props.source}`} {...props} />)
}

AbkImage.propTypes = {
    source: PropTypes.string.isRequired
}

export default AbkImage