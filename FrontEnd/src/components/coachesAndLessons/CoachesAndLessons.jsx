// React components

// Css
import './coachesAndLessons.css'


const CoachesAndLessons = props => {

    let lessons = [];
    for (let i = 0; i < 6; i++)
        lessons.push(

            <a href="#">
                <div className="lesson-card  h-100 position-relative d-flex flex-column justify-content-end">
                    <div
                        // style={"background:url('../static/img/lessons/Stall-graceville.jpg') no-repeat; background-size: cover;"}
                        className="h-100 lesson-card-image rounded-top">

                    </div>
                    <div className="bg-light rounded-bottom px-1 text-dark text-center">
                        <h5 className="card-title lesson-card-title ">Beginner Court Lesson</h5>
                        <hr className="hr-tertiary w-85" />
                        <h5 className="card-title lesson-card-price">$20</h5>

                    </div>
                    {/* <!-- <hr className="hr-tertiary">
                                                <p className="intro-text">Ideal for children that have just started roller skating. They will learn
                                                    the basic fundamentals of skating including rolling forwards, backwards, stopping, turning,
                                                    jumping and falling safely. Lessons are fun and enjoyable through a series of games, musical
                                                    enjoyment, friendship building and skill development.</p> --> */}

                </div>
            </a>
        )

    return (
        <div><div className="justify-content-center my-4" id="meet-the-team">
            <div className="bg-light w-85 rounded mx-auto shadow d-flex justify-content-around">
                <p className="card-title-custom text-center"><span className="font-italic"> Our enthusiastic coaches dedicated
                    to
                    helping you achieve your goals.
                </span></p>
            </div>
            <div id="meet-the-team-container" className="w-85 justify-content-between mx-auto">
                <div className="bg-light  shadow d-flex mt-4 rounded coach-card-custom">

                    <div className="card-content">
                        <div className="card-header-wrapper justify-content-center">
                            <div className="card-title-wrapper d-flex flex-column">
                                <img src="../static/img/branding/Coaches/Paige.jpg"
                                    className="rounded img-fluid meet-card-img mx-auto" />
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="mt-3 text-center">Paige Maguire</h3>
                            <hr className="hr-tertiary" />
                            <p className="intro-text">Hey there, I'm Coach Paige! Coaching is a true passion of mine and I have
                                been a
                                gymnastics coach for over 6 years, training those as young as 18 months to 75+ years old.
                                Other classNamees I teach include parkour, artistic gymnastics and acrobatics. I am also trained
                                in first aid.
                                I have been roller skating for over 2 years and love to skate at the park. My favourite move
                                is cartwheeling into a ramp and exiting with handstands.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-light shadow d-flex mt-4 rounded coach-card-custom">
                    <div className="card-content">
                        <div className="card-header-wrapper justify-content-center">
                            <div className="card-title-wrapper d-flex flex-column">
                                <img src="../static/img/branding/Coaches/Layla.jpg" alt="Layla doing a trick"
                                    className="rounded img-fluid meet-card-img mx-auto w-100"></img>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="mt-3 text-center">Layla Anderson</h3>
                            <hr className="hr-tertiary" />
                            <p className="intro-text">
                                Hello, I'm Coach Layla! I found my passion for roller skating over a year ago and love
                                coaching our beginners! Skating has significantly improved my confidence and my overall
                                wellbeing. I love the adrenaline of nailing new tricks and seeing myself progress. I am
                                bubbly, energetic, love working with children and get great fulfilment seeing them progress!
                                My favourite skill is spinning, and at the skate park I love to stall on the coping!

                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-light shadow d-flex mt-4 rounded coach-card-custom">
                    <div className="card-content">
                        <div className="card-header-wrapper justify-content-center">
                            <div className="card-title-wrapper d-flex flex-column">

                                <img src="../static/img/branding/Coaches/Hamish.jpg"
                                    className=" rounded img-fluid meet-card-img mx-auto" />




                            </div>


                        </div>
                        <div className="p-4">
                            <h3 className="mt-3 text-center">Hamish Maguire</h3>
                            <hr className="hr-tertiary"></hr>
                            <p className="intro-text">
                                Hey, I’m Hamish! Come to me for all of your questions and concerns. You won’t be seeing me
                                wearing any skates but I will be there next to you with an open hand and the encouragement
                                to help you progress!
                                You will find me setting up all the games, band-aiding the scraped knees, and keeping the
                                kids upright and calm. I really enjoy working with children and always wear a smile. I will
                                do my very best to keep everyone skating safe and having fun.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div id="lessons" className="">
                {/* <!-- <div className="w-85 mx-auto text-center">
                    <p className="card-title-custom"><span className="font-italic"> Book a Lesson
                    </span></p>
                    <hr className="hr-tertiary">
                </div> --> */}

                <div className="mx-auto py-3" id="lesson-group-card-holder">

                    <div className="row  w-85 mx-auto">
                        {
                            lessons.map(lesson =>
                                <div className="d-inline-block col-lg-3 position-relative h-45 lesson-card-shell my-3" key={lessons.indexOf(lesson)}>
                                    {lesson}
                                </ div>
                            )
                        }
                    </div>

                    {/* <!-- <div className="card my-2 p-2 d-inline-block  lesson-card">
                        <div className="card-body">
                            <h5 className="card-title lesson-card-title">Intermediate and Advanced Court Lesson</h5>
                            <h5 className="card-title lesson-card-price">$20</h5>
                            <hr className="hr-tertiary">
                                <p className="intro-text">Ideal for those that can skate forward confidently but want to advance
                                    their skills. You will learn to skate in many different variations including backwards,
                                    cross overs and zig zags. You will also learn a variety of turns, spins, jumps and basic
                                    dance skating moves. These classNamees include confidence building, games and thorough skill
                                    progressions. </p>

                        </div>
                    </div>



                    <div className="card my-2 p-2 d-inline-block  lesson-card">
                        <div className="card-body">
                            <h5 className="card-title lesson-card-title">Adult Court</h5>
                            <h5 className="card-title lesson-card-price">$20</h5>
                            <hr className="hr-tertiary">
                                <p className="intro-text">This className is suited to all adults and skills are tailored to all the
                                    individuals within the group. We offer a fun form of exercise, games and skill development.
                                    Let us know what you want to learn, and we will teach you!
                                </p>

                        </div>
                    </div>


                    <div className="card my-2 p-2 d-inline-block  lesson-card">
                        <div className="card-body">
                            <h5 className="card-title lesson-card-title">Skate Park</h5>
                            <h5 className="card-title lesson-card-price">$30</h5>
                            <hr className="hr-tertiary">
                                <p className="intro-text">For those that are confident in skating forwards, backwards and have good
                                    balance. Learn the basics of dropping-in, skate park safety, and jumping. We will progress
                                    you to harder skills as you become more confident including stalls, cabbies, and carving. We
                                    also make sure to include tips for handling fear and anxiety. Confidence building is our
                                    strong suit!</p>

                        </div>
                    </div>

                    <div className="card my-2 p-2 d-inline-block  lesson-card">
                        <div className="card-body">
                            <h4 className="card-title lesson-card-title">Private Lessons</h5>
                            <h5 className="card-title lesson-card-price">$40 Court <br> $45 Skate Park</h5>
                            <hr className="hr-tertiary">
                                <p className="intro-text">We offer private lessons for court and skate park. Days, times and
                                    locations can be negotiated with one of our coaches.

                                    If you wish to have a private lesson with your family or friends, there will be a
                                    discount
                                    depending on numbers.

                                    If you wish to attend a private skate park lesson, contact us and let us find a park
                                    that
                                    will be well suited to your skill level!


                                </p>
                        </div>
                    </div> --> */}

                </div>

            </div>
        </div>
    );
}

export default CoachesAndLessons