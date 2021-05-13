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
                            <i className="feather icon-shopping-cart" />
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
                        <Link to="/restaurants">
                            <i className="feather icon-grid" />
                            <span className="menu-title" data-i18n="Starter kit">Restaurants</span>
                        </Link>
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