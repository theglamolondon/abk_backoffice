import React from 'react';

export default function MenuLeftSide(props){
    return(
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    <li className=" navigation-header">
                        <span>General</span>
                        <i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="General" />
                    </li>
                    <li className=" nav-item"><a href="index-2.html"><i className="feather icon-home" /><span className="menu-title" data-i18n="Dashboard">Dashboard</span><span className="badge badge badge-primary badge-pill float-right mr-2">3</span></a>
                        <ul className="menu-content">
                            <li className="active"><a className="menu-item" href="dashboard-ecommerce.html" data-i18n="eCommerce">eCommerce</a>
                            </li>
                            <li><a className="menu-item" href="dashboard-analytics.html" data-i18n="Analytics">Analytics</a>
                            </li>
                            <li><a className="menu-item" href="dashboard-fitness.html" data-i18n="Fitness">Fitness</a>
                            </li>
                            <li><a className="menu-item" href="dashboard-crm.html" data-i18n="CRM">CRM</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-monitor" /><span className="menu-title" data-i18n="Templates">Templates</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="#" data-i18n="Vertical">Vertical</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-modern-menu-template" data-i18n="Modern Menu">Modern Menu</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-collapsed-menu-template" data-i18n="Collapsed Menu">Collapsed Menu</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-menu-template" data-i18n="Semi Light">Semi Light</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-menu-template-semi-dark" data-i18n="Semi Dark">Semi Dark</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-menu-template-nav-dark" data-i18n="Nav Dark">Nav Dark</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-menu-template-light" data-i18n="Light">Light</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/vertical-overlay-menu-template" data-i18n="Overlay Menu">Overlay Menu</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Horizontal">Horizontal</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/horizontal-menu-template" data-i18n="classNameic">classNameic</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/html/ltr/horizontal-menu-template-nav" data-i18n="Nav Dark">Nav Dark</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className=" nav-item"><a href="#"><i className="feather icon-zap" /><span className="menu-title" data-i18n="Starter kit">Starter kit</span><span className="badge badge badge-danger badge-pill float-right mr-2">New</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-1-column.html" data-i18n="1 column">1 column</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-2-columns.html" data-i18n="2 columns">2 columns</a>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Content Detached Sidebar">Content Detached Sidebar</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sidebar.html" data-i18n="Detached left sidebar">Detached left sidebar</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-left-sticky-sidebar.html" data-i18n="Detached sticky left sidebar">Detached sticky left sidebar</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-right-sidebar.html" data-i18n="Detached right sidebar">Detached right sidebar</a>
                                    </li>
                                    <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-content-detached-right-sticky-sidebar.html" data-i18n="Detached sticky right sidebar">Detached sticky right sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="navigation-divider" />
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-fixed-navbar.html" data-i18n="Fixed navbar">Fixed navbar</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-fixed-navigation.html" data-i18n="Fixed navigation">Fixed navigation</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-fixed-navbar-navigation.html" data-i18n="Fixed navbar &amp; navigation">Fixed navbar &amp; navigation</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-fixed-navbar-footer.html" data-i18n="Fixed navbar &amp; footer">Fixed navbar &amp; footer</a>
                            </li>
                            <li className="navigation-divider" />
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-fixed.html" data-i18n="Fixed layout">Fixed layout</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-boxed.html" data-i18n="Boxed layout">Boxed layout</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-static.html" data-i18n="Static layout">Static layout</a>
                            </li>
                            <li className="navigation-divider" />
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-light.html" data-i18n="Light layout">Light layout</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-dark.html" data-i18n="Dark layout">Dark layout</a>
                            </li>
                            <li><a className="menu-item" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/starter-kit/ltr/vertical-menu-template/layout-semi-dark.html" data-i18n="Semi dark layout">Semi dark layout</a>
                            </li>
                        </ul>
                    </li>

                    <li className=" nav-item"><a href="#"><i className="feather icon-image" /><span className="menu-title" data-i18n="Gallery">Gallery</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="gallery-grid.html" data-i18n="Gallery Grid">Gallery Grid</a>
                            </li>
                            <li><a className="menu-item" href="gallery-grid-with-desc.html" data-i18n="Gallery Grid with Desc">Gallery Grid with Desc</a>
                            </li>
                            <li><a className="menu-item" href="gallery-masonry.html" data-i18n="Masonry Gallery">Masonry Gallery</a>
                            </li>
                            <li><a className="menu-item" href="gallery-masonry-with-desc.html" data-i18n="Masonry Gallery with Desc">Masonry Gallery with Desc</a>
                            </li>
                            <li><a className="menu-item" href="gallery-hover-effects.html" data-i18n="Hover Effects">Hover Effects</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-search" /><span className="menu-title" data-i18n="Search">Search</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="search-page.html" data-i18n="Search Page">Search Page</a>
                            </li>
                            <li><a className="menu-item" href="search-website.html" data-i18n="Search Website">Search Website</a>
                            </li>
                            <li><a className="menu-item" href="search-images.html" data-i18n="Search Images">Search Images</a>
                            </li>
                            <li><a className="menu-item" href="search-videos.html" data-i18n="Search Videos">Search Videos</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-unlock" /><span className="menu-title" data-i18n="Authentication">Authentication</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="login-simple.html" data-i18n="Login Simple">Login Simple</a>
                            </li>
                            <li><a className="menu-item" href="login-with-bg.html" data-i18n="Login with Bg">Login with Bg</a>
                            </li>
                            <li><a className="menu-item" href="login-with-bg-image.html" data-i18n="Login with Bg Image">Login with Bg Image</a>
                            </li>
                            <li><a className="menu-item" href="register-simple.html" data-i18n="Register Simple">Register Simple</a>
                            </li>
                            <li><a className="menu-item" href="register-with-bg.html" data-i18n="Register with Bg">Register with Bg</a>
                            </li>
                            <li><a className="menu-item" href="register-with-bg-image.html" data-i18n="Register with Bg Image">Register with Bg Image</a>
                            </li>
                            <li><a className="menu-item" href="unlock-user.html" data-i18n="Unlock User">Unlock User</a>
                            </li>
                            <li><a className="menu-item" href="recover-password.html" data-i18n="Recover Password">Recover Password</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-alert-triangle" /><span className="menu-title" data-i18n="Error">Error</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="error-400.html" data-i18n="Error 400">Error 400</a>
                            </li>
                            <li><a className="menu-item" href="error-401.html" data-i18n="Error 401">Error 401</a>
                            </li>
                            <li><a className="menu-item" href="error-403.html" data-i18n="Error 403">Error 403</a>
                            </li>
                            <li><a className="menu-item" href="error-404.html" data-i18n="Error 404">Error 404</a>
                            </li>
                            <li><a className="menu-item" href="error-500.html" data-i18n="Error 500">Error 500</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-watch" /><span className="menu-title" data-i18n="Coming Soon">Coming Soon</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="coming-soon-flat.html" data-i18n="Flat">Flat</a>
                            </li>
                            <li><a className="menu-item" href="coming-soon-bg-image.html" data-i18n="Bg image">Bg image</a>
                            </li>
                            <li><a className="menu-item" href="coming-soon-bg-video.html" data-i18n="Bg video">Bg video</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="under-maintenance.html"><i className="feather icon-cloud-off" /><span className="menu-title" data-i18n="Maintenance">Maintenance</span></a>
                    </li>
                    <li className=" navigation-header"><span>UI</span><i className="feather icon-droplet feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="UI" />
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-globe" /><span className="menu-title" data-i18n="Content">Content</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="content-grid.html" data-i18n="Grid">Grid</a>
                            </li>
                            <li><a className="menu-item" href="content-typography.html" data-i18n="Typography">Typography</a>
                            </li>
                            <li><a className="menu-item" href="content-text-utilities.html" data-i18n="Text utilities">Text utilities</a>
                            </li>
                            <li><a className="menu-item" href="content-syntax-highlighter.html" data-i18n="Syntax highlighter">Syntax highlighter</a>
                            </li>
                            <li><a className="menu-item" href="content-helper-classNamees.html" data-i18n="Helper classNamees">Helper classNamees</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-eye" /><span className="menu-title" data-i18n="Icons">Icons</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="icons-feather.html" data-i18n="Feather">Feather</a>
                            </li>
                            <li><a className="menu-item" href="icons-font-awesome.html" data-i18n="Font Awesome">Font Awesome</a>
                            </li>
                            <li><a className="menu-item" href="icons-simple-line-icons.html" data-i18n="Simple Line Icons">Simple Line Icons</a>
                            </li>
                            <li><a className="menu-item" href="icons-meteocons.html" data-i18n="Meteocons">Meteocons</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" navigation-header"><span>Components</span><i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="Components" />
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-briefcase" /><span className="menu-title" data-i18n="Bootstrap Components">Bootstrap Components</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="component-alerts.html" data-i18n="Alerts">Alerts</a>
                            </li>
                            <li><a className="menu-item" href="component-callout.html" data-i18n="Callout">Callout</a>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Buttons">Buttons</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="component-buttons-basic.html" data-i18n="Basic Buttons">Basic Buttons</a>
                                    </li>
                                    <li><a className="menu-item" href="component-buttons-extended.html" data-i18n="Extended Buttons">Extended Buttons</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="menu-item" href="component-carousel.html" data-i18n="Carousel">Carousel</a></li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-box" /><span className="menu-title" data-i18n="Extra Components">Extra Components</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="ex-component-avatar.html" data-i18n="Avatar">Avatar</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-sweet-alerts.html" data-i18n="Sweet Alerts">Sweet Alerts</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-ratings.html" data-i18n="Ratings">Ratings</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-toastr.html" data-i18n="Toastr">Toastr</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-noui-slider.html" data-i18n="NoUI Slider">NoUI Slider</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-knob.html" data-i18n="Knob">Knob</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-block-ui.html" data-i18n="Block UI">Block UI</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-date-time-picker.html" data-i18n="DateTime Picker">DateTime Picker</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-file-uploader-dropzone.html" data-i18n="File Uploader">File Uploader</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-image-cropper.html" data-i18n="Image Cropper">Image Cropper</a>
                            </li>
                            <li><a className="menu-item" href="component-spinners.html" data-i18n="Spinners">Spinners</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-tour.html" data-i18n="Tour">Tour</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-swiper.html" data-i18n="Swiper">Swiper</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-treeview.html" data-i18n="TreeView">TreeView</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-drag-drop.html" data-i18n="Drag &amp; Drop">Drag &amp; Drop</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-media-player.html" data-i18n="Media player">Media player</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-i18n.html" data-i18n="i18n">i18n</a>
                            </li>
                            <li><a className="menu-item" href="ex-component-miscellaneous.html" data-i18n="Miscellaneous">Miscellaneous</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-bar-chart-2" /><span className="menu-title" data-i18n="Charts">Charts</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="charts-apexcharts.html" data-i18n="Apex Charts">Apex Charts</a>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Chartjs">Chartjs</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="chartjs-line-charts.html" data-i18n="Line charts">Line charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartjs-bar-charts.html" data-i18n="Bar charts">Bar charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartjs-pie-doughnut-charts.html" data-i18n="Pie &amp; Doughnut charts">Pie &amp; Doughnut charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartjs-scatter-charts.html" data-i18n="Scatter charts">Scatter charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartjs-polar-radar-charts.html" data-i18n="Polar &amp; Radar charts">Polar &amp; Radar charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartjs-advance-charts.html" data-i18n="Advance charts">Advance charts</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="menu-item" href="morris-charts.html" data-i18n="Morris Charts">Morris Charts</a>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Chartist">Chartist</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="chartist-line-charts.html" data-i18n="Line charts">Line charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartist-bar-charts.html" data-i18n="Bar charts">Bar charts</a>
                                    </li>
                                    <li><a className="menu-item" href="chartist-pie-charts.html" data-i18n="Pie charts">Pie charts</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-map" /><span className="menu-title" data-i18n="Maps">Maps</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="maps-leaflet.html" data-i18n="Leaflet Maps">Leaflet Maps</a>
                            </li>
                            <li><a className="menu-item" href="vector-maps-jvector.html" data-i18n="jVector Map">jVector Map</a>
                            </li>
                        </ul>
                    </li>
                    <li className=" navigation-header"><span>Others</span><i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="Others" />
                    </li>
                    <li className=" nav-item"><a href="#"><i className="feather icon-align-left" /><span className="menu-title" data-i18n="Menu levels">Menu levels</span></a>
                        <ul className="menu-content">
                            <li><a className="menu-item" href="#" data-i18n="Second level">Second level</a>
                            </li>
                            <li><a className="menu-item" href="#" data-i18n="Second level child">Second level child</a>
                                <ul className="menu-content">
                                    <li><a className="menu-item" href="#" data-i18n="Third level">Third level</a>
                                    </li>
                                    <li><a className="menu-item" href="#" data-i18n="Third level child">Third level child</a>
                                        <ul className="menu-content">
                                            <li><a className="menu-item" href="#" data-i18n="Fourth level">Fourth level</a>
                                            </li>
                                            <li><a className="menu-item" href="#" data-i18n="Fourth level">Fourth level</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="disabled nav-item"><a href="#"><i className="feather icon-slash" /><span className="menu-title" data-i18n="Disabled Menu">Disabled Menu</span></a>
                    </li>
                    <li className=" nav-item"><a href="https://pixinvent.ticksy.com/" target="_blank"><i className="feather icon-life-buoy" /><span className="menu-title" data-i18n="Raise Support">Raise Support</span></a>
                    </li>
                    <li className=" nav-item"><a href="https://pixinvent.com/stack-bootstrap-admin-template/documentation" target="_blank"><i className="feather icon-folder" /><span className="menu-title" data-i18n="Documentation">Documentation</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}