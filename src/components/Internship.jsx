import React from 'react'
import {Carousel} from "react-responsive-carousel";
import img1 from "../assets/5.jpg";
import img2 from "../assets/6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Internship = () => {
  return (
    <>  <div className='internship'>
            <div>
                <h1>Internship</h1>
                <p>I participated and successfully completed an internship with Rinex in association with E-cell IIT Kharagpur</p>
            </div>
        </div>
        <div className='information'>
            <Carousel 
            infiniteLoop
            autoPlay 
            // showStatus={false} 
            // showArrows={false}
            // showIndicators={false}
            // showThumbs={false}
            // interval={4000}
            showStatus={true} 
            showArrows={true}
            showIndicators={true}
            showThumbs={true}
            interval={4000}
            >
                <div>
                    <img src={img2} alt='Item2'/>
                    <p className='legend'>InternshipCertificate</p>
                </div>

                <div>
                    <img src={img1} alt='Item1'/>
                    <p className='legend'>Certificate of course completion</p>
                </div>

            </Carousel>
        </div>
    </>
  )
}
export default Internship;
