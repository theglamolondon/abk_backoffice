import React from 'react';

export default function BoxStatistics(props) {
    return (
    <div className="row">
        <div className="col-xl-3 col-lg-6 col-12">
            <div className="card">
                <div className="card-content">
                    <div className="media align-items-stretch">
                        <div className="p-2 text-center bg-primary bg-darken-2">
                            <i className="icon-camera font-large-2 white"></i>
                        </div>
                        <div className="p-2 bg-gradient-x-primary white media-body">
                            <h5>Products</h5>
                            <h5 className="text-bold-400 mb-0"><i className="feather icon-plus"></i> 28</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
            <div className="card">
                <div className="card-content">
                    <div className="media align-items-stretch">
                        <div className="p-2 text-center bg-danger bg-darken-2">
                            <i className="icon-user font-large-2 white"></i>
                        </div>
                        <div className="p-2 bg-gradient-x-danger white media-body">
                            <h5>New Users</h5>
                            <h5 className="text-bold-400 mb-0"><i className="feather icon-arrow-up"></i> 1,238</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
            <div className="card">
                <div className="card-content">
                    <div className="media align-items-stretch">
                        <div className="p-2 text-center bg-warning bg-darken-2">
                            <i className="icon-basket-loaded font-large-2 white"></i>
                        </div>
                        <div className="p-2 bg-gradient-x-warning white media-body">
                            <h5>New Orders</h5>
                            <h5 className="text-bold-400 mb-0"><i className="feather icon-arrow-down"></i> 4,658</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
            <div className="card">
                <div className="card-content">
                    <div className="media align-items-stretch">
                        <div className="p-2 text-center bg-success bg-darken-2">
                            <i className="icon-wallet font-large-2 white"></i>
                        </div>
                        <div className="p-2 bg-gradient-x-success white media-body">
                            <h5>Total Profit</h5>
                            <h5 className="text-bold-400 mb-0"><i className="feather icon-arrow-up"></i> 5.6 M</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}