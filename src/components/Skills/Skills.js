import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Skills.css';

export const Skills = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const onWindowResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
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

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 5;

    const starTexture = new THREE.TextureLoader().load('/images/lensflare.png');
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
      const starMaterial = new THREE.SpriteMaterial({ map: starTexture });
      const star = new THREE.Sprite(starMaterial);

      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;

      star.position.set(x, y, z);
      star.scale.set(0.1, 0.1, 0.1);

      scene.add(star);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0003;
      points.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize, false);
    };

  }, []);

  return (
    <section id="skills" className={className}>
      <div className="threejs-container">
        <div ref={mountRef}></div>
      </div>
      <div className="content-overlay">
        <h1>Skills</h1>
        <p>Your skills here.</p>
      </div>
    </section>
  );
};
