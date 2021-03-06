import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UserRoleEnum } from '../enabler/userStatus';

export default function MenuLeftSide({user}){
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
            </Link>
          </li>
          <MenuCommande />

          {user.role === UserRoleEnum.ADMIN && 
          <Fragment>
            <MenuRestaurant />
            <MenuPersonnel />
            <MenuRapport />
            <MenuConfiguration />
          </Fragment>}
          
        </ul>
    </div>
  </div>)
}

function MenuCommande(){
  return (
    <li className="nav-item has-sub open">
      <Link to="#">
        <i className="feather icon-shopping-cart" />
        <span className="menu-title" >Commandes</span>
      </Link>
      <ul className="menu-content">
        <li>
          <Link className="menu-item" to="/commandes/liste">Toutes</Link>
        </li>
        <li>
          <Link className="menu-item" to="/commandes/a-affecter">A traiter</Link>
        </li>
        <li>
          <Link className="menu-item" to="/commandes/a-recuperer">A récupérer</Link>
        </li>
        <li>
          <Link className="menu-item" to="/commandes/livrees" >Livrées</Link>
        </li>
    </ul>
  </li>
  )
}

function MenuRapport(){
  return (
    <li className="has-sub nav-item open">
      <Link to="/rapports">
        <i className="feather icon-printer" />
        <span className="menu-title" data-i18n="Report">Rapports</span>
      </Link>
    </li>
  )
}

function MenuConfiguration(){
  return (
    <li className="has-sub nav-item open">
      <Link to="#1">
        <i className="feather icon-box" />
        <span className="menu-title" data-i18n="Gallery">Paramètres</span>
      </Link>
      <ul className="menu-content">
        <li>
          <Link className="menu-item" to="/parametres/accompagnements" >Accompagnements</Link>
        </li>
        <li>
          <Link className="menu-item" to="/parametres/villes" >Villes</Link>
        </li>
      </ul>
    </li>
  )
}

function MenuPersonnel(){
  return (
  <li className="has-sub nav-item open">
    <Link to="#1">
      <i className="feather icon-image" />
      <span className="menu-title" data-i18n="Gallery">Personnels</span>
    </Link>
    <ul className="menu-content">
      <li>
        <Link className="menu-item" to="/livreurs" >Livreurs</Link>
      </li>
      <li>
        <Link className="menu-item" to="/utilisateurs" >Utilisateurs</Link>
      </li>
    </ul>
  </li>)
}

function MenuRestaurant(){
  return (
    <li className="has-sub nav-item open">
      <Link to="/restaurants">
        <i className="feather icon-grid" />
        <span className="menu-title" data-i18n="Starter kit">Restaurants</span>
      </Link>
    </li> 
  )
}