import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, ShieldCheck } from 'lucide-react';

export default function GheeJarCanvas3D({ 
  currentAngle = 'front', 
  height = '460px',
  enableControls = true,
  onSelectAngle
}) {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeView, setActiveView] = useState(currentAngle);
  const sceneRef = useRef(null);
  const jarGroupRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    setActiveView(currentAngle);
    if (!jarGroupRef.current || !cameraRef.current) return;
    
    if (currentAngle === 'front') {
      jarGroupRef.current.rotation.set(0, 0, 0);
      cameraRef.current.position.set(0, 0.6, 5.0);
    } else if (currentAngle === 'angle') {
      jarGroupRef.current.rotation.set(0.18, Math.PI / 3.8, 0);
      cameraRef.current.position.set(0, 1.0, 4.6);
    } else if (currentAngle === 'top') {
      jarGroupRef.current.rotation.set(0.55, 0, 0);
      cameraRef.current.position.set(0, 2.2, 4.2);
    }
  }, [currentAngle]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const h = container.clientHeight || 460;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(36, width / h, 0.1, 100);
    camera.position.set(0, 0.6, 5.0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // STUDIO LIGHTING
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaea, 3.4);
    keyLight.position.set(3.5, 6, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const goldRimLight = new THREE.DirectionalLight(0xdfc062, 4.2);
    goldRimLight.position.set(-4, 2.5, -3);
    scene.add(goldRimLight);

    const secondaryRim = new THREE.DirectionalLight(0xffbe42, 2.8);
    secondaryRim.position.set(4, -1, -2.5);
    scene.add(secondaryRim);

    const floorBounce = new THREE.DirectionalLight(0xefd8b0, 1.2);
    floorBounce.position.set(0, -4, 2);
    scene.add(floorBounce);

    // MASTER JAR GROUP
    const jarGroup = new THREE.Group();
    jarGroup.position.set(0, -0.15, 0);
    jarGroupRef.current = jarGroup;
    scene.add(jarGroup);

    // Pedestal Base
    const pedestalGeo = new THREE.CylinderGeometry(1.65, 1.75, 0.22, 64);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x140A05,
      roughness: 0.35,
      metalness: 0.15,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -1.35;
    pedestal.receiveShadow = true;
    jarGroup.add(pedestal);

    // Antique Brass Inlay Ring
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xDFC062,
      metalness: 0.88,
      roughness: 0.18,
    });
    const pedestalGoldGeo = new THREE.TorusGeometry(1.66, 0.025, 16, 64);
    const pedestalGold = new THREE.Mesh(pedestalGoldGeo, goldMat);
    pedestalGold.rotation.x = Math.PI / 2;
    pedestalGold.position.y = -1.24;
    jarGroup.add(pedestalGold);

    // Luxury Glass Jar
    const glassGeo = new THREE.CylinderGeometry(1.1, 1.06, 1.85, 64, 1, false);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.78,
      opacity: 0.9,
      transparent: true,
      roughness: 0.06,
      metalness: 0.08,
      ior: 1.54,
      thickness: 0.25,
      specularIntensity: 2.0,
      specularColor: 0xfffaed,
    });
    const glassJar = new THREE.Mesh(glassGeo, glassMat);
    glassJar.position.y = -0.28;
    glassJar.castShadow = true;
    jarGroup.add(glassJar);

    // Thick Glass Base
    const glassBaseGeo = new THREE.CylinderGeometry(1.06, 1.04, 0.2, 64);
    const glassBase = new THREE.Mesh(glassBaseGeo, glassMat);
    glassBase.position.y = -1.22;
    jarGroup.add(glassBase);

    // Pure Golden Ghee Core
    const gheeGeo = new THREE.CylinderGeometry(0.99, 0.96, 1.58, 64);
    const gheeMat = new THREE.MeshStandardMaterial({
      color: 0xF5BA2A,
      emissive: 0x8F6805,
      emissiveIntensity: 0.3,
      roughness: 0.35,
      metalness: 0.15,
    });
    const gheeLiquid = new THREE.Mesh(gheeGeo, gheeMat);
    gheeLiquid.position.y = -0.36;
    jarGroup.add(gheeLiquid);

    // Ghee Top Meniscus
    const gheeTopGeo = new THREE.CircleGeometry(0.99, 64);
    const gheeTopMat = new THREE.MeshStandardMaterial({
      color: 0xFFD84D,
      roughness: 0.2,
      metalness: 0.35,
    });
    const gheeTop = new THREE.Mesh(gheeTopGeo, gheeTopMat);
    gheeTop.rotation.x = -Math.PI / 2;
    gheeTop.position.y = 0.43;
    jarGroup.add(gheeTop);

    // High-Res Luxury Brand Label
    const labelGeo = new THREE.CylinderGeometry(1.108, 1.108, 1.1, 64, 1, true, -Math.PI * 0.34, Math.PI * 0.68);
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FDFBF7';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.strokeStyle = '#DFC062';
    ctx.lineWidth = 14;
    ctx.strokeRect(18, 18, 988, 476);
    ctx.lineWidth = 3;
    ctx.strokeRect(34, 34, 956, 444);

    ctx.fillStyle = '#DFC062';
    ctx.beginPath();
    ctx.arc(512, 105, 44, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#140A05';
    ctx.font = 'bold 38px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('सं', 512, 105);

    ctx.fillStyle = '#140A05';
    ctx.font = '900 56px Cinzel, serif';
    ctx.fillText('SAMVARDHAN', 512, 205);

    ctx.fillStyle = '#C59B27';
    ctx.font = 'bold 24px Plus Jakarta Sans, sans-serif';
    ctx.fillText('PURE A2 GIR COW GHEE', 512, 255);

    ctx.fillStyle = '#5C473A';
    ctx.font = 'italic 20px Cormorant Garamond, serif';
    ctx.fillText('Traditional Bi-Directional Wooden Bilona Method', 512, 300);
    ctx.fillText('Saurashtra • Gujarat • India', 512, 335);

    ctx.fillStyle = '#3B543D';
    ctx.font = 'bold 18px Plus Jakarta Sans, sans-serif';
    ctx.fillText('100% NATIVE GIR COW MILK • VEDIC MILKING • ARTISANAL BATCH', 512, 395);

    const labelTexture = new THREE.CanvasTexture(canvas);
    labelTexture.anisotropy = 16;

    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      roughness: 0.32,
      metalness: 0.22,
      side: THREE.DoubleSide,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.y = -0.28;
    jarGroup.add(labelMesh);

    // Jar Neck
    const neckGeo = new THREE.CylinderGeometry(0.95, 1.05, 0.22, 64);
    const neckMesh = new THREE.Mesh(neckGeo, glassMat);
    neckMesh.position.y = 0.74;
    jarGroup.add(neckMesh);

    // Turned Wood Lid
    const lidWoodGeo = new THREE.CylinderGeometry(1.14, 1.12, 0.38, 64);
    const lidWoodMat = new THREE.MeshStandardMaterial({
      color: 0x482818,
      roughness: 0.52,
      metalness: 0.08,
    });
    const lidWood = new THREE.Mesh(lidWoodGeo, lidWoodMat);
    lidWood.position.y = 1.02;
    lidWood.castShadow = true;
    jarGroup.add(lidWood);

    const lidBevelGeo = new THREE.CylinderGeometry(0.9, 1.14, 0.12, 64);
    const lidBevel = new THREE.Mesh(lidBevelGeo, lidWoodMat);
    lidBevel.position.y = 1.25;
    jarGroup.add(lidBevel);

    const knobGeo = new THREE.CylinderGeometry(0.32, 0.42, 0.14, 32);
    const knobMesh = new THREE.Mesh(knobGeo, goldMat);
    knobMesh.position.y = 1.36;
    jarGroup.add(knobMesh);

    const lidRingGeo = new THREE.TorusGeometry(1.13, 0.03, 16, 64);
    const lidRing = new THREE.Mesh(lidRingGeo, goldMat);
    lidRing.rotation.x = Math.PI / 2;
    lidRing.position.y = 0.94;
    jarGroup.add(lidRing);

    // Floating Golden Particles
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 4.2;
      positions[i + 1] = (Math.random() - 0.5) * 3.5;
      positions[i + 2] = (Math.random() - 0.5) * 4.2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xDFC062,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    jarGroup.add(particles);

    // DRAG INTERACTION
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      jarGroup.rotation.y += deltaX * 0.009;
      jarGroup.rotation.x = Math.max(-0.35, Math.min(0.35, jarGroup.rotation.x + deltaY * 0.005));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => { isDragging = false; };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      jarGroup.rotation.y += deltaX * 0.009;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (isRotating && !isDragging) {
        jarGroup.rotation.y += 0.0045;
      }

      jarGroup.position.y = -0.15 + Math.sin(elapsedTime * 1.6) * 0.04;
      particles.rotation.y = elapsedTime * 0.035;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 460;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [isRotating]);

  const setCameraPreset = (view) => {
    setActiveView(view);
    if (onSelectAngle) onSelectAngle(view);
    if (!jarGroupRef.current || !cameraRef.current) return;
    if (view === 'front') {
      jarGroupRef.current.rotation.set(0, 0, 0);
      cameraRef.current.position.set(0, 0.6, 5.0);
    } else if (view === 'angle') {
      jarGroupRef.current.rotation.set(0.18, Math.PI / 3.8, 0);
      cameraRef.current.position.set(0, 1.0, 4.6);
    } else if (view === 'top') {
      jarGroupRef.current.rotation.set(0.55, 0, 0);
      cameraRef.current.position.set(0, 2.2, 4.2);
    }
  };

  return (
    <div 
      className="relative w-full flex items-center justify-center select-none"
      style={{ height }}
    >
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {enableControls && (
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-[#140A05]/90 backdrop-blur-md border border-[#DFC062]/40 p-1.5 rounded-xl shadow-lg">
          <button
            onClick={() => setCameraPreset('front')}
            className={`px-3 py-1 text-[11px] font-bold uppercase rounded-lg transition-all ${
              activeView === 'front' ? 'bg-[#DFC062] text-[#140A05]' : 'text-[#DFC062] hover:bg-white/10'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => setCameraPreset('angle')}
            className={`px-3 py-1 text-[11px] font-bold uppercase rounded-lg transition-all ${
              activeView === 'angle' ? 'bg-[#DFC062] text-[#140A05]' : 'text-[#DFC062] hover:bg-white/10'
            }`}
          >
            45°
          </button>
          <button
            onClick={() => setCameraPreset('top')}
            className={`px-3 py-1 text-[11px] font-bold uppercase rounded-lg transition-all ${
              activeView === 'top' ? 'bg-[#DFC062] text-[#140A05]' : 'text-[#DFC062] hover:bg-white/10'
            }`}
          >
            Lid
          </button>
          <div className="w-[1px] h-3 bg-stone-700 mx-1" />
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="p-1 rounded-lg text-[#DFC062] hover:bg-white/10"
            title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      )}
    </div>
  );
}
