import React from 'react';

import './MyProjects.css';

export const MyProjects = ({ className }) => {
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
        <p>I learnt a lot from my team, Bryony was a graphic designer and it really showed when were coming up with designs for the app. Naomi was happy to get stuck into front end</p>


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
