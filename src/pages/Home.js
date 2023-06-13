import React, { useEffect, useState } from "react"; 
import ProfileImage from 'C:/Backup-Hanuraag/Projects/blogapp/src/images/Passport_Photo.JPG'
import '../styles/Home.css'

const Home=()=>{
    const[showFadeIn, setShowFadein]=useState(false)
    const[showSlideIn, setShowSlideIn]=useState(false)
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const timer= setTimeout(() => {
          setShowPage(true);
        }, 200);
        return () =>clearTimeout(timer);
      }, []);

    useEffect(() => {
    if (showPage) {
        const fadeInTimeout = setTimeout(() => {
            setShowFadein(true);
        },500);

        const slideInTimeout = setTimeout(() => {
        setShowSlideIn(true);
        });

        return () => {
        clearTimeout(fadeInTimeout);
        clearTimeout(slideInTimeout);
        };
    }
    }, [showPage]);

    if (!showPage) {
    return null; // Display a blank page until the content is ready
    }



    return(
        <div className={`custom-container ${showPage ? 'show' : ''}`}>
             <div className="row">
                <div className={`col-md-6 d-flex justify-content-center align-items-center mt-5 ${showSlideIn ? 'slide-in' : ''} `}>
                    <img src={ProfileImage} alt='Profile' className="img-fluid rounded-circle custom-rounded-circle"/>
                </div>
                <div className={`col-md-6 d-flex justify-content-left align-items-center custom-column-2  ${showPage ? 'show' : ''} ${showFadeIn ? 'fade-in': ''}`}>
                    <div>
                        <h3>Hello There</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home