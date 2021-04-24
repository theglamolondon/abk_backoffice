import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuLeftSide(props){
    return(
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    <li className=" navigation-header">
                        <span>General</span>
                        <i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="General" />
                    </li>
                    <li className="nav-item has-sub open">
                        <Link className="menu-item" to="/" >
                            <i className="feather icon-home" />
                            <span className="menu-title" data-i18n="Dashboard">Dashboard</span>
                            <span className="badge badge badge-primary badge-pill float-right mr-2">3</span>
                        </Link>
                    </li>
                    <li className="nav-item has-sub open">
                        <Link to="#">
                            <i className="feather icon-monitor" />
                            <span className="menu-title" >Commandes</span>
                        </Link>
                        <ul className="menu-content">
                            <li>
                                <Link className="menu-item" to="/commandes/attentes" >En attentes</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="/commandes/affectees" >Affectées</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="has-sub nav-item open">
                        <Link to="#1"><i className="feather icon-zap" /><span className="menu-title" data-i18n="Starter kit">Starter kit</span><span className="badge badge badge-danger badge-pill float-right mr-2">New</span></Link>
                        <ul className="menu-content">
                            <li>
                                <Link className="menu-item" to="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-1-column.html" data-i18n="1 column">1 column</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-2-columns.html" data-i18n="2 columns">2 columns</Link>
                            </li>
                            <li className="has-sub nav-item open">
                                <Link className="menu-item" to="#1" data-i18n="Content Detached Sidebar">Content Detached Sidebar</Link>
                                <ul className="menu-content">
                                    <li>
                                        <Link className="menu-item" to="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sidebar.html" data-i18n="Detached left sidebar">Detached left sidebar</Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" to="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sticky-sidebar.html" data-i18n="Detached sticky left sidebar">Detached sticky left sidebar</Link>
                                    </li>
                                </ul>
                            </li>                            
                            <li className="navigation-divider" />
                            <li>
                                <Link className="menu-item" to="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-semi-dark.html" data-i18n="Semi dark layout">Semi dark layout</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-sub nav-item open">
                        <Link to="#1">
                            <i className="feather icon-image" />
                            <span className="menu-title" data-i18n="Gallery">Gallery</span>
                        </Link>
                        <ul className="menu-content">
                            <li>
                                <Link className="menu-item" to="gallery-grid.html" data-i18n="Gallery Grid">Gallery Grid</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="gallery-grid-with-desc.html" data-i18n="Gallery Grid with Desc">Gallery Grid with Desc</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}