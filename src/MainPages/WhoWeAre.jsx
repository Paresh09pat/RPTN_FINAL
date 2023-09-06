import React, { useEffect, useState, useRef } from "react";
import WWR1 from '../Components/WhoWeAre/WWR1'
import WWR2 from '../Components/WhoWeAre/WWR2'
import WWR3 from '../Components/WhoWeAre/WWR3'
import WWR4 from '../Components/WhoWeAre/WWR4'
import WWR5 from '../Components/WhoWeAre/WWR5'

function WhoWeAre() {
  const sections = [
    { id: "career_page1 section1", component: <WWR1 />, ref: React.createRef() },
    { id: "career_page2 section2", component: <WWR2 />, ref: React.createRef() },
    { id: "career_page3 section3", component: <WWR3 />, ref: React.createRef() },
    { id: "career_page4 section4", component: <WWR4 />, ref: React.createRef() },
    { id: "career_page5 section5", component: <WWR5 />, ref: React.createRef() },


  ];
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef();
  const [isCarouselInteracting, setIsCarouselInteracting] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const isDesktopOrLaptop = window.innerWidth >= 1024;

    if (isDesktopOrLaptop) {
      document.body.style.overflow = "hidden";

      const handleScroll = () => {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom = containerTop + containerRef.current.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.3;

        for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].ref.current.offsetTop;
          const sectionBottom = sectionTop + sections[i].ref.current.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(i);
            break;
          }
        }

        if (scrollPosition < containerTop) {
          setCurrentSection(0);
        } else if (scrollPosition >= containerBottom - window.innerHeight) {
          setCurrentSection(sections.length - 1);
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (currentSection < sections.length - 1) {
            scrollToNextSection();
          } else {
            scrollToFooter();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (currentSection > 0) {
            scrollToPrevSection();
          }
        }
      };

      const handleWheelScroll = (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        const deltaMode = e.deltaMode;
        let scrollFactor;

        if (deltaMode === 0) {
          scrollFactor = 0.2;
        } else if (deltaMode === 1) {
          scrollFactor = 1;
        } else if (deltaMode === 1) {
          scrollFactor = 0;
        }

        const scrollDistance = delta * scrollFactor;

        if (scrollDistance > 0) {
          if (currentSection < sections.length - 1 && !isCarouselInteracting) {
            setIsCarouselInteracting(true);
            scrollToNextSection();
          } else if (currentSection === sections.length - 1 && !isCarouselInteracting) {
            setIsCarouselInteracting(true);
            const footerSection = document.getElementById("footer");
            footerSection.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
              setIsCarouselInteracting(false);
            }, 1000);
          }
        } else {
          if (currentSection > 0 && !isCarouselInteracting) {
            setIsCarouselInteracting(true);
            scrollToPrevSection();
          }
        }
      };

      const handleCarouselInteractionStart = () => {
        setIsCarouselInteracting(true);
      };

      const handleCarouselInteractionEnd = () => {
        setIsCarouselInteracting(false);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheelScroll);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleWheelScroll);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [sections]);

  const scrollToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
      sections[currentSection + 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      const footerSection = document.getElementById("footer");
      footerSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 1000);
  };

  const scrollToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
      sections[currentSection - 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setCurrentSection(sections.length - 1);
      sections[sections.length - 1].ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 800);
  };

  const scrollToFooter = () => {
    const footerSection = document.getElementById("footer");
    footerSection.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setIsCarouselInteracting(false);
    }, 1000);
  };

  return (
    <div className="career_container">
      <div className="career_content" ref={containerRef}>
        {sections.map((section) => (
          <div key={section.id} ref={section.ref} className="section">
            {section.component}
          </div>
        ))}
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default WhoWeAre
