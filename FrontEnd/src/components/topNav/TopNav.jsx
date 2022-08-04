// React components

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

    return (
        <div id="header-and-showcase-container">
            <nav className="navbar bg-main sticky-top row justify-content-around w-100 m-0 p-0">
                <div id="brand-bar" className="col-xxl-4 text-center w-100">
                    <a href="/" id="top-brand" className="logo">
                        <img src={logo} alt="Logo"
                            id="top-brand" className="desktop-logo"></img>
                    </a>
                </div>
                <div className="col-xxl-7 text-center sticky-top">
                    <div className="container">
                        <div className={"mr-auto mt-2 mt-lg-0 w-100 row " + (props.menu ? "" : "d-none")}>

                            <div className=" col-lg-2 h2 my-auto">
                                <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                    href="/coachesAndLessons">
                                    Coaches & Lessons
                                </a>
                            </div>

                            <div className=" col-lg-2 h2 my-auto">
                                <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/gallery">
                                    Gallery
                                </a>
                            </div>
                            <div className=" col-lg-2 h2 my-auto">
                                <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary"
                                    href="/bookingAndContact">
                                    Booking & Contact
                                </a>
                            </div>
                            <div className=" col-lg-2 h2 my-auto">
                                <a href="/merch" className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary">
                                    Merch
                                </a>
                            </div>
                            <div className=" col-lg-2 h2 my-auto">
                                <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/reviews">
                                    Reviews
                                </a>
                            </div>
                            <div className=" col-lg-2 h2 my-auto">
                                <a className="text-shadow-orange w-100 m-0 nav-link-custom hover-secondary" href="/about">
                                    About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container justify-content-center">
                    <FontAwesomeIcon icon={props.menu ? faChevronUp : faChevronDown} className="h2 text-light text-shadow-orange hover-secondary nav-link-custom m-2 p-2" onClick={() => { props.setMenu(props.menu ? false : true); console.log(props.menu) }} />
                </div>
            </nav>
        </div>
    );
}
export default TopNav;