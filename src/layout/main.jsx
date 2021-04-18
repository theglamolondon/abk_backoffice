import  React from 'react'
import HeaderSide from "./header";
import MenuLeftSide from "./menu";
import ContentPage from "./content";
import LoginPage from '../pages/Auth/Login';
import { connect } from 'react-redux';
import useToken from '../pages/Auth/useToken';
import setupNotification from '../notification/messaging';

function AppLayout(props) {

    setupNotification();

    const { token, setToken } = useToken();

    if(!token) {
      return <LoginPage handleLogin={setToken} />
    }

    return(
        <React.Fragment>
            <HeaderSide />
            <MenuLeftSide />
            <ContentPage />
            <Footer />
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

const mapStateToProps = store => {
    return {
        user : store.user
    }
}

export default connect(mapStateToProps)(AppLayout)