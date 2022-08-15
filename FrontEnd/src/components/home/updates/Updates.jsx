// Import react components
import { useState, useEffect } from 'react'

// CSS
import "./updates.css"

function hasImage(update) {
    if (update.updatePicture !== "") {
        return (
            <div className="w-100 mx-auto ">
                <img src={require("../../../assets/img/branding/Updates/" + update.updatePicture)} className="img-fluid overflow-hidden  rounded" height={"100%"} />
            </div>
        )
    }
}


const Updates = props => {

    // Fetch coach info from back end
    const [updates, setUpdates] = useState([])


    useEffect(() => {

        let headers = new Headers();
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')

        fetch("http://localhost:3001/updates", {
            method: 'GET',
            headers: headers
        })
            .then((res) => {
                res.json().then((data) => ({
                    data: data,
                    status: res.status
                })).then(response => {
                    // Reverse data for oldest at the bottom
                    setUpdates((response.data).reverse())
                })
            })
    }, [])


    return (
        <div className="container my-3">
            <div className="bg-light rounded mx-auto shadow d-flex justify-content-around">
                <p className="card-title-custom text-center"><span className="font-italic">Updates
                </span></p>
            </div>
            {
                updates.map(update => {
                    return (
                        <div className='d-flex' key={update.updateId}>
                            <div className="card my-3 d-flex m-0">
                                <div className='img-mobile'>
                                    {hasImage(update)}
                                </div>
                                <div className={"card-body d-flex p-0"}>
                                    <div className=''>
                                        <hr />
                                        <div className="card-body lead d-flex">
                                            <div className=''>
                                                <p className='h3 font-italic'>
                                                    {update.updateTitle}
                                                </p>
                                                <p>
                                                    {update.updateText}
                                                </p>
                                                <div className="d-flex">
                                                    {update.updateBookButton > 0 ? (<a href="/bookingAndContact" className="my-3 btn custom-btn w-100"><span
                                                        className="h4">Book
                                                        Now</span> </a>) : <div></div>}

                                                </div>
                                            </div>

                                        </div>
                                        <hr />
                                    </div>
                                    <div className=' img-desktop d-flex flex-column justify-content-center h-100'>
                                        {hasImage(update)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Updates