import React, { useEffect, useState } from "react";
import "./Career.css";
import img1 from "../../Images/number2.png";

function Career2() {

  useEffect(() => {
    AOS.init();
  });
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(20);
  const [data2, setData2] = useState(30);
  const [data3, setData3] = useState(40);
  const handleRangeChange = (value, setDataFunction) => {
    setDataFunction(value);
    const percentageScrolled = (value / 100) * 100; // Adjust as needed based on your range values
    const trackBackgroundColor = `linear-gradient(to right, blue 0%, blue ${percentageScrolled}%, #ccc ${percentageScrolled}%, #ccc 100%)`;
    document.querySelector(".custom-range::-webkit-slider-runnable-track").style.background = trackBackgroundColor;
    document.querySelector(".range-container").style.background = trackBackgroundColor;
  };
  return (
    <>
      <div className="Career_part2">
        <div className="Career-section2">
          <div className="Career-section2_wrapper">
            <div data-aos="fade-up-right">
              <img src={img1} alt="img1" className="Career-icon1" />
              <h1 id="imghead">YEARS OF EXPERIENCE IN IT</h1>
            </div>
            <center data-aos="fade-up-left">
              <h1 className="imghead_more">
                LEARN MORE ABOUT OUR SUCCESS STORIES
              </h1>
            </center>
          </div>
        </div>
        <div className="carrer_box" data-aos="zoom-in">
          <div className="progress-section">
            <div className="container">
              <h2 className="progress_sec_h2">SOCIAL PROBLEM STUDY</h2>
              <input type="range" min='0' max='100' step='5' style={{ color: "blue" }} value={data} onChange={(e) => setData(e.target.value)} />
              {/* <div className="pr1">
                <div className="progress-bar">
                  <div className="progress1"></div>
                </div>
                <span className="dot1"></span>
              </div> */}
              <h2 className="progress_sec_h2">MARKET STUDY</h2>
              <input type="range" min='0' max='100' step='5' value={data1} onChange={(e) => setData1(e.target.value)} />
              {/* <div className="pr2">
                <div className="progress-bar">
                  <div className="progress2"></div>
                </div> */}

              {/* <span className="dot2"></span> */}
              {/* </div> */}

              <h2 className="progress_sec_h2">YOUTH DEVELOPMENT</h2>
              <input type="range" min='0' max='100' step='5' value={data2} onChange={(e) => setData2(e.target.value)} />
              {/* <div className="pr3">
                <div className="progress-bar">
                  <div className="progress3"></div>
                </div> */}
              {/* <span className="dot3"></span> */}
              {/* </div> */}

              <h2 className="progress_sec_h2">EDUCATIONAL STUDY </h2>
              <input type="range" min='0' max='100' step='5' value={data3} onChange={(e) => setData3(e.target.value)} />
              {/* <div className="pr4">
                <div className="progress-bar">
                  <div className="progress4"></div>
                </div> */}
              {/* <span className="dot4"></span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Career2