import React from 'react'
import {Link} from 'react-router-dom'

function HistoriqueCard(props){

  return(
      <div className="card">
      <div className="card-header latest-update-heading d-flex justify-content-between">
        <h4 className="latest-update-heading-title text-bold-500">Historique</h4>
        <div className="dropdown update-year-menu pb-1">
          <span className="bg-transparent dropdown-toggle abk-pointer" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">2019</span>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
            <Link className="dropdown-item abk-pointer" to="#">2018</Link>
            <Link className="dropdown-item abk-pointer" to="#">2017</Link>
            <Link className="dropdown-item abk-pointer" to="#">2016</Link>
          </div>
        </div>
      </div>
      <div className="card-content latest-update-tracking-list pt-0 pb-1 px-2 position-relative">
        <ul className="list-group">
          <li className="list-group-item pt-0 px-0 latest-updated-item border-0 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span className="list-group-item-icon d-inline mr-1">
                <i className="icon text-primary bg-light-primary icon-bag total-products-icon rounded-circle p-50"></i>
              </span>
              <div>
                <p className="mb-25 latest-update-item-name text-bold-600">Total commandes</p>
                <small className="font-small-3">1.2k commandes</small>
              </div>
            </div>
            <span className="update-profit text-bold-600">10.5M fcfa</span>
          </li>
          <li className="list-group-item px-0 latest-updated-item border-0 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span className="list-group-item-icon d-inline mr-1">
                <i className="icon icon-graph bg-light-info text-info total-sales-icon rounded-circle p-50"></i>
              </span>
              <div>
                <p className="mb-25 latest-update-item-name text-bold-600">Commandes abouties</p>
                <small className="font-small-3">39.2k commandes</small>
              </div>
            </div>
            <span className="update-profit text-bold-600">26M fcfa</span>
          </li>
          <li className="list-group-item px-0 latest-updated-item border-0 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span className="list-group-item-icon d-inline mr-1">
                <i className="icon icon-bag bg-light-danger text-danger total-products-icon rounded-circle p-50"></i>
              </span>
              <div>
                <p className="mb-25 latest-update-item-name text-bold-600">Commandes non abouties</p>
                <small className="font-small-3">1.2k commandes</small>
              </div>
            </div>
            <span className="update-profit text-bold-600">10.5M fcfa</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HistoriqueCard