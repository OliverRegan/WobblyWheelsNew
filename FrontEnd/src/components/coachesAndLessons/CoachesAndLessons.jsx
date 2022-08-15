// React components


// Components
import Coaches from "./coaches/Coaches"
import Lessons from "./lessons/Lessons"

// Css
import './coachesAndLessons.css'


const CoachesAndLessons = props => {


    return (
        <div>
            <div className="justify-content-center my-4" id="meet-the-team">
                <Coaches />
            </div>
            <div className="justify-content-center my-4" id="meet-the-team">
                <Lessons />
            </div>


        </div >
    );
}

export default CoachesAndLessons