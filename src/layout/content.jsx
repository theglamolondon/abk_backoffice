import React from 'react';
import AppRouter from '../router/AppRouter';

export default function ContentPage(props){
    return(
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
            <div className="content-header row">
            </div>
                <div className="content-body">
                    <AppRouter />
                </div>
            </div>
        </div>
    )
}