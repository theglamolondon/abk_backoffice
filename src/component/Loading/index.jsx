import React from 'react';
import PropTypes from 'prop-types';
import loader from './loader.gif'

export default function Loading({show}){
  return(
    show &&
    <div style={{display: "flex", justifyContent: "center", margin: "5px"}}>
      <img src={loader} alt="loader" width="25px" />
    </div>  
  )
}

Loading.defaultProps = {
  show: true
}

Loading.prototype = {
  show: PropTypes.bool.isRequired
}