// React components
import React from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

// Css
import "./topNav.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import logo from "../../assets/img/branding/Logo/Logo_text_aside.jpg"


const TopNav = props => {


    // Change menu on click
    function changeMenu(event) {
        console.log(event.target.icon);
        // Change chevron direction
        if (event.target.icon == faChevronDown) {
            event.target.icon = faChevronUp;
            console.log('hello')
        }
    }

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1000 && !props.menu) {
                props.setMenu(true);
                document.getElementById('nav').classList.remove('d-none')
                document.getElementById('login').classList.add('justify-content-end')
                document.getElementById('login').classList.remove('justify-content-center')
            } else if (window.innerWidth < 1000 && props.menu) {
                props.setMenu(false)
                document.getElementById('nav').classList.add('d-none')
                document.getElementById('login').classList.remove('justify-content-end')
                document.getElementById('login').classList.add('justify-content-center')
            }
        }

        window.addEventListener('resize', handleResize)
    })

    return (
        <div id="header-and-showcase-container">
            <nav className="navbar bg-main sticky-top row justify-content-around w-100 m-0 p-0">

                <div id="brand-bar" className="col-xxl-4 text-center w-100 row justify-content-between">

                    <a href="/" id="top-brand" className="logo mx-auto mx-lg-0 col-lg-3">
                        <img src={logo} alt="Logo"
                            id="top-brand" className="desktop-logo"></img>
                    </a>
                    <div className='col-lg-9'>
                        <div className={"my-3 "}>
                            <div className="row w-100 mx-auto justify-content-end " id='login'>
                                <div className={"  my-auto col-md-2 " + (props.loggedIn ? "d-none" : "")}>
                                    <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                        href="/login">
                                        <u>Login</u>
                                    </a>
                                </div>
                                <div className={"  my-auto col-md-2 " + (props.loggedIn ? "d-none" : "")}>
                                    <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                        href="signUp">
                                        <u>Sign up</u>
                                    </a>
                                </div>
                                <div className={"  my-auto col-md-2 " + (props.loggedIn ? "" : "d-none")}>
                                    <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                        href="#">
                                        <u>Logout</u>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"text-center d-flex flex-column justify-content-center my-3 "}>
                            <div className={(props.menu ? "" : "d-none")} id={"nav"}>
                                <div className="mx-auto mt-2 mt-lg-0 w-100 row justify-content-around">

                                    <div className=" col-lg-2 h4 my-auto">
                                        <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                            href="/coachesAndLessons">
                                            Lessons
                                        </a>
                                    </div>
                                    <div className=" col-lg-2 h5 my-auto">
                                        <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/gallery">
                                            Gallery
                                        </a>
                                    </div>
                                    <div className=" col-lg-2 h5 my-auto">
                                        <a href="/merch" className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary">
                                            Merch
                                        </a>
                                    </div>
                                    <div className=" col-lg-2 h5 my-auto">
                                        <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/reviews">
                                            Reviews
                                        </a>
                                    </div>
                                    <div className=" col-lg-2 h5 my-auto">
                                        <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/about">
                                            About Us
                                        </a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="d-lg-none container justify-content-center">
                    <FontAwesomeIcon icon={props.menu ? faChevronUp : faChevronDown} className="h2 text-light text-shadow-orange hover-secondary nav-link-custom mx-2 px-2 my-0 py-0" onClick={() => {
                        props.setMenu(props.menu ? false : true); console.log(props.menu)
                    }} />
                </div>
                <div className={"w-100 " + (props.loggedIn ? "d-block" : "d-none")}>
                    <p className="text-shadow-orange w-100 m-0 text-light h4 text-center mb-2">
                        Welcome User!
                    </p>
                </div>
            </nav>
        </div>
    );
}
export default TopNav;