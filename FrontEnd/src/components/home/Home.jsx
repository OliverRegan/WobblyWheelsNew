// React components and other
import { useEffect, useState } from 'react'

// Import css
import "../../assets/css/utility.css";
import "./home.css"

const Home = props => {


    useEffect(() => {



    }, [])



    return (
        <div className='home-wrapper'>
            <div className="showcase-wrapper">
                <div id="showcase" className="w-100">
                    <div className="showcase-text">
                        <br></br>
                        <h1 >Learn How to Roller Skate</h1>
                        <br></br>
                        <h2 >Private and Group Classes in Graceville Brisbane</h2>
                        <br></br>
                        <div className="d-flex">
                            <a href="https://fb.com/book/wobblywheels.lessons/" className="my-3 w-10 btn mx-auto custom-btn"><span
                                className="h4">Book
                                Now</span> </a>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title display-4 text-center">
                            Updates:
                        </div>
                        <hr />
                        <div className="card-body lead">
                            <p>Welcome to our new website!</p>
                            <p>We've now got a few different things, we've split onto different pages to allow for more content and so everything just makes a bit more sense. We've now got a gallery for all of our skating action shots, our merch page is currently under construction, but soon you'll be able to order your merch packs straight from here! Soon you'll be able to book your classes here too, to get rid of all of that pesky facebook messaging!</p>
                            <p>See you all skating!</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home