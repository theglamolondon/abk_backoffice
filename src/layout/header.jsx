import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthRx from '../reducer/auth';
import ClientRx from '../reducer/client';

function HeaderSide(props){
	return(
		<nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-dark">
			<div className="navbar-wrapper">
				<div className="navbar-header">
					<ul className="nav navbar-nav flex-row">
						<li className="nav-item mobile-menu d-md-none mr-auto">
							<Link className="nav-link nav-menu-main menu-toggle hidden-xs" to="#abc">
								<i className="feather icon-menu font-large-1" />
							</Link>
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
							<li className="nav-item">
								<div className="row">
									<SearchBox handleSearch={props.recherche} />
									<ul className="search-list" />
								</div>
							</li>
						</ul>
						<ul className="nav navbar-nav float-right">
							<li className="dropdown dropdown-notification nav-item" />
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
const recherche = ClientRx.recherche

const mapDispatchToProps = {
	deconnexion, recherche
}

const mapStateToProps = state => {
	return {
		utilisateur: state.user,
	}
}
  
export default connect(mapStateToProps, mapDispatchToProps) (HeaderSide)

const SearchBox = ({handleSearch}) => {
	const navigator = useNavigate()

	return (
		<Formik
		 initialValues={{search : ""}}
		 onSubmit={(values, { setSubmitting, resetForm }) => {
				handleSearch(values.search)
				navigator.push(`/client/recherche?query=${values.search}`)
				resetForm()
			}}
		>			 
			<Form className="form-horizontal form-simple" noValidate>
				<fieldset className="mt-1 col-md-12">
					<div className='input-group'>
						<Field type="text" name="search" id="search" className="form-control" placeholder="Rechercher un client ici..." />
						<div className='input-group-append'>
							<button className='btn btn-primary' type='submit'><i className='fa fa-search'/></button>
						</div>
					</div>
				</fieldset>
			</Form>
		</Formik>
	)
}