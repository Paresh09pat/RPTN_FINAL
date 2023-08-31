import React, { useState, useEffect } from "react";
import "./WWR.css";
import { Link } from 'react-scroll';


function WWR3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section className="wowe_section-three">
        <div className="who_we_head1">
          <div className="who_we_headings">
            <h2 className="who_we_head1_para">
              <span className="wowe_p1" data-aos="fade-right" data-aos-duration="1000"> Our Social Responsibilities</span>
            </h2>
            <h3 className="creating-good-change">
              <span className="wowe_p2" data-aos="fade-left" data-aos-duration="1000">
                CREATING GOOD CHANGE, EXPERIENCING EACH MOMENT , AND INSPIRING
                EVERYONE TO RISE.
              </span>
            </h3>

          </div>
        </div>
        <div className="who_we_col0 col ">
          <div className="who_we_row row">
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
          </div>
          <div className="who_we_row row">
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
            <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
              <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
              <br />
              <p className="who_we_column_h4_text">
                The RPTN group has extensive expertise as a Sustainability
                leader, and can assist organisation with fiding methods to
                minimise waste, save resourses, and decrease their total
                carbon footprint, allowing them to transition to a more
                Sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default WWR3