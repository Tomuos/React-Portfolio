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
        <p>Here are some of the projects I have worked on.</p>
        <h2>Kindr</h2>
        <p>Tech Stack: React, React-Router, Supabase and netlify</p>
        <p>Kindr is a community driven app where you can ask for help or offer help in your community. The idea is bringing people together to make a kinder and better community</p>
        <p>You'll see some images below of the figjam where we came up with the idea, some of the Figma designs for desktop and mobile and of course a Team photo of Paul, Naomi, Bryony, Christan, James and myself "Jason and the Arguments". </p>

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

        <p>I was more frontend support on this app. Some of the areas I worked on were the navbar for mobile (burger menu) and desktop responsiveness, FAQ page accordian for hiding walls and various other bits and pieces.</p>
        <p>As part of the frontend team we put a lot of effort into the designs on figma click <a  href='https://www.figma.com/file/AhRjaYy49cudHAV8tdzgoH/Json-and-the-Arguments-Hi-fi-Wireframes?type=design&node-id=95-597&mode=design&t=35NR6a1BEA1WhpyJ-0'>here</a> to see them </p>
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

              
                      {/* this is where i want to add my other project word constructor it will have figma images perhaps i should add another slider*/}
                      <h2>Word Constructor</h2>

                      {/* i would like to add a slider here too  */}
               
                
                <p>Word Constructor is a game where you have to guess the word by selecting letters from the alphabet. Luckily there are some helpful images for you work out what the word is. I made this game for my Son who struggles with his reading but I found when I could turn anything he found difficult into a game he really enjoyed it</p>
                <p>The original design was to include sound but for now it can wait</p>
                
                <a href='https://word-constructor.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <TiltComponent 
                    imageSrc={"images/Word-con.png"} 
                    altText="Word Constructor link"
                  />
                  <p className='mid-link'>⬆ Word Constructor Demo ⬆</p>
                </a>

                <p> No mobile functionality currently as I couldn't get touch support to work with it. It uses <a href='https://react-dnd.github.io/react-dnd/about'>React-dnd</a> which is a drag and drop library for doing exactly that.</p>
                
                <p>I was surprised how quickly my son understood what to do, he did try to use the keyboard at one point to I've added some keyboard support so if you click on the empty slots you could type instead.</p>

                <p></p>


      </div>



    </section>
  );
};


