import React, { useState, useEffect } from 'react';
import './AboutMe.css';

export const AboutMe = () => {
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
      image: "images/benFishing.jpg",
      alt: "Ben fishing",
      caption: "Fishing",
    },
    {
      image: "images/ducks.jpg",
      alt: "Boys and ducks",
      caption: "Feeding time",
    },
    {
      image: "images/theBoys.jpg",
      alt: "The boys in the woods",
      caption: "The woods",
    },
    {
      image: "images/sunflowerBoys.jpg",
      alt: "Boys with sunflowers",
      caption: "Sunflowers",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((currentSlideIndex) => {
        return currentSlideIndex === slides.length ? 1 : currentSlideIndex + 1;
      });
    }, 5000); // Change slide every 5000ms (5 seconds)
  
    return () => clearInterval(timer);
  }, [slides.length]); // Add slides.length to the dependency array
  

  return (
    <section id="about" className="hidden">
      <div className="content">
        <div id="about-me" className="about-me-section">
          <div className="gradient-heading-container">
            <h1 className="gradient-heading">About Me</h1>
          </div>

          <div className="about-me-content">
            <div className="about-me-image">
              <img src="/images/Tom.jpg" alt="Tom" className="cover-image" />
            </div>

            <p>
              Hello, I'm Tom! I'm a developer with a focus on front-end technologies like React, HTML, and CSS.
              I have a deep-rooted passion for coding and love taking on new challenges to expand my skill set.
            </p>

            <p>
              I'm currently looking for new job opportunities where I can bring my unique blend of skills and
              passion to a forward-thinking company.
            </p>
          </div>
        

        <h3>Coder & Tech Enthusiast 💻</h3>
        <p>
          I'm a full-stack developer with a passion for creating beautiful, functional and accessible web applications. I have a keen interest in the latest technologies and enjoy learning new skills.
        </p>
        </div>
        <div className="gallery">
          <ul>
            <li>
              <a href="https://www.meetup.com/brum_js/" className="img-container">
                <img src="images/brumjslogo.webp" alt="Brum.js Logo" width="450" height="250" />
              </a>
            </li>
            <li>
              <a href="https://conf.techmids.io/" className="img-container">
                <img src="images/Techmidslogo.png" alt="Techmids Logo" width="450" height="250" />
              </a>
            </li>
          </ul>
        </div>
        <div id="familySection">
          <h3>Family Man 👨‍👦‍👦</h3>
          <p>Dad to two young boys. We love exploring the great outdoors.</p>
          <div className="slider-container">
          <div className="slider" id="imageSlider" style={{ transform: `translateX(-${slideIndexToShow * 100}%)` }}>
          {slides.map((slide, index) => (
          <div className={`slide ${index === slideIndexToShow ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt={slide.alt} />
            <span>{slide.caption}</span>
          </div>
        ))}

        </div>
            <button className="slide-arrow prev-arrow" onClick={() => moveSlide(-1)}>❮</button>
            <button className="slide-arrow next-arrow" onClick={() => moveSlide(1)}>❯</button>

          </div>
          <div className="familySection">
          <p>The boys love the outdoors and occasionally they become right posers.</p>
        </div>

        <div id="content">
          <h3>Hobbies and Funtimes</h3>
          <p>
            I also love hosting pizza parties and gaming — the new Zelda game TOTK is my current favorite!
          </p>
          </div>
          </div>
            <h2>My Pizza's</h2>

          <div className="hobbies-gallery">
            <div className="hobby-item">
              <img src="/images/crispy.jpg" alt="Crispy Pizza" className="hobby-image" />
              <span>Crispy Pizza so tasty!</span>
            </div>
            <div className="hobby-item">
              <img src="/images/ooni.jpg" alt="Ooni Pizza Oven" className="hobby-image" />
              <span>Ooni Pizza Oven, best purchase ever</span>
            </div>
            <div className="hobby-item">
              <img src="/images/nduja.jpg" alt="Nduja Pizza" className="hobby-image" />
              <span>Nduja Pizza bit of oomph</span>
            </div>
            <div className="hobby-item">
              <img src="/images/pizzatime.jpg" alt="Cheese n ham" className="hobby-image" />
              <span>Cheese ham and red onions</span>
            </div>
          </div>

            <h2>Some Tears of the kindom screenshots</h2>
          <div className="hobbies-gallery">
            <div className="hobby-item2">
              <img src="/images/Totk1.jpg" alt="Link using the ascend ability" className="hobby-image" />
              <span>Link Ascending</span>
            </div>
            <div className="hobby-item2">
              <img src="/images/Totk5.webp" alt="Link fighting a construct" className="hobby-image" />
              <span>Link fighting a construct</span>
            </div>
            <div className="hobby-item2">
              <img src="/images/lookout-landing.jpg" alt="Link at Lookout Landing" className="hobby-image" />
              <span>Link at Lookout Landing</span>
            </div>
            <div className="hobby-item2">
              <img src="/images/Totk4.webp" alt="Link on his Hover Bike" className="hobby-image" />
              <span>Link on his Hover Bike</span>
            </div>
          </div>
        </div>
      
    </section>
  );
};
