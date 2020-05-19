import React from 'react'
import photo1 from '../img/avatar-anisha.png'
import photo2 from '../img/avatar-ali.png'
import photo3 from '../img/avatar-richard.png'
import photo4 from '../img/avatar-shanai.png'



const Page3 = () => {
    return (
        <div className="page3__container">
            <div className="page3__box">
                <img src={photo1} alt=""/>
                <div className="page3__cont">
                    <h2>Anisha Li</h2>
                    <p>“Manage has supercharged our team’s workflow. The <br/> ability to maintain visibility on larger milestones at all times <br/> keeps everyone motivated.”</p>
                </div>
            </div>
            <div className="page3__box">
                <img src={photo2} alt=""/>
                <div className="page3__cont">
                    <h2>Ali Bravo</h2>
                    <p>
                    “We have been able to cancel so many other subscriptions <br/> since using Manage. There is no more cross-channel <br/> confusion and everyone is much more focused.”
                    </p>
                </div>
            </div>


            <div className="page3__box">
                <img src={photo3} alt=""/>
                <div className="page3__cont">
                    <h2>Richard Watts </h2>
                    <p>
                    “Manage allows us to provide structure and process. It <br/> keeps us organized and focused. I can’t stop recommending <br/> them to everyone I talk to!”
                    </p>
                </div>
            </div>
            <div className="page3__box">
                <img src={photo4} alt=""/>
                <div className="page3__cont">
                    <h2>Shanai Gough</h2>
                    <p>
                    “Their software allows us to track, manage and collaborate <br/> on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Page3
