import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function PaginateView({actualPage, totalPage}){

  let previous = false
  let next     = false

  if(totalPage > 1){

    if(actualPage > 1){
      previous = true
    }

    if(actualPage > totalPage){
      next = true
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="dataTables_paginate">
          <ul className="pagination">
            {previous && 
            <li className="paginate_button page-item previous" id="DataTables_Table_2_previous">
              <Link to={`?page=${actualPage - 1}`}  className="abk-pointer page-link">Précédent</Link>
            </li>}
            
              <BoxPage nombre={totalPage} current={actualPage} />

            {next && 
            <li className="paginate_button page-item next" id="DataTables_Table_2_next">
            <Link to={`?page=${actualPage + 1}`}  className="abk-pointer page-link">Suivant</Link>
          </li>}
          </ul>
        </div>
      </div>
    </div>
  )
}

function BoxPage({nombre, current}){
  const LIMIT_SHOW = 5
  const LIMIT_CARD = 3

  let liste = []

  if(nombre > 1) {
    for(let i = 1; i<=nombre; i++) {
      //--------------------------------------- Pour 5 pages ----------------------------------------------
      if(nombre <= LIMIT_SHOW){
        liste.push({isActive: current === i, value: i})
      }else{
      //---------------------------------------- Plus de 5 pages ------------------------------------------
        
        //Affiche la première case si nous sommes sur une page autre que la première
        if(i === 1){
          liste.push({isActive: current === i, value: i})
        }

        if(i < nombre && i > 1){

          if(nombre >= LIMIT_CARD){
            if(current === 1 && i <= LIMIT_CARD){ 
              liste.push({isActive: current === i, value: i})
            }
          }

          if(i === current - 2){
            liste.push({isActive: false, value: "..."})
          }

          if(i === (current - 1)){
            liste.push({isActive: current === i, value: i})
          }

          if(i === (current)){
            liste.push({isActive: current === i, value: i})
          }
          
          if(current > 1){
            if(i === current + 1){
              liste.push({isActive: current === i, value: i})
            }
          }

          if(i === current + 2){
            liste.push({isActive: false, value: "..."})
          }
        }        
        
        //affiche la dernière page
        if(i === nombre){
          liste.push({isActive: current === i, value: i})
        }
      }
    }
  }
  
  return (<React.Fragment>
    {liste.map((item, k) => 
      <PaginationBox isActiveClass={item.isActive} stepValue={item.value} key={k}/>
   )}
  </React.Fragment>)
}



function PaginationBox({isActiveClass, stepValue}){

  return (
    <li className={`paginate_button page-item ${isActiveClass ? 'active' : ''}`}>
      <Link to={`?page=${stepValue}`} className="page-link">{stepValue}</Link>
    </li>
  )
}

PaginateView.propTypes = {
  actualPage : PropTypes.number.isRequired,
  totalPage  : PropTypes.number.isRequired,
}

PaginateView.defaultProps = {
  actualPage : 0,
  totalPage  : 1,
}

export default PaginateView