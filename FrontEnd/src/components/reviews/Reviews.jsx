// React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as outlineStar } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect, startTransition } from 'react'


// Css
import "./reviews.css"

let headers = new Headers();

headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json')

const Reviews = props => {

    // Fetch reviews info from back end
    const [reviews, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    let reviewText;


    useEffect(() => {



        fetch("http://localhost:3001/reviews", {
            method: 'GET',
            headers: headers
        })
            .then((res) => {
                res.json().then((data) => ({
                    data: data,
                    status: res.status
                })).then(response => {
                    setReviews(response.data)
                }).finally(() => {
                    setReviewsLoading(false)
                })
            })
    }, [])

    console.log(reviews);


    // Stars function
    function stars(numStars) {
        let empty = 5 - numStars;
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < numStars) {
                stars.push(<FontAwesomeIcon icon={solidStar} />)
            } else {
                stars.push(<FontAwesomeIcon icon={outlineStar} />)
            }
        }
        return stars;
    }

    function changeReviewStars(event, index) {
        let newStars = [{ 'index': 0, 'icon': solidStar }, { 'index': 1, 'icon': solidStar }, { 'index': 2, 'icon': solidStar }, { 'index': 3, 'icon': solidStar }, { 'index': 4, 'icon': solidStar },];
        for (let i = 4; i >= index + 1; i--) {
            newStars[i].icon = outlineStar;
        }
        props.setReviewStars(newStars)

    }

    const handleSubmit = async (event) => {

        let count = 0;
        let text = event.target.elements["reviewText"].value;

        // Get number of start
        for (let i = 0; i < props.reviewStars.length; i++) {
            if (props.reviewStars[i].icon === solidStar) {
                count++;
            }
        }

        let body = {
            // Temp
            "userId": 1,
            "bodyText": text,
            "stars": count
        }

        // Send review data
        // ADD AUTHENTICATION
        fetch("http://localhost:3001/reviews", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }).then((res) => {
            res.json()
        })


        console.log(count)
    }


    return (
        <div style={{ "minHeight": "65vh" }} className="my-4">
            <div className="bg-light w-65 rounded mx-auto shadow justify-content-around">
                <p className="card-title-custom text-center"><span className="font-italic"> Why our skaters love coming back <span className='text-main'><FontAwesomeIcon icon={faHeart} /></span>
                </span></p>
            </div>
            <div className="bg-light w-65 rounded mx-auto shadow justify-content-around py-2">
                <p className="h4 text-center"><span className="font-italic"> Leave a review:
                </span></p>
                <hr className="hr-tertiary w-80 mx-auto" />
                <form onSubmit={handleSubmit} className='form-group w-80 mx-auto text-center'>
                    <div className='h3 text-center'>
                        {
                            props.reviewStars.map((star) => {
                                return (
                                    <FontAwesomeIcon icon={star.icon} onClick={(event) => { changeReviewStars(event, star.index) }} className="choose-stars" key={star.index} />
                                )
                            })
                        }
                    </div>
                    <input type="text" placeholder="Leave your review here!" className='form-control mx-auto' id={reviewText} name="reviewText" />
                    <button className='btn custom-btn w-60 btn-dark mt-4'>Submit</button>
                </form>
            </div>
            <div className="w-65 mx-auto row justify-content-center my-3">

                {reviewsLoading ?
                    <div className="bg-light w-65 rounded mx-auto shadow justify-content-around">
                        <p className="card-title-custom text-center"><span className="font-italic"> Loading...
                        </span></p>
                    </div>
                    :
                    reviews.map((review) => {
                        return (
                            <div className="review my-1 card col-md-5 mx-1" key={review.reviewId}>
                                <div className="d-flex flex-column text-center mt-3">
                                    <div className="h4">
                                        {review.reviewUserName}
                                    </div>
                                    <div className="lead">
                                        {review.reviewDate}
                                    </div>
                                    <div className="mt-3 lead text-main">
                                        {stars(review.reviewStars)}
                                    </div>
                                </div>
                                <hr className="hr-tertiary w-80 mx-auto" />
                                <div className="m-3 mt-0 text-center">
                                    {review.reviewText}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    )
}
export default Reviews