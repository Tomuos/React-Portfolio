import React, { useState } from 'react';

import './MyProjects.css';

export const MyProjects = ({ className }) => {
    const [slideIndex, setSlideIndex] = useState(1);
   
  
    function moveSlide(n) {
      setSlideIndex((prevSlideIndex) => {
        let newIndex = prevSlideIndex + n;
        // Wrap slide index when out of bounds
        if (newIndex < 1) {
          newIndex = slides.length; // Go to the last slide
        } else if (newIndex > slides.length) {
          newIndex = 1; // Go back to the first slide
        }
        return newIndex;
      });
    }
    
    
  
    const slideIndexToShow = slideIndex - 1; // Adjust for array indexing
  
    const slides = [
      {
        image: "images/figjam1.png",
        alt: "Ben fishing",
        caption: "Fishing",
      },
      {
        image: "images/figjam2.png",
        alt: "Boys and ducks",
        caption: "Feeding time",
      },
      {
        image: "images/figma-mob.png",
        alt: "The boys in the woods",
        caption: "The woods",
      },
      {
        image: "images/figma-desk.png",
        alt: "Boys with sunflowers",
        caption: "Sunflowers",
      },
      {
        image: "images/team-JSON.png",
        alt: "Boys with sunflowers",
        caption: "Sunflowers",
      },
    ];


  const projects = [
    {
      id: "kindr",
      title: "Kindr",
      description: "I worked with a wonderful group of people at the School of Code to create a community-driven app called Kindr.",
      links: [
        { type: "github", url: "https://github.com/jsonandthearguments/kindr" },
        { type: "app", url: "https://kindr.netlify.app/" },
        { type: "presentation", url: "https://www.youtube.com/watch?v=Fc4mhUFAl10&ab_channel=percygr" }
      ],
      image: "images/bg1wb.png"
    }
    
  ];
  
 

  return (
    <section id="projects" className={className}>
      <div>
      <div className='project-container'>
      <div className="gradient-heading-container">
      <h1 className='gradient-heading' >Projects</h1>
      </div>
        <div className="motion-div">
          <p>{projects[0].description}</p>

          <a href={projects[0].links.find(link => link.type === "app").url} target="_blank" rel="noopener noreferrer">
            <img src={projects[0].image} alt="Kindr Logo" className="project-image link-icon" /> 
            Kindr Website
          </a>

        <p>Please take a look at the app the team and I worked on. Things I worked on were the navigation for mobile and pc responsiveness, FAQ page accordian to name a few.</p>
        <p>It was a team effort and I tended to work more on the frontend side of things as I enjoyed creating something that matched our Figma designs</p>
        <p>I learnt a lot from my team, and who knows maybe one day I'll convince them to collab again.</p>

        

          <div className="project-video-wrapper">
            <iframe 
              title="Kindr App Presentation"
              src="https://www.youtube.com/embed/Fc4mhUFAl10"
              className="project-video"
              allowFullScreen>
            </iframe>
            <p>Kindr App presentation</p>
          </div>
          
        </div>
          

          <a href={projects[0].links.find(link => link.type === "github").url} target="_blank" rel="noopener noreferrer" className="github-link">
          <span class="github-icon-wrapper">
          <img src="images/github.png" alt="GitHub Logo" style={{width: "150px"}}/> 
          </span>
            Link to the GitHub repo code
          </a>
      </div>
    </div>






    

      
    </section>
  );
};
