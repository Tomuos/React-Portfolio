import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Galaxy.css';

export const Galaxy = () => {
  const galaxyRef = useRef(null);

  useEffect(() => {
    const galaxyElement = galaxyRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A0064);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (galaxyElement) {
      galaxyElement.appendChild(renderer.domElement);
    }

    const updateCamera = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', updateCamera);

    const particles = createParticles();
    scene.add(particles);

    const stars = createStars();
    stars.forEach(star => scene.add(star));

    const boundary = 20;

    const animate = () => {
      requestAnimationFrame(animate);

      stars.forEach(star => {
        star.position.add(star.velocity);

        if (star.position.x > boundary) star.position.x = -boundary;
        else if (star.position.x < -boundary) star.position.x = boundary;

        if (star.position.y > boundary) star.position.y = -boundary;
        else if (star.position.y < -boundary) star.position.y = boundary;

        if (star.position.z > boundary) star.position.z = -boundary;
        else if (star.position.z < -boundary) star.position.z = boundary;
      });

      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateCamera);
      if (galaxyElement) {
        galaxyElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Function to create particles
  function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(32, 32, 30, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      map: texture,
      transparent: true,
    });

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(7000 * 3);
    const colors = new Float32Array(7000 * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      const color = new THREE.Color(Math.random(), Math.random(), Math.random());
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return new THREE.Points(geometry, material);
  }

  // Enhanced createStars function with varied sizes and initial velocities
  function createStars() {
    const starTexture = new THREE.TextureLoader().load('/images/lens-flair.png');
    const stars = [];
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      const starMaterial = new THREE.SpriteMaterial({ map: starTexture });
      const star = new THREE.Sprite(starMaterial);

      // Randomize position
      star.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);

      // Randomize scale for varied sizes
      const scale = Math.random() * 0.1 + 0.05; // Adjust this range for size variation
      star.scale.set(scale, scale, scale);

      // Store velocity for movement
      star.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002
      );

      stars.push(star);
    }

    return stars;
  }

  return (
    <section id="home" className="flex justify-center items-center relative">
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <div ref={galaxyRef} className="galaxy-canvas" />
        <div className="overlay">
          <div className="message">
            <h1 className='galaxyHi'>Welcome</h1>
            <p className='galaxyMsg'>You have reached Tom's dev space.</p>
            <p className='galaxyMsg'>My universe of code 😀</p>
          </div>
          <img src="images/Tom-in-space.png" alt="astronaut Tom" className="Tom-in-space" />
        </div>
      </div>
    </section>
  );
};
