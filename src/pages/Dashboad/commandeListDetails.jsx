import React from 'react';

export default function CommandeListeDetails(props){
    return (
        <div className="row match-height">
    <div className="col-xl-8 col-lg-12">
    <div className="card active-users">
      <div className="card-header border-0">
        <h4 className="card-title">Commandes récentes</h4>
        <a className="heading-elements-toggle" href="#1"><i className="fa fa-ellipsis-v font-medium-3"></i></a>
        <div className="heading-elements">
          <ul className="list-inline mb-0">
            <li><a data-action="reload" href="#123"><i className="feather icon-rotate-cw"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="card-content">
        <div id="audience-list-scroll" className="table-responsive position-relative">
          <table className="table">
            <thead>
              <tr>
                <th>Commande</th>
                <th>Client</th>
                <th>Satut</th>
                <th>Montant</th>
                <th>Restaurant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-truncate">
                  <div className="avatar avatar-md mr-1">
                    <img className="rounded-circle" src="/assets/images/portrait/small/avatar-s-11.png"  alt="Generic placeholder" />
                  </div>
                  <span className="text-truncate">Shwell Flintof</span>
                </td>
                <td className="align-middle">
                  <span>shwellFlint@gmail.com</span>
                </td>
                <td className="align-middle">
                  <span>450MB</span>
                </td>
                <td className="align-middle">
                  <div className="progress my-75">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="20" aria-valuemin="20" aria-valuemax="100" style={{width: '55%'}}>55%</div>
                  </div>
                </td>
                <td className="align-middle">
                  <span className="badge badge-success">Active</span>
                </td>                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <DetailsCommande />
</div>
    )
}

function DetailsCommande(props) {
    return (
        <div className="col-xl-4 col-lg-12">
        <div className="card">
          <div className="card-header border-0">
            <h4 className="card-title">Détails commande #123456789</h4>
            <div className="heading-elements">
              <ul className="list-inline">
                <li><a data-action="reload" href="#1"><i className="feather icon-rotate-cw"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="widget-timeline">
                <ul>
                  <li className="timeline-items timeline-icon-success">
                    <p className="timeline-time">Monday 12:12pm</p>
                    <div className="timeline-title">Catch Up With Brain</div>
                    <div className="timeline-subtitle">Mobile Project</div>
                    <div>
                      <ul className="list-unstyled users-list cursor-pointer m-0 d-flex align-items-center">
                        <li className="avatar avatar-sm pull-up my-0">
                          <img className="rounded-circle" src="/assets/images/portrait/small/avatar-s-20.png" alt="Generic placeholder" data-toggle="tooltip" data-placement="top" title="Ogasawara" />
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="timeline-items timeline-icon-danger">
                    <p className="timeline-time">2 days ago</p>
                    <div className="timeline-title">Make new icons</div>
                    <div className="timeline-subtitle">Web Apps</div>
                  </li>
                  <li className="timeline-items timeline-icon-warning">
                    <p className="timeline-time">Yesterday</p>
                    <div className="timeline-title">
                      <span>Design explorations</span>
                      <span className="badge badge-pill badge-sm badge-success">Completed</span>
                    </div>
                    <div className="timeline-subtitle">Company Website</div>
                  </li>
                  <li className="timeline-items timeline-icon-info">
                    <p className="timeline-time">5 hours ago</p>
                    <div className="timeline-title">Lunch with Mary</div>
                    <div className="timeline-subtitle">Grill House</div>
                    <div>
                      <ul className="list-unstyled users-list cursor-pointer m-0 d-flex align-items-center">
                        <li className="avatar avatar-sm pull-up my-0">
                          <img className="rounded-circle" src="/assets/images/portrait/small/avatar-s-20.png" alt="Generic placeholder" data-toggle="tooltip" data-placement="top" title="Ogasawara" />
                        </li>
                        <li className="avatar avatar-sm pull-up my-0">
                          <img className="rounded-circle" src="/assets/images/portrait/small/avatar-s-21.png" alt="Generic placeholder" data-toggle="tooltip" data-placement="top" title="Stepan" />
                        </li>
                        <li className="avatar avatar-sm pull-up my-0">
                          <img className="rounded-circle" src="/assets/images/portrait/small/avatar-s-22.png" alt="Generic placeholder" data-toggle="tooltip" data-placement="top" title="Kimberly" />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}