import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import AuthRx from '../../reducer/auth';
import { useState } from 'react';

function LoginPage(props) {
	const {handleLoginSuccess} = props;

	const [error, setError] = useState("")

	return (
	<div className="col-12 d-flex align-items-center justify-content-center abk-login-bg">
		<div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
			<div className="card border-grey border-lighten-3 m-0">
				<div className="card-header border-0">
					<div className="card-title text-center">
						<div className="p-1">
							<img className="brand-logo" alt="logo" src="/assets/images/logo/logo.jpg" width="90" />
						</div>
					</div>
					<h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
						<span>Connexion utilisateur</span>
					</h6>
				</div>
				<div className="card-content">
					<div className="card-body">
						<Formik
							initialValues = {{login: "admin", password: ""}}
							validate = { values => {
								const errors = {}
								if(values.login === ""){
									errors.login = "Nom utilisateur requis"
								}
								if(values.password === ""){
										errors.password = "Mot de passe requis"
								}
								return errors
							}}
							onSubmit={(values, { setSubmitting }) => { 
								props.login(values).then(value => {									
									console.log(value)

									if(value.error !== undefined){
										setError(value.message)
									}else{
										handleLoginSuccess(value)
									}									
								}); 
							}}
						>
										
							<Form className="form-horizontal form-simple" noValidate>
								{error !== "" && <div class="alert alert-danger" role="alert">{error}</div> }
								<fieldset className="form-group position-relative has-icon-left mb-0">
									<Field type="text" className="form-control form-control-lg" name="login" id="user-name" placeholder="Your Username" />
									<div className="form-control-position">
										<i className="feather icon-user"></i>
									</div>
									<ErrorMessage name="login" component="div" className="text-danger"/>
								</fieldset>
								<br/>
								<fieldset className="form-group position-relative has-icon-left">
									<Field type="password" className="form-control form-control-lg" name="password" id="user-password" placeholder="Enter Password" />
									<div className="form-control-position">
										<i className="fa fa-key"></i>
									</div>
									<ErrorMessage name="password" component="div"  className="text-danger"/>
								</fieldset>
								<button type="submit" className="btn btn-primary btn-lg btn-block"><i className="feather icon-unlock"></i> Login</button>
							</Form>									
						</Formik>
					</div>
				</div>
				<div className="card-footer">
					<div className="">
						<p className="float-sm-left text-center m-0">
							<a href="recover-password.html" className="card-link">Mot de passe oublié ?</a>
						</p>
				</div>
			</div>
			</div>
		</div>
	</div>)
}

const login = AuthRx.login;

const mapDispatchToProps = { login }

export default connect(undefined, mapDispatchToProps) (LoginPage)