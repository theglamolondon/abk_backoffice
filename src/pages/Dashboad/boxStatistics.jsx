import React from 'react';

export default function BoxStatistics(props) {
  return (
    <div className="row grouped-multiple-statistics-card">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-xl-3 col-sm-6 col-12">
                <div className="d-flex align-items-start mb-sm-1 mb-xl-0 border-right-blue-grey border-right-lighten-5">
                  <span className="card-icon primary d-flex justify-content-center mr-3">
                    <i className="icon p-1 icon-bar-chart customize-icon font-large-2 p-1"></i>
                  </span>
                  <div className="stats-amount mr-3">
                    <h3 className="heading-text text-bold-600">$95k</h3>
                    <p className="sub-heading">CA mensuel</p>
                  </div>
                  <span className="inc-dec-percentage">
                    <small className="success"><i className="fa fa-long-arrow-up"></i> 5.2%</small>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 col-sm-6 col-12">
                <div className="d-flex align-items-start mb-sm-1 mb-xl-0 border-right-blue-grey border-right-lighten-5">
                  <span className="card-icon danger d-flex justify-content-center mr-3">
                    <i className="icon p-1 icon-pie-chart customize-icon font-large-2 p-1"></i>
                  </span>
                  <div className="stats-amount mr-3">
                    <h3 className="heading-text text-bold-600">18.63%</h3>
                    <p className="sub-heading">Croissance </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 col-sm-6 col-12">
                <div className="d-flex align-items-start border-right-blue-grey border-right-lighten-5">
                  <span className="card-icon success d-flex justify-content-center mr-3">
                    <i className="icon p-1 icon-graph customize-icon font-large-2 p-1"></i>
                  </span>
                  <div className="stats-amount mr-3">
                    <h3 className="heading-text text-bold-600">$27k</h3>
                    <p className="sub-heading">Livrées</p>
                  </div>
                  <span className="inc-dec-percentage">
                    <small className="success"><i className="fa fa-long-arrow-up"></i> 10.0%</small>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-xl-3 col-sm-6 col-12">
                <div className="d-flex align-items-start">
                  <span className="card-icon warning d-flex justify-content-center mr-3">
                    <i className="icon p-1 icon-basket-loaded customize-icon font-large-2 p-1"></i>
                  </span>
                  <div className="stats-amount mr-3">
                    <h3 className="heading-text text-bold-600">13700</h3>
                    <p className="sub-heading">Commandes</p>
                  </div>
                  <span className="inc-dec-percentage">
                    <small className="danger"><i className="fa fa-long-arrow-down"></i> 13.6%</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}