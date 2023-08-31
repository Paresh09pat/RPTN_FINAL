import React, { useState, useEffect } from "react";
import "./WWR.css";
import img1 from "../../Images/whoweImg1.png";


function WWR4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section className="wowe_section-four">
        <div className="who_we_test">
          <h2 className="who_we_h5" data-aos="fade-up" data-aos-duration="1000">
            Turning To An Eco-friendly And Sustainable Society
          </h2>
          <h1 className="who_we_h3" data-aos="fade-down" data-aos-duration="1000">
            OUR WORK INSPIRE US TO BUILD BETTER COMMUNITY
          </h1>
        </div>
        <div className="who_we_row row2">
          <div className="wowe_column1" data-aos="fade-right" data-aos-duration="1000">
            <p className="colpara" >
              Our main emphasize is on areas in which we can use RPTN's core
              knowledge and large staff base to develop long term solutions
              that are Sustainable. By emphasizing education , skills,
              entrepreurship and employment, we are able to assist
              indivisuals and communities in closing the opportunity gap and
              capitalising on the many resourses available. We devote our
              resourses to developing programmers for underserved areas. We
              integrate an inclusive approach into the design of each
              programmers to ensure that it meets the needs of women, youth
              etc. We have strong track record of success.
            </p>
          </div>
          <div className="wowe_2">
            <img src={img1} alt="img" className="wowe_2_img" data-aos="fade-left"
              data-aos-duration="1000" />
          </div>
        </div>
      </section>
    </>
  )
}

export default WWR4