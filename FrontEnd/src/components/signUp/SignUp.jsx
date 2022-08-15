// React components



const SignUp = props => {


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="d-flex flex-column justify-content-center big-height">
            <div className="card text-center w-85 mx-auto">
                <div className="card-body">
                    <div className="card-title display-4">
                        <p className="card-title-custom text-center">
                            <span className="font-italic">
                                Sign Up
                            </span>
                        </p>
                    </div>
                    <div className="lead">
                        After signing up and logging in, you can add skaters to your profile in the profile tab
                    </div>
                    <hr className="hr-tertiary w-90 mx-auto" />
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="form-group">
                            <div className="row w-75 mx-auto my-2">
                                <label htmlFor="userName" className="col-md-3">Username:</label>
                                <input type="text" name="userName" className="form-control col" />
                                <label className="col-md-3"></label>

                            </div>
                            <div className="row w-75 mx-auto my-2">
                                <label htmlFor="contact" className="col-md-3">Contact Number:</label>
                                <input type="number" name="contact" className="form-control col" />
                                <label className="col-md-3"></label>

                            </div>
                            <div className="row w-75 mx-auto my-2">
                                <label htmlFor="email" className="col-md-3">Email Address:</label>
                                <input type="email" name="email" className="form-control col" />
                                <label className="col-md-3"></label>
                            </div>
                            <div className="row w-75 mx-auto my-2">
                                <label htmlFor="password" className="col-md-3">Password:</label>
                                <input type="password" name="password" className="form-control col" />
                                <label className="col-md-3"></label>

                            </div>
                            <div className="row w-75 mx-auto my-2">
                                <label htmlFor="checkPassword" className="col-md-3">Check Password:</label>
                                <input type="password" name="checkPassword" className="form-control col" />
                                <label className="col-md-3"></label>

                            </div>
                            <div className="row w-75 mx-auto my-2">
                                <button className="btn custom-btn w-50 mx-auto" type="submit">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SignUp