import React, { useState, useEffect, useCallback } from 'react';

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
  
  document.querySelectorAll('.project-image').forEach(image => {
    let frame;

    const handleMouseMove = (e) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            const { left, top, width, height } = e.target.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const tiltX = (y - 0.5) * 20;
            const tiltY = (0.5 - x) * 20;

            e.target.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

            const shadowX = tiltY * 1.5;
            const shadowY = tiltX * 1.5;
            e.target.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.5)`;
        });
    };

    image.addEventListener('mousemove', handleMouseMove);

    image.addEventListener('mouseleave', (e) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        
        e.target.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease-out';
        e.target.style.transform = 'none';
        e.target.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.5)';
    });

    image.addEventListener('mouseenter', (e) => {
        e.target.style.transition = 'none';
    });
});




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
          <a href={projects[0].links.find(link => link.type === "app").url} target="_blank" rel="noopener noreferrer">
            <img src={projects[0].image} alt="Kindr website link" className="project-image link-icon" />
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


