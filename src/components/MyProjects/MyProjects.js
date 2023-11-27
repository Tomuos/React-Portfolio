import React, { useState, useEffect, useCallback } from 'react';
import TiltComponent from '../../helpers/TiltComponent';
import './MyProjects.css';

export const MyProjects = ({ className }) => {
  const slides = [
    {
      image: "images/figjam1.png",
      alt: "Ben fishing",
      caption: "Figjam Team Planning Part 1",
    },
    {
      image: "images/figjam2.png",
      alt: "Boys and ducks",
      caption: "Figjam Team Planning Part 2",
    },
    {
      image: "images/figma-mob.png",
      alt: "The boys in the woods",
      caption: "Figma Mobile Designs",
    },
    {
      image: "images/figma-desk.png",
      alt: "Boys with sunflowers",
      caption: "Figma Desktop Designs",
    },
    {
      image: "images/team-JSON.png",
      alt: "Boys with sunflowers",
      caption: "Team JSON and the Arguments",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  // Function to move the slide
  const moveSlide = useCallback((n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setSlideIndex(newIndex);
  }, [slideIndex, slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      moveSlide(1); // Automatically move to the next slide
    }, 5000); // Change slide every 5000ms (5 seconds)
  
    return () => clearInterval(timer);
  }, [moveSlide, slideIndex]);
  
  




  // Define your 'projects' array here
  const projects = [
    {
      image: "images/kindr-website.png",
      links: [
        {
          type: "app",
          url: "https://kindr.netlify.app/",
        },
        {
          type: "github",
          url: "https://github.com/jsonandthearguments/kindr"},
      ],
    },
  ];

  return (
    <section id="projects" className={className}>
      <div className='project-container'>
        <div className="gradient-heading-container">
          <h1 className='gradient-heading'>Projects</h1>
        </div>

        <div id='my-projects' className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <img src={slide.image} alt={slide.alt} />
                <span>{slide.caption}</span>
              </div>
            ))}
          </div>
          <button className="slide-arrow prev-arrow" onClick={() => moveSlide(-1)}>&lt;</button>
          <button className="slide-arrow next-arrow" onClick={() => moveSlide(1)}>&gt;</button>
        </div>

        <p>Please take a look at the app the team and I worked on. Things I worked on were the navigation for mobile and pc responsiveness, FAQ page accordian to name a few.</p>
        <p>It was a team effort and I tended to work more on the frontend side of things as I enjoyed creating something that matched our Figma designs</p>
        <p>I learnt a lot from my team, and who knows maybe one day I'll convince them to collab again.</p>
        <div className="project-content">
          {/* <p>{slides[slideIndex].caption}</p> */}
          <a href='https://kindr.netlify.com' target="_blank" rel="noopener noreferrer">
            <TiltComponent 
              imageSrc={projects[0].image} 
              altText="Kindr website link"
            />
            <p className='mid-link'>⬆ Check out the app ⬆</p>
          </a>


          <div className="project-video-wrapper">
            <iframe
              title="Kindr App Presentation"
              src="https://www.youtube.com/embed/Fc4mhUFAl10"
              className="project-video"
              allowFullScreen
            ></iframe>
            
          </div>

          <a href={projects[0].links.find(link => link.type === "github").url} target="_blank" rel="noopener noreferrer" className="github-link">
            <span className="github-icon-wrapper">
              <img src="images/github.png" alt="GitHub Logo" style={{ width: "150px" }} />
            </span>
            Link to the GitHub repo code
          </a>
        </div>
      </div>
    </section>
  );
};


