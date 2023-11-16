import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Galaxy.css';

export const Galaxy = () => {
  const galaxyRef = useRef(null);

  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A0064);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Append renderer to the DOM
    if (galaxyRef.current) {
      galaxyRef.current.appendChild(renderer.domElement);
    }

    // Handle window resize
    const updateCamera = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', updateCamera);

    // Cleanup function
    const cleanup = () => {
      window.removeEventListener('resize', updateCamera);
      galaxyRef.current.removeChild(renderer.domElement);
    };

    // Create particles
    const particles = createParticles();
    scene.add(particles);

    // Create stars
    const stars = createStars();
    stars.forEach(star => scene.add(star));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return cleanup;
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
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);

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

  // Function to create stars
  function createStars() {
    const starTexture = new THREE.TextureLoader().load('/images/lensflare.png');
    const stars = [];
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      const starMaterial = new THREE.SpriteMaterial({ map: starTexture });
      const star = new THREE.Sprite(starMaterial);
      star.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
      star.scale.set(0.1, 0.1, 0.1);
      stars.push(star);
    }

    return stars;
  }

  return (
    <section id="home" className="flex justify-center items-center relative">
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <div ref={galaxyRef} className="galaxy-canvas" />
        <div className="overlay">
          <img src="/images/pillarsofTom.png" alt="Pillars of Tom" className="pillars" />
          <div className="message">
            <h1>Hello and welcome</h1>
            <p>You have reached Tom's Dev space</p>
            <p>My universe of code 😀</p>
          </div>
        </div>
      </div>
    </section>
  );
};
