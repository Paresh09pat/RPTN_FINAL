import React, { useState,useEffect } from "react";
import "./WWR.css";
import img1 from "../../Images/whoweImg1.png";
import img2 from "../../Images/whoweImg2.png";
import img3 from "../../Images/whoweImg3.png";


function WWR5() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      AOS.init()
    }, [])

    return (
        <>
           
  <div className="custom-section-five">
  <div className="custom-last">
    <div className="custom-betn">
      <h2 className="custom-last_para" data-aos="fade-down-left" data-aos-duration="1000">
        Our Approach
      </h2>
      <h1 className="custom-last_h4" data-aos="fade-down-right" data-aos-duration="1000">
        SOCIAL INNOVATION CREATE PROSPEROUS SOCIETY
      </h1>
    </div>
  </div>

  <div className="custom-container custom-who_we_container">
    <div className="custom-who_we_row custom-row custom-align-items-start1">
      <div className="custom-who_we_col custom-col" data-aos="fade-right" data-aos-duration="1000">
        <img className="imgWhoWe-1-flex" src={img2} alt="img" data-aos="fade-right" data-aos-duration="1000" />
      </div>
      <div className="custom-who_we_col custom-col custom-targetting" data-aos="fade-right" data-aos-duration="1000">
        <h5 className="custom-who_we_h5">
          TARGETING SOCIAL NEEDS IN A BETTER WAY THAN THE EXISTING SOLUTIONS
        </h5>
        <p className="custom-paragraph">
          Social innovation includes the social processes, such as open source methods and techniques, and also the innovation which have social purpose. Transformative social innovation not only introduces new approaches to seemingly intractable problems, but is successful in changing the social institutions that created the problem in the first place.
        </p>
      </div>
    </div>

    <div className="who_we_new_div" data-aos="flip-up" data-aos-duration="1000">
      
      <div className="custom-who_we_row custom-row custom-align-items-center1">
      
        <div className="custom-who_we_col custom-col" data-aos="flip-up" data-aos-duration="1000">
          <img className="custom-img1WhoWe" src={img1} alt="img" />
        </div>
        <div className="custom-who_we_col custom-col" data-aos="fade-left" data-aos-duration="1000">
          <h5 className="custom-who_we_h5">
            INNOVATION IMPACTS ON AGRICULTURE
          </h5>
          <p className="custom-attri">
            Social innovation includes the social processes of innovation, such as open source methods and techniques, and also the innovation which have a social purpose.
          </p>
        </div>
      </div>

      <div className="custom-who_we_row custom-row custom-align-items-center1">
        
        <div className="custom-who_we_col custom-col" data-aos="flip-up" data-aos-duration="1000">
          <img className="custom-img2WhoWe" src={img2} alt="" />
        </div>
        <div className="custom-who_we_col custom-col" data-aos="fade-left" data-aos-duration="1000">
          <h5 className="custom-who_we_h5">
            INNOVATION IMPACTS ON AGRICULTURE
          </h5>
          <p className="custom-attri">
            Social innovation includes the social processes of innovation, such as open source methods and techniques, and also the innovation which have a social purpose.
          </p>
        </div>
      </div>

      <div className="custom-who_we_row custom-row custom-align-items-center1">
       
        <div className="custom-who_we_col custom-col" data-aos="flip-up" data-aos-duration="1000">
          <img className="custom-img3WhoWe" src={img3} alt="img" />
        </div>
        <div className="custom-who_we_col custom-col" data-aos="fade-left" data-aos-duration="1000">
          <h5 className="custom-who_we_h5">
            INNOVATION IMPACTS ON AGRICULTURE
          </h5>
          <p className="custom-attri">
            Social innovation includes the social processes of innovation, such as open source methods and techniques, and also the innovation which have a social purpose.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default WWR5