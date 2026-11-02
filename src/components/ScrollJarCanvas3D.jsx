import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ScrollJarCanvas3D({ maxScrollElementId = 'about' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. SCENE
    const scene = new THREE.Scene();

    // 2. CAMERA (Commercial studio focal length: 38° FOV at 5.2 distance)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // 3. RENDERER (ACES Filmic Tone Mapping for authentic photographic contrast)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.38;
    
    container.innerHTML = '';
    const domElement = renderer.domElement;
    domElement.style.width = '100%';
    domElement.style.height = '100%';
    domElement.style.display = 'block';
    domElement.style.pointerEvents = 'none';
    container.appendChild(domElement);

    // 4. COMMERCIAL STUDIO 5-POINT LIGHTING (Agrumea Farm Photoshoot Setup)
    // Soft ambient studio fill
    const ambientLight = new THREE.AmbientLight(0xfff7ea, 2.4);
    scene.add(ambientLight);

    // Main Studio Softbox (Left-Top) - gives crisp specular line along glass
    const keySoftbox = new THREE.DirectionalLight(0xffffff, 4.5);
    keySoftbox.position.set(3.8, 4.5, 4.0);
    keySoftbox.castShadow = true;
    scene.add(keySoftbox);

    // Left Rim Light - catches the silver lid rim and glass wall curvature
    const rimLight = new THREE.DirectionalLight(0xffffff, 4.8);
    rimLight.position.set(-4.5, 2.5, -2.5);
    scene.add(rimLight);

    // Backlight Glow - passes through golden ghee, creating internal translucent warmth
    const amberBacklight = new THREE.DirectionalLight(0xffb226, 3.8);
    amberBacklight.position.set(0, -0.5, -3.5);
    scene.add(amberBacklight);

    // Overhead Cap Softbox - creates horizontal brushed metal highlight across metallic lid
    const lidSoftbox = new THREE.DirectionalLight(0xffffff, 3.2);
    lidSoftbox.position.set(0, 6.0, 1.8);
    scene.add(lidSoftbox);

    // Soft warm floor bounce
    const floorBounce = new THREE.DirectionalLight(0xffebc4, 1.8);
    floorBounce.position.set(0, -3.5, 2.5);
    scene.add(floorBounce);

    // 5. MASTER JAR GROUP
    const jarGroup = new THREE.Group();
    scene.add(jarGroup);

    // Realistic Soft Contact Shadow (fades smoothly under jar base)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 128);
    sGrad.addColorStop(0, 'rgba(15, 8, 4, 0.78)');
    sGrad.addColorStop(0.35, 'rgba(15, 8, 4, 0.42)');
    sGrad.addColorStop(0.7, 'rgba(15, 8, 4, 0.12)');
    sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 256, 256);
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    shadowTexture.needsUpdate = true;
    const shadowGeo = new THREE.PlaneGeometry(2.8, 2.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = -1.26;
    jarGroup.add(contactShadow);

    // -------------------------------------------------------------------------
    // A. LUXURY GLASS CONTAINER (Physical Glass with Optical Clearcoat & Weight)
    // -------------------------------------------------------------------------
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.32,
      roughness: 0.04,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 0.98,
      specularColor: 0xffffff,
    });

    // Main Glass Jar Body (Sleek proportions matching Agrumea Farm reference)
    const glassGeo = new THREE.CylinderGeometry(0.92, 0.90, 2.05, 64, 1, false);
    const glassJar = new THREE.Mesh(glassGeo, glassMat);
    glassJar.position.y = -0.12;
    jarGroup.add(glassJar);

    // Heavy Clear Glass Base (Solid optical glass foot at bottom of jar)
    const glassBaseGeo = new THREE.CylinderGeometry(0.90, 0.88, 0.28, 64);
    const glassBase = new THREE.Mesh(glassBaseGeo, glassMat);
    glassBase.position.y = -1.14;
    jarGroup.add(glassBase);

    // Bottom Rim Bevel Torus (Catches bottom studio specular reflection ring)
    const baseBevelGeo = new THREE.TorusGeometry(0.88, 0.02, 16, 64);
    const baseBevel = new THREE.Mesh(baseBevelGeo, glassMat);
    baseBevel.rotation.x = Math.PI / 2;
    baseBevel.position.y = -1.26;
    jarGroup.add(baseBevel);

    // -------------------------------------------------------------------------
    // B. PURE A2 GIR COW BILONA GHEE (Danedar Golden Nectar with Internal Glow)
    // -------------------------------------------------------------------------
    // Ghee sits on top of heavy glass base (from y = -1.0 to y = 0.62, leaving clear headspace!)
    const gheeHeight = 1.62;
    const gheeGeo = new THREE.CylinderGeometry(0.86, 0.84, gheeHeight, 64);
    const gheeMat = new THREE.MeshStandardMaterial({
      color: 0xF2A91D,
      emissive: 0x7A4500,
      emissiveIntensity: 0.42,
      roughness: 0.32,
      metalness: 0.08,
      transparent: true,
      opacity: 1.0,
    });
    const gheeLiquid = new THREE.Mesh(gheeGeo, gheeMat);
    gheeLiquid.position.y = -0.19;
    jarGroup.add(gheeLiquid);

    // Ghee Top Meniscus (Realistic liquid surface with golden highlight)
    const gheeTopGeo = new THREE.CircleGeometry(0.86, 64);
    const gheeTopMat = new THREE.MeshStandardMaterial({
      color: 0xFFD85A,
      roughness: 0.16,
      metalness: 0.25,
      transparent: true,
      opacity: 1.0,
    });
    const gheeTop = new THREE.Mesh(gheeTopGeo, gheeTopMat);
    gheeTop.rotation.x = -Math.PI / 2;
    gheeTop.position.y = 0.62;
    jarGroup.add(gheeTop);

    // -------------------------------------------------------------------------
    // C. PHOTOSHOOT PRINT LABEL (Tactile Ivory Uncoated Paper with Gold Foil)
    // -------------------------------------------------------------------------
    const labelHeight = 1.16;
    // Wraps around 270 degrees so left and right side details reveal during 3D rotation!
    const labelGeo = new THREE.CylinderGeometry(0.925, 0.925, labelHeight, 64, 1, true, -Math.PI * 0.72, Math.PI * 1.44);

    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 2048;
    labelCanvas.height = 1080;
    const ctx = labelCanvas.getContext('2d');

    // 1. Natural Ivory Textured Fine-Art Paper Base
    ctx.fillStyle = '#FAF7EF';
    ctx.fillRect(0, 0, 2048, 1080);

    // Subtle paper micro-fiber grain (creates realistic tactile photo appearance)
    ctx.fillStyle = 'rgba(180, 165, 145, 0.04)';
    for (let i = 0; i < 6000; i++) {
      const rx = Math.random() * 2048;
      const ry = Math.random() * 1080;
      ctx.fillRect(rx, ry, Math.random() * 2 + 1, Math.random() * 2 + 1);
    }

    // Outer Thin Gold Foil Border
    ctx.strokeStyle = '#DFC062';
    ctx.lineWidth = 6;
    ctx.strokeRect(36, 36, 1976, 1008);
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 1948, 980);

    // ==================== CENTER HERO PANEL (Width 1024, centered at X = 1024) ====================
    // Top Gold Monogram Emblem
    ctx.fillStyle = '#DFC062';
    ctx.beginPath();
    ctx.arc(1024, 180, 68, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#B38B28';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#180B04';
    ctx.font = 'bold 64px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('सं', 1024, 180);

    // Brand Name Wordmark
    ctx.fillStyle = '#180B04';
    ctx.font = '900 86px Cinzel, serif';
    ctx.letterSpacing = '8px';
    ctx.fillText('SAMVARDHAN', 1024, 320);

    // Golden Accent Divider Rule with diamond center
    ctx.strokeStyle = '#DFC062';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(720, 375);
    ctx.lineTo(1328, 375);
    ctx.stroke();

    ctx.fillStyle = '#DFC062';
    ctx.beginPath();
    ctx.arc(1024, 375, 8, 0, Math.PI * 2);
    ctx.fill();

    // Product Title (Crisp Luxury Editorial Serif)
    ctx.fillStyle = '#C2982B';
    ctx.font = 'bold 44px Plus Jakarta Sans, sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('A2 GIR COW GHEE', 1024, 450);

    // Method Sub-Headline
    ctx.fillStyle = '#422818';
    ctx.font = 'italic 34px Cormorant Garamond, serif';
    ctx.fillText('Traditional Bi-Directional Wooden Bilona Method', 1024, 520);
    ctx.fillText('Cultured Curd Makhan • Saurashtra • Gujarat', 1024, 570);

    // Vedic Certification Tag
    ctx.fillStyle = '#2A4026';
    ctx.font = 'bold 24px Plus Jakarta Sans, sans-serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('100% NATIVE GIR COW MILK • AHIMSA VEDIC MILKING', 1024, 650);

    // Artisanal Small Batch Seal
    ctx.fillStyle = '#180B04';
    ctx.font = 'bold 22px Plus Jakarta Sans, sans-serif';
    ctx.fillText('HAND-CHURNED IN EARTHEN BILVA POTS • SLOW WOODFIRE CLARIFIED', 1024, 700);

    // Bottom Gold Seal Bar
    ctx.fillStyle = '#180B04';
    ctx.fillRect(720, 755, 608, 48);
    ctx.fillStyle = '#DFC062';
    ctx.font = 'bold 22px Plus Jakarta Sans, sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('NET CONTENT: 1000 ML (890g)', 1024, 788);

    // ==================== LEFT PANEL (Provenance & Vedic Rituals) ====================
    // Vertical Separator Line
    ctx.strokeStyle = 'rgba(223, 192, 98, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(520, 100);
    ctx.lineTo(520, 980);
    ctx.stroke();

    ctx.fillStyle = '#C2982B';
    ctx.font = 'bold 28px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SAURASHTRA ORIGIN', 280, 180);

    ctx.fillStyle = '#180B04';
    ctx.font = 'italic 26px Cormorant Garamond, serif';
    ctx.fillText('अमृतं वै घृतम्', 280, 240);
    ctx.font = 'italic 22px Cormorant Garamond, serif';
    ctx.fillText('"Ghee is the ultimate nectar of life"', 280, 280);

    ctx.fillStyle = '#5A4030';
    ctx.font = '20px Plus Jakarta Sans, sans-serif';
    ctx.fillText('• 25-30 Litres Milk per 1L Ghee', 280, 360);
    ctx.fillText('• Natural Grazing on Saurashtra Grass', 280, 410);
    ctx.fillText('• Vedic Chants during Dawn Milking', 280, 460);
    ctx.fillText('• Zero Hormones • Zero Additives', 280, 510);
    ctx.fillText('• Naturally Granular Danedar Texture', 280, 560);

    // Certified Gold Stamp
    ctx.strokeStyle = '#DFC062';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(280, 720, 80, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#C2982B';
    ctx.font = 'bold 18px Plus Jakarta Sans, sans-serif';
    ctx.fillText('AUTHENTIC', 280, 690);
    ctx.font = 'bold 24px Cinzel, serif';
    ctx.fillText('BILONA', 280, 725);
    ctx.font = 'bold 16px Plus Jakarta Sans, sans-serif';
    ctx.fillText('ESTD 2026', 280, 755);

    // ==================== RIGHT PANEL (Nutrition Facts & Testing) ====================
    // Vertical Separator Line
    ctx.beginPath();
    ctx.moveTo(1528, 100);
    ctx.lineTo(1528, 980);
    ctx.stroke();

    ctx.fillStyle = '#C2982B';
    ctx.font = 'bold 28px Plus Jakarta Sans, sans-serif';
    ctx.fillText('NUTRITION FACTS', 1768, 180);

    ctx.fillStyle = '#180B04';
    ctx.font = 'bold 20px Plus Jakarta Sans, sans-serif';
    ctx.fillText('TYPICAL VALUES PER 100g', 1768, 230);

    ctx.fillStyle = '#5A4030';
    ctx.font = '20px Plus Jakarta Sans, sans-serif';
    ctx.fillText('Energy ................................ 897 kcal', 1768, 290);
    ctx.fillText('Pure Milk Fat ........................ 99.8 g', 1768, 340);
    ctx.fillText('A2 Beta-Casein Protein ....... 100%', 1768, 390);
    ctx.fillText('Butyric Acid (Gut Health) .. Rich', 1768, 440);
    ctx.fillText('Omega 3 & Beta-Carotene .. High', 1768, 490);
    ctx.fillText('Added Sugar & Salt ............. 0.0 g', 1768, 540);

    // Quality Verification Stamp
    ctx.strokeStyle = '#2A4026';
    ctx.lineWidth = 3;
    ctx.strokeRect(1620, 650, 296, 140);
    ctx.fillStyle = '#2A4026';
    ctx.font = 'bold 20px Plus Jakarta Sans, sans-serif';
    ctx.fillText('LAB TESTED & VERIFIED', 1768, 695);
    ctx.font = '16px Plus Jakarta Sans, sans-serif';
    ctx.fillText('100% PURE A2 MILK SOURCE', 1768, 735);
    ctx.fillText('BATCH: SV-07 • GUJARAT', 1768, 765);

    const labelTexture = new THREE.CanvasTexture(labelCanvas);
    labelTexture.anisotropy = 16;
    labelTexture.needsUpdate = true;

    // Physical Matte Paper Material (Tactile, non-glossy, soft natural paper sheen)
    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      roughness: 0.72,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1.0,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.y = -0.16;
    jarGroup.add(labelMesh);

    // -------------------------------------------------------------------------
    // D. JAR NECK & CLEAR GLASS SHOULDER
    // -------------------------------------------------------------------------
    const neckGeo = new THREE.CylinderGeometry(0.82, 0.90, 0.22, 64);
    const neckMesh = new THREE.Mesh(neckGeo, glassMat);
    neckMesh.position.y = 0.92;
    jarGroup.add(neckMesh);

    // Clear Glass Thread Ring (Realistic screw thread detail beneath lid)
    const threadGeo = new THREE.TorusGeometry(0.85, 0.02, 16, 64);
    const threadMesh = new THREE.Mesh(threadGeo, glassMat);
    threadMesh.rotation.x = Math.PI / 2;
    threadMesh.position.y = 0.98;
    jarGroup.add(threadMesh);

    // -------------------------------------------------------------------------
    // E. INDEPENDENT ROTATING & LIFTING TWIST LID (Prompt 02 Opening Sequence)
    // -------------------------------------------------------------------------
    // The lid is an independent group with authentic pivot points for unscrewing,
    // lifting upward, tilting, and floating free to reveal the golden ghee within.
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 1.15, 0);

    const lidMat = new THREE.MeshStandardMaterial({
      color: 0xDBE0E5,
      roughness: 0.24,
      metalness: 0.92,
      transparent: true,
      opacity: 1.0,
    });

    // Sleek brushed aluminium twist cap cylinder
    const lidGeo = new THREE.CylinderGeometry(0.94, 0.94, 0.26, 64);
    const lidMesh = new THREE.Mesh(lidGeo, lidMat);
    lidMesh.position.set(0, 0, 0);
    lidMesh.castShadow = true;
    lidGroup.add(lidMesh);

    // Top Rim Bevel (Smooth curved highlight edge)
    const lidBevelGeo = new THREE.TorusGeometry(0.93, 0.022, 16, 64);
    const lidBevel = new THREE.Mesh(lidBevelGeo, lidMat);
    lidBevel.rotation.x = Math.PI / 2;
    lidBevel.position.y = 0.12;
    lidGroup.add(lidBevel);

    // Brushed Metallic Top Cap Disc
    const lidTopDiscGeo = new THREE.CircleGeometry(0.92, 64);
    const lidTopDisc = new THREE.Mesh(lidTopDiscGeo, lidMat);
    lidTopDisc.rotation.x = -Math.PI / 2;
    lidTopDisc.position.y = 0.132;
    lidGroup.add(lidTopDisc);

    // Champagne Gold Inlay Trim Ring on Top of Lid
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xDFC062,
      metalness: 0.88,
      roughness: 0.18,
      transparent: true,
      opacity: 1.0,
    });
    const lidGoldTrimGeo = new THREE.TorusGeometry(0.65, 0.015, 16, 64);
    const lidGoldTrim = new THREE.Mesh(lidGoldTrimGeo, goldMat);
    lidGoldTrim.rotation.x = Math.PI / 2;
    lidGoldTrim.position.y = 0.136;
    lidGroup.add(lidGoldTrim);

    // Center Gold Monogram Disc on Lid
    const centerSealGeo = new THREE.CircleGeometry(0.24, 32);
    const centerSeal = new THREE.Mesh(centerSealGeo, goldMat);
    centerSeal.rotation.x = -Math.PI / 2;
    centerSeal.position.y = 0.138;
    lidGroup.add(centerSeal);

    jarGroup.add(lidGroup);

    // -------------------------------------------------------------------------
    // F. GOLDEN GHEE INNER MENISCUS (Revealed upon unscrewing)
    // -------------------------------------------------------------------------
    const gheeSurfaceGeo = new THREE.CircleGeometry(0.82, 48);
    const gheeSurfaceMat = new THREE.MeshPhysicalMaterial({
      color: 0xF7BF35,
      roughness: 0.14,
      metalness: 0.1,
      transmission: 0.45,
      ior: 1.48,
      emissive: 0x8A4600,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 1.0,
    });
    const gheeSurfaceMesh = new THREE.Mesh(gheeSurfaceGeo, gheeSurfaceMat);
    gheeSurfaceMesh.rotation.x = -Math.PI / 2;
    gheeSurfaceMesh.position.y = 1.02;
    jarGroup.add(gheeSurfaceMesh);

    // =========================================================================
    // SCROLL-DRIVEN MOTION & TARGET VALUES (No mouse interaction!)
    // =========================================================================
    // Initial hero state: Lowered jar with only top half visible at initial load
    let targetX = 0;
    let targetY = -1.48;
    let targetRotX = 0.04;
    let targetRotY = 0;
    let targetRotZ = 0; // Jar roll/tilt (tilts ~35° left during pouring)
    let targetScale = 0.84;
    let targetOpacity = 1.0;
    let targetJarOpacity = 1.0; // Jar stays 100% visible!

    let targetLidY = 0;
    let targetLidX = 0;
    let targetLidRotY = 0;
    let targetLidRotZ = 0;
    let targetLidRotX = 0;

    let currentX = 0;
    let currentY = -1.48;
    let currentRotX = 0.04;
    let currentRotY = 0;
    let currentRotZ = 0;
    let currentScale = 0.84;
    let currentJarOpacity = 1.0;

    let currentLidY = 0;
    let currentLidX = 0;
    let currentLidRotY = 0;
    let currentLidRotZ = 0;
    let currentLidRotX = 0;
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const stageEl = document.getElementById('showcase-stage');
      
      let progress = 0;
      if (typeof window.__showcaseProgress === 'number') {
        progress = window.__showcaseProgress;
      } else if (stageEl) {
        const rect = stageEl.getBoundingClientRect();
        const scrollable = stageEl.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          progress = Math.max(0, Math.min(1.0, -rect.top / scrollable));
        }
      } else {
        progress = Math.min(1.0, window.scrollY / 2500);
      }

      // Responsive negative space docking coordinate
      const aspect = window.innerWidth / Math.max(1, window.innerHeight);
      const halfWidth = Math.tan((38 * Math.PI / 180) / 2) * 5.2 * aspect;
      const dockX = isMobile ? 0 : Math.min(1.52, Math.max(1.18, halfWidth * 0.46));

      // -----------------------------------------------------------------------
      // PHASE 1 & 2: HERO — LOWERED JAR (ONLY TOP HALF VISIBLE AT INITIAL) -> ASCENDS (0.00 -> 0.08)
      // -----------------------------------------------------------------------
      if (progress <= 0.08) {
        const p = progress / 0.08;
        const easeP = p * p * (3 - 2 * p);
        const startY = isMobile ? -1.54 : -1.48;
        const focalY = isMobile ? -0.30 : -0.24;
        const startScale = isMobile ? 0.72 : 0.84;
        const focalScale = isMobile ? 0.68 : 0.82;

        targetX = 0;
        targetY = THREE.MathUtils.lerp(startY, focalY, easeP);
        targetRotX = THREE.MathUtils.lerp(0.04, 0.08, easeP);
        targetRotY = THREE.MathUtils.lerp(0.0, 0.08, easeP);
        targetRotZ = 0;
        targetScale = THREE.MathUtils.lerp(startScale, focalScale, easeP);
        targetOpacity = 1.0;
        targetJarOpacity = 1.0;

        targetLidY = 0;
        targetLidX = 0;
        targetLidRotY = 0;
        targetLidRotZ = 0;
        targetLidRotX = 0;
      }
      // -----------------------------------------------------------------------
      // PHASE 3: GLIDE TO RIGHT DOCK (0.08 -> 0.16)
      // -----------------------------------------------------------------------
      else if (progress <= 0.16) {
        const p = (progress - 0.08) / 0.08;
        const startY = isMobile ? -0.30 : -0.24;
        targetX = THREE.MathUtils.lerp(0, dockX, Math.min(1, p * 1.2));
        targetY = THREE.MathUtils.lerp(startY, 0.02, p);
        targetRotX = THREE.MathUtils.lerp(0.08, 0.12, p);
        targetRotY = THREE.MathUtils.lerp(0.08, 0.52, p);
        targetRotZ = 0;
        targetScale = isMobile ? 0.68 : 0.82;
        targetOpacity = 1.0;
        targetJarOpacity = 1.0;

        targetLidY = 0;
        targetLidX = 0;
        targetLidRotY = 0;
        targetLidRotZ = 0;
        targetLidRotX = 0;
      }
      // -----------------------------------------------------------------------
      // PHASE 4: EDITORIAL PHRASES ON LEFT — JAR DOCKED ON RIGHT (0.16 -> 0.44)
      // -----------------------------------------------------------------------
      else if (progress <= 0.44) {
        const p = (progress - 0.16) / 0.28;
        targetX = dockX;
        targetY = 0.02 + Math.sin(p * Math.PI * 2) * 0.025;
        targetRotX = 0.12 + Math.sin(p * Math.PI) * 0.02;
        targetRotY = 0.52 + Math.cos(p * Math.PI) * 0.04;
        targetRotZ = 0;
        targetScale = isMobile ? 0.68 : 0.82;
        targetOpacity = 1.0;
        targetJarOpacity = 1.0;

        targetLidY = 0;
        targetLidX = 0;
        targetLidRotY = 0;
        targetLidRotZ = 0;
        targetLidRotX = 0;
      }
      // -----------------------------------------------------------------------
      // PHASE 5a: RE-CENTERING TO MIDDLE & LID LIFT AT "UNLOCKING LIQUID GOLD" (0.44 -> 0.58)
      // -----------------------------------------------------------------------
      else if (progress <= 0.58) {
        const p = (progress - 0.44) / 0.14;
        targetX = THREE.MathUtils.lerp(dockX, isMobile ? 0.02 : 0.05, p); // Centers in the middle!
        targetY = THREE.MathUtils.lerp(0.02, -0.10, p);
        targetRotX = THREE.MathUtils.lerp(0.12, 0.16, p);
        targetRotY = THREE.MathUtils.lerp(0.52, -0.06, p);
        targetRotZ = 0;
        targetScale = THREE.MathUtils.lerp(isMobile ? 0.68 : 0.82, isMobile ? 0.74 : 0.86, p);
        targetOpacity = 1.0;
        targetJarOpacity = 1.0; // JAR NEVER DISAPPEARS!

        // Lid unscrews (720° spin) and lifts high above the open jar
        targetLidRotY = p * Math.PI * 4;
        targetLidY = p * 1.95;
        targetLidX = p * 0.42;
        targetLidRotZ = -p * 0.32;
        targetLidRotX = -p * 0.15;

        gheeSurfaceMat.emissiveIntensity = 0.2 + p * 0.65;
      }
      // -----------------------------------------------------------------------
      // PHASE 5b: JAR TILTS ON RIGHT TO POUR GHEE DROPLET (0.58 -> 0.70)
      // Jar tilts ~35° left, mouth facing center-left, negative space for falling drop!
      // -----------------------------------------------------------------------
      else if (progress <= 0.70) {
        const p = (progress - 0.58) / 0.12;
        const pourDockX = isMobile ? 0.10 : Math.min(1.35, Math.max(0.95, halfWidth * 0.40));
        targetX = THREE.MathUtils.lerp(isMobile ? 0.02 : 0.05, pourDockX, p);
        targetY = -0.06;
        targetRotX = 0.18;
        targetRotY = THREE.MathUtils.lerp(-0.06, -0.15, p);
        targetRotZ = THREE.MathUtils.lerp(0.0, 0.58, p); // ~35° left tilt
        targetScale = isMobile ? 0.72 : 0.82;
        targetOpacity = 1.0;
        targetJarOpacity = 1.0; // JAR NEVER DISAPPEARS!

        targetLidRotY = Math.PI * 4;
        targetLidY = 1.95;
        targetLidX = 0.42;
        targetLidRotZ = -0.32;
        targetLidRotX = -0.15;

        gheeSurfaceMat.emissiveIntensity = 0.85;
      }
      // -----------------------------------------------------------------------
      // PHASE 5c: JAR STOPS STICKY SCROLL AT POURING POSITION (0.70 -> 1.00)
      // Jar holds position on the right, golden drop falls down to ocean at the bottom!
      // -----------------------------------------------------------------------
      else {
        const pourDockX = isMobile ? 0.10 : Math.min(1.35, Math.max(0.95, halfWidth * 0.40));
        targetX = pourDockX;
        targetY = -0.06;
        targetRotX = 0.18;
        targetRotY = -0.15;
        targetRotZ = 0.58;
        targetScale = isMobile ? 0.72 : 0.82;
        targetJarOpacity = 1.0; // 100% VISIBLE!
        targetOpacity = 1.0;

        targetLidRotY = Math.PI * 4;
        targetLidY = 1.95;
        targetLidX = 0.42;
        targetLidRotZ = -0.32;
        targetLidRotX = -0.15;

        gheeSurfaceMat.emissiveIntensity = 0.85;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // RENDER LOOP (High-performance delta-damped scroll animation)
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(0.1, clock.getDelta());
      const elapsed = clock.getElapsedTime();

      // Sample scroll state per-frame for buttery sync with Lenis momentum
      handleScroll();

      // Frame-rate independent exponential damping
      const damp = 1 - Math.exp(-14.0 * delta);
      const dampLid = 1 - Math.exp(-15.0 * delta);

      currentX += (targetX - currentX) * damp;
      currentY += (targetY - currentY) * damp;
      currentRotX += (targetRotX - currentRotX) * damp;
      currentRotY += (targetRotY - currentRotY) * damp;
      currentRotZ += (targetRotZ - currentRotZ) * damp; // Damp leftward tilt
      currentScale += (targetScale - currentScale) * damp;
      currentJarOpacity += (targetJarOpacity - currentJarOpacity) * damp;

      // Update jar materials opacity
      glassMat.opacity = 0.32 * currentJarOpacity;
      gheeMat.opacity = currentJarOpacity;
      gheeTopMat.opacity = currentJarOpacity;
      labelMat.opacity = currentJarOpacity;
      goldMat.opacity = currentJarOpacity;
      lidMat.opacity = currentJarOpacity;
      gheeSurfaceMat.opacity = currentJarOpacity;
      jarGroup.visible = currentJarOpacity > 0.005;

      currentLidY += (targetLidY - currentLidY) * dampLid;
      currentLidX += (targetLidX - currentLidX) * dampLid;
      currentLidRotY += (targetLidRotY - currentLidRotY) * dampLid;
      currentLidRotZ += (targetLidRotZ - currentLidRotZ) * dampLid;
      currentLidRotX += (targetLidRotX - currentLidRotX) * dampLid;

      // Subtle, gentle organic breath floating (±0.012)
      const floatY = Math.sin(elapsed * 1.5) * 0.012;

      jarGroup.position.x = currentX;
      jarGroup.position.y = currentY + floatY;
      jarGroup.rotation.x = currentRotX;
      jarGroup.rotation.y = currentRotY;
      jarGroup.rotation.z = currentRotZ; // Rotates ~35° to the left
      jarGroup.scale.set(currentScale, currentScale, currentScale);

      // Independent Lid Transform
      lidGroup.position.set(currentLidX, 1.15 + currentLidY, 0);
      lidGroup.rotation.set(currentLidRotX, currentLidRotY, currentLidRotZ);

      // Update DOM opacity and visibility directly
      if (domElement) {
        domElement.style.opacity = targetOpacity;
        domElement.style.visibility = targetOpacity <= 0.01 ? 'hidden' : 'visible';
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      handleScroll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [maxScrollElementId]);

  return (
    <div 
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1, // Behind text, above background
        overflow: 'hidden',
      }}
    />
  );
}
