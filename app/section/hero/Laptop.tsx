import { useLoader } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Laptop() {
  const glb = useLoader(GLTFLoader, "/models/laptop.glb");

  const [scale, setScale] = useState([7, 7, 7]);
  const [position, setPosition] = useState([-5, 0, 0]);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale([4, 4, 4]); // Smaller scale for mobile
        setPosition([-3.2, 0.6, 0]);
      } else {
        setScale([7, 7, 7]); // Default scale
        setPosition([-5, 0, 0]);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={5} />
      <primitive object={glb.scene} scale={scale} position={position} />
    </>
  );
}
