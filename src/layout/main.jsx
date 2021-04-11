import  React from 'react'
import HeaderSide from "./header";
import MenuLeftSide from "./menu";
import ContentPage from "./content";

export default function AppLayout(props) {

    return(
        <React.Fragment>
            <HeaderSide/>
            <MenuLeftSide/>
            <ContentPage/>
            <footer className="footer footer-static footer-dark navbar-border">
                <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
                    <span className="float-md-left d-block d-md-inline-block">Copyright  &copy; 2021 <a className="text-bold-800 grey darken-2" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Willy&Armel</a></span>
                    <span className="float-md-right d-none d-lg-block">Hand-crafted & Made with <i className="feather icon-heart pink" /></span>
                </p>
            </footer>
        </React.Fragment>
    )
}