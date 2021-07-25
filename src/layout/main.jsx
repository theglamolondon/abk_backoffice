import  React, { useEffect } from 'react'
import HeaderSide from "./header";
import MenuLeftSide from "./menu";
import ContentPage from "./content";
import LoginPage from '../pages/Auth/Login';
import { connect } from 'react-redux';
import useToken from '../pages/Auth/useToken';
import NotificationManager from '../notification/messaging'
import AuthRx from '../reducer/auth';
import { useState } from 'react';

function AppLayout(props) {

  const { userSession, setUserSession } = useToken();
  const [connected, setConnected] = useState(false)

  useEffect(() =>{
    if(userSession === null) {
      setConnected(false) 
    }else{
      props.autoLogin(userSession)
      setConnected(true) 
    }
  },[userSession])

  return(
    
    <React.Fragment>
      {connected && 
        <React.Fragment>
          <HeaderSide />
          <MenuLeftSide />
          <ContentPage />
          <Footer />
          <NotificationManager />
        </React.Fragment> }

        { !connected && <LoginPage handleLoginSuccess={setUserSession} /> }
    </React.Fragment> 
      
  )
}

function Footer(props){
    return (
        <footer className="footer footer-static footer-dark navbar-border">
            <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
                <span className="float-md-left d-block d-md-inline-block">Copyright  &copy; 2021 <a className="text-bold-800 grey darken-2" href="#123" target="_blank">Willy&Armel</a></span>
                <span className="float-md-right d-none d-lg-block">Hand-crafted & Made with <i className="feather icon-heart pink" /></span>
            </p>
        </footer>
    )
}

const autoLogin = AuthRx.autologin

const mapDispactchToProps = {
  autoLogin
}

const mapStateToProps = store => {
  return {
    user : store.user
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(AppLayout)