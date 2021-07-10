import React from 'react';

function CourbeCommande(props){

  return (
    <div className="card">
        <div className="card-header border-0-bottom">
            <h4 className="card-title">Activity Chart <span className="text-muted text-bold-400">Weekly</span></h4>
            <a className="heading-elements-toggle" href="#"><i className="fa fa-ellipsis-v font-medium-3"></i></a>
            <div className="heading-elements">
                <ul className="list-inline mb-0">
                    <li><a data-action="reload"><i className="feather icon-rotate-cw"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="card-content">
            <div className="card-body">
                <div id="weekly-activity-chart" className="height-250"></div>
                <ul className="list-inline text-center m-0">
                    <li>
                        <h6><i className="feather icon-circle danger"></i> Runnig</h6>
                    </li>
                    <li className="ml-1">
                        <h6><i className="feather icon-circle success"></i> Walking</h6>
                    </li>
                    <li className="ml-1">
                        <h6><i className="feather icon-circle warning"></i> Cycling</h6>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CourbeCommande