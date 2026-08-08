"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Burger3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(5, 10, 5);
    scene.add(spotLight);

    const burgerGroup = new THREE.Group();

    const bunGeom = new THREE.SphereGeometry(
      2,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    );
    const bunMat = new THREE.MeshPhongMaterial({ color: 0xd4a373 });
    const bunTop = new THREE.Mesh(bunGeom, bunMat);
    bunTop.position.y = 1;
    burgerGroup.add(bunTop);

    const lettuceGeom = new THREE.CylinderGeometry(2.1, 2.1, 0.2, 32);
    const lettuceMat = new THREE.MeshPhongMaterial({ color: 0x55a630 });
    const lettuce = new THREE.Mesh(lettuceGeom, lettuceMat);
    lettuce.position.y = 0.6;
    burgerGroup.add(lettuce);

    const pattyGeom = new THREE.CylinderGeometry(2, 2, 0.5, 32);
    const pattyMat = new THREE.MeshPhongMaterial({ color: 0x432818 });
    const patty = new THREE.Mesh(pattyGeom, pattyMat);
    patty.position.y = 0.1;
    burgerGroup.add(patty);

    const cheeseGeom = new THREE.BoxGeometry(3.8, 0.1, 3.8);
    const cheeseMat = new THREE.MeshPhongMaterial({ color: 0xffd60a });
    const cheese = new THREE.Mesh(cheeseGeom, cheeseMat);
    cheese.position.y = 0.4;
    cheese.rotation.y = Math.PI / 4;
    burgerGroup.add(cheese);

    const bunBottomGeom = new THREE.CylinderGeometry(2, 2, 0.6, 32);
    const bunBottom = new THREE.Mesh(bunBottomGeom, bunMat);
    bunBottom.position.y = -0.6;
    burgerGroup.add(bunBottom);

    scene.add(burgerGroup);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      burgerGroup.rotation.y += 0.01;
      burgerGroup.position.y = Math.sin(Date.now() * 0.002) * 0.2;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
          materials.forEach((m) => m.dispose());
        }
      });
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
