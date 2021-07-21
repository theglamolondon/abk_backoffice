import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthRx from '../reducer/auth';

function HeaderSide(props){
    return(
        <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-dark">
            <div className="navbar-wrapper">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mobile-menu d-md-none mr-auto">
                            <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#abc">
                            <i className="feather icon-menu font-large-1"></i></a>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/">
                                <img className="brand-logo" alt="logo" src="/assets/images/logo/logo.jpg" width="32" />
                                <h2 className="brand-text">ABK</h2>
                            </Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile" to="/mobile">
                                <i className="fa fa-ellipsis-v"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-container content">
                    <div className="collapse navbar-collapse" id="navbar-mobile">
                        <ul className="nav navbar-nav mr-auto float-left">
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#abc"><i className="feather icon-menu"></i></a>
                            </li>
                            <li className="nav-item nav-search"><a className="nav-link nav-link-search" href="#abc"><i className="ficon feather icon-search"></i></a>
                                <div className="search-input">
                                    <input className="input" type="text" placeholder="Explore Stack..." tabIndex="0" data-search="template-search" />
                                    <div className="search-input-close"><i className="feather icon-x"></i></div>
                                    <ul className="search-list" />
                                </div>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav float-right">
                            <li className="dropdown dropdown-notification nav-item">
                            </li>
                            <li className="dropdown dropdown-user nav-item">
                                <a className="dropdown-toggle nav-link dropdown-user-link" href="#abc" data-toggle="dropdown">
                                    <div className="avatar avatar-online">
                                        <img src="/assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
                                        <i></i>
                                    </div>
                                    <span className="user-name">{props.utilisateur.nom} {props.utilisateur.prenoms}</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <span className="dropdown-item abk-pointer"><i className="feather icon-user"></i> Modifier mon profile</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item abk-pointer" onClick={props.deconnexion}><i className="feather icon-power"></i> Déconnexion</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const deconnexion = AuthRx.logout

const mapDispatchToProps = {
    deconnexion
}

const mapStateToProps = state => {
    return {
        utilisateur: state.user,
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps) (HeaderSide)