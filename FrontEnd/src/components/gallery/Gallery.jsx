// React components
import { useEffect } from 'react'
import Feed from "react-instagram-authless-feed"




const Gallery = props => {

    useEffect(() => {
        fetch("https://api.instagram.com/oauth/authorize?client_id=2252540041584628&redirect_uri=https://localhost:3000/gallery&scope=user_profile,user_media&response_type=code")
            .then((res) => console.log(res))
    }, [])

    return (
        // <div className="d-flex flex-column justify-content-center big-height">
        //     <div className="card text-center w-85 mx-auto">
        //         <div className="card-body">
        //             <div className="card-title display-2">
        //                 <div class="powr-instagram-feed" id="eb59ab53_1661654351"></div>

        //             </div>
        //         </div>
        //     </div>
        // </div >
        // <InstagramFeed token="your_access_token" counter="6" />
        <></>
    )
}
export default Gallery