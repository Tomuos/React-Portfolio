import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Galaxy.css';

export const Galaxy = () => {
  const galaxyRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A0064); // Setting the background to navy
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (galaxyRef.current) {
      galaxyRef.current.appendChild(renderer.domElement);
    }

    // Create a circular texture with a transparent background
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    context.beginPath();
    context.arc(32, 32, 30, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    // Create a texture
    const texture = new THREE.CanvasTexture(canvas);

    // Create material with circular texture
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

    const points = new THREE.Points(geometry, material);

    scene.add(points);
    camera.position.z = 5;

    // Update this line to refer to the image in the public folder
const starTexture = new THREE.TextureLoader().load('/images/lensflare.png');

// rest of your code
const numStars = 1000; // You can adjust the number of extra stars as needed

for (let i = 0; i < numStars; i++) {
  const starMaterial = new THREE.SpriteMaterial({ map: starTexture });
  const star = new THREE.Sprite(starMaterial);

  // Randomly position stars within a certain range
  const x = (Math.random() - 0.5) * 20;
  const y = (Math.random() - 0.5) * 20;
  const z = (Math.random() - 0.5) * 20;

  star.position.set(x, y, z);

  // Adjust the scale of stars to make them larger
  star.scale.set(0.1, 0.1, 0.1); // Increase the scale as needed

  scene.add(star);
}


    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0003;
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <section id="home" className="flex justify-center items-center relative">
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Your Three.js canvas */}
        <div ref={galaxyRef} className="galaxy-canvas" />

        {/* Overlay */}
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
