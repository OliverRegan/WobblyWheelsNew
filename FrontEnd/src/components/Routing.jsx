// React & React components
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Layout from "./layout/Layout"
import Home from "./home/Home"
import CoachesAndLessons from './coachesAndLessons/CoachesAndLessons'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/coachesAndLessons' element={<CoachesAndLessons />} />
                </Route>
            </ Routes>
        </BrowserRouter >
    )
}
export default Routing