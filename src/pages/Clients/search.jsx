import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchPage({searchData}) {

  return (
  <React.Fragment>
    <div className="row">
      <div className="col-xl-12 col-lg-12">
        <div className="card active-users">
          <div className="card-header border-0">
            <h4 className="card-title">Recherche client :  "<b>{searchData.termes}</b>"</h4>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li>
                  <Link data-action="reload" to="#">
                    <i className="feather icon-rotate-cw" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div id="audience-list-scroll" className="table-responsive position-relative">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prénoms</th>
                    <th>Client</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {searchData.clients.length > 0 && searchData.clients.map( (item, key) => 
                  (<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>)
                )}   

                {searchData.clients.length === 0 && 
                  <tr>
                    <td colSpan={6}>
                      <p className='h1 text-center'>
                        <i className='fa fa-exclamation-triangle' />
                      </p>
                      <p className="h3 text-center"> Aucun client ne correpond à votre recherche</p>
                    </td>
                  </tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>)
}